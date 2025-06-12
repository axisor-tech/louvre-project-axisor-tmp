import { z } from "zod";

const jobApplicationSchema = z.object({
  name: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "E-mail inválido" }),
  phone: z.string().min(10, { message: "Telefone inválido" }),
  linkedin: z.string().url({ message: "URL do LinkedIn inválida" }).optional().or(z.literal("")),
  portfolio: z.string().url({ message: "URL do portfólio inválida" }).optional().or(z.literal("")),
  experience: z.string().min(50, { message: "Por favor, descreva sua experiência com pelo menos 50 caracteres" }),
  motivation: z.string().min(50, { message: "Por favor, descreva sua motivação com pelo menos 50 caracteres" }),
});

export default jobApplicationSchema;