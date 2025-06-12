import type { z } from "zod";
import contactFormSchema from "../contact-form";

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
