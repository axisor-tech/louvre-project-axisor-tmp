import type { ContactFormSchema } from "~/shared/schema/types/contact-type";

const API_URL = import.meta.env.VITE_API_URL;

export const contactApi = {
  async post(data: ContactFormSchema) {
    const response = await fetch(`${API_URL}/contact`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(
        "Aconteceu um erro ao enviar a mensagem, e isso não deveria acontecer 🤔."
      );
    }

    return response.json();
  },
};
