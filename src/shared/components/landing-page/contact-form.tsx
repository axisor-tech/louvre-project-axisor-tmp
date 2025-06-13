'use client';
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/shared/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form as FormShad,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import contactFormSchema from "@/shared/schema/contact-form";
import type { ContactFormSchema } from "@/shared/schema/types/contact-type";
import { toast } from "sonner";

export function ContactForm() {
  const form = useForm<ContactFormSchema>({
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },

    resolver: zodResolver(contactFormSchema),
  });

  const handleMutation = useMutation({
    mutationFn: async (data: ContactFormSchema) => {
      const response = await fetch("/api/v1/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message ||
            "Aconteceu um erro ao enviar a mensagem, e isso não deveria acontecer 🤔."
        );
      }
      return response.json();
    },
    onSuccess: () => {
      form.reset();
      toast.success("Mensagem enviada com sucesso");
    },
    onError: (error: Error) => {
      console.error("Erro na API:", error);
      toast.error(error.message);
    },
  });

  const handleSubmit = (data: ContactFormSchema) => {
    handleMutation.mutate(data);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full max-w-lg mx-auto p-6 sm:p-8 rounded-2xl bg-background/80 backdrop-blur-md border border-border shadow-2xl"
      style={{
        boxShadow:
          "0 8px 32px 0 rgba(31, 38, 135, 0.15), 0 1.5px 4px 0 rgba(0,0,0,0.04)",
      }}
      id="contact-us"
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-chart-3 drop-shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Vamos conversar sobre como a tecnologia pode resolver o seu problema?
      </motion.h2>

      <FormShad {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="grid grid-cols-1 gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-base sm:text-lg">
                    Nome
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Seu nome completo"
                      className="bg-white/70 dark:bg-input/40 border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-base sm:text-lg">
                    E-mail
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="seuemail@exemplo.com"
                      className="bg-white/70 dark:bg-input/40 border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-base sm:text-lg">
                    O que a sua empresa precisa?
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Textarea
                        {...field}
                        placeholder="Descreva as necessidades da sua empresa..."
                        className="bg-white/70 dark:bg-input/40 border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all min-h-24 resize-none"
                        rows={5}
                        error={!!form.formState.errors.message}
                        maxLength={1024}
                      />
                      <FormDescription className="absolute bottom-2 right-2 text-xs text-muted-foreground">
                        {field.value.length} / 1024 caracteres
                      </FormDescription>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <motion.div
              className="pt-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                type="submit"
                className="w-full py-3 font-semibold text-lg rounded-lg bg-gradient-to-r from-primary to-chart-3 text-white shadow-md hover:from-chart-3 hover:to-primary transition-all"
                disabled={!form.formState.isValid || handleMutation.isPending}
              >
                {handleMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Enviar mensagem
                  </>
                )}
              </Button>
            </motion.div>
          </div>
        </form>
      </FormShad>
    </motion.div>
  );
}
