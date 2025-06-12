import { z } from "zod";

 const contactFormSchema = z.object({
  name: z
    .string({
      required_error: "O nome é obrigatório.",
    })
    .min(1, {
      message: "Preencha este campo.",
    }),
  email: z
    .string({
      required_error: "O e-mail é obrigatório.",
    })
    .email({
      message: "Digite um e-mail válido.",
    }),
  message: z
    .string({
      required_error: "A mensagem é obrigatória.",
    })
    .min(1, {
      message: "Descreva sua mensagem.",
    })
    .max(1024, {
      message: "A mensagem está muito longa.",
    }),
});

export default contactFormSchema;
