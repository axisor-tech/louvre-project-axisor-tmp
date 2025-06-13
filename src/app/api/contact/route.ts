import { rateLimit } from "@/shared/lib/rate-limit";
import { getIP } from "@/shared/lib/utils";
import contactFormSchema from "@/shared/schema/contact-form";
import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/client";

// Rate limiting configuration (max 5 requests per minute per IP)
const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500, // Max users per second
});

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

interface EmailValidationResponse {
  valid: boolean;
  block: boolean;
  disposable: boolean;
  email_forwarder: boolean;
  domain: string;
  text: string;
  reason: string;
  risk: number;
  mx_host: string;
  possible_typo: boolean;
  mx_ip: string;
  mx_info: string;
  last_changed_at: string;
}

// Function to validate if an email is from a disposable/temporary email service
async function isDisposableEmail(email: string): Promise<boolean> {
  try {
    // Extract domain from email
    const domain = email.split("@")[1];
    if (!domain) return false;

    const response = await fetch(
      `https://mailcheck.p.rapidapi.com/?domain=${encodeURIComponent(domain)}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.RAPID_API_KEY!,
          "x-rapidapi-host": "mailcheck.p.rapidapi.com",
        },
      }
    );

    if (!response.ok) {
      console.error("Email validation API error:", await response.text());
      return false; // Fail open - don't block if API fails
    }

    const result: EmailValidationResponse = await response.json();

    // Consider email disposable if explicitly marked as disposable or high risk
    return result.disposable || result.risk > 80;
  } catch (error) {
    console.error("Error validating email:", error);
    return false; // Fail open - don't block if there's an error
  }
}

export async function POST(request: Request) {
  try {
    // Check Content-Type
    const contentType = request.headers.get("content-type");
    if (contentType !== "application/json") {
      return NextResponse.json(
        { error: "Content-Type must be application/json" },
        { status: 415 }
      );
    }

    // Apply rate limiting
    const ip = getIP(request);
    await limiter.check(10, "CACHE_TOKEN"); // 10 requests per minute

    // Check request size (max 10KB)
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > 10 * 1024) {
      return NextResponse.json({ error: "Payload too large" }, { status: 413 });
    }

    // Parse and validate request body
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const validation = contactFormSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          errors: validation.error.errors.map((err) => ({
            field: err.path[0],
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const { name, email, message } = {
      name: sanitizeInput(validation.data.name.trim()),
      email: validation.data.email.trim().toLowerCase(),
      message: sanitizeInput(validation.data.message.trim()),
    };

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          errors: [
            {
              field: "name",
              message: "O nome é obrigatório.",
            },
            {
              field: "email",
              message: "O email é obrigatório.",
            },
            {
              field: "message",
              message: "A mensagem é obrigatória.",
            },
          ],
        },
        { status: 400 }
      );
    }

    // Validate email format
    // Then in your route handler:
    const isDisposable = await isDisposableEmail(email);
    if (isDisposable) {
      return NextResponse.json(
        {
          errors: [
            {
              field: "email",
              message:
                "Não é permitido enviar mensagem com endereço de email temporário.",
            },
          ],
        },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length < 10) {
      return NextResponse.json(
        {
          errors: [
            {
              field: "message",
              message: "A mensagem deve ter pelo menos 10 caracteres.",
            },
          ],
        },
        { status: 400 }
      );
    }

    if (message.length > 1024) {
      return NextResponse.json(
        {
          errors: [
            {
              field: "message",
              message: "A mensagem deve ter no máximo 1024 caracteres.",
            },
          ],
        },
        { status: 400 }
      );
    }

    // Validate name length
    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        {
          errors: [
            {
              field: "name",
              message: "O nome deve ter entre 2 e 100 caracteres.",
            },
          ],
        },
        { status: 400 }
      );
    }

    // Validate email format with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          errors: [
            {
              field: "email",
              message: "Por favor, insira um endereço de email válido.",
            },
          ],
        },
        { status: 400 }
      );
    }

    // Insert into database with error handling
    try {
      await prisma.contact.create({
        data: {
          name,
          email,
          message,
          ip_address: ip,
        },
      });
    } catch (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        {
          error:
            "Erro ao salvar sua mensagem. Por favor, tente novamente mais tarde.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Mensagem enviada com sucesso! Aguarde nossa resposta." },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Error processing contact form:", error);

    return NextResponse.json(
      {
        error:
          "Hmm, parece que algo deu errado. Isso não deveria acontecer. 🤔",
      },
      { status: 500 }
    );
  }
}

// Add OPTIONS method for CORS preflight
// This is important for form submissions from the browser
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
