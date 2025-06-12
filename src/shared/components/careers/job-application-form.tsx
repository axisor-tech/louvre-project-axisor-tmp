import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader2, Send, Upload } from "lucide-react";
import { useForm } from "react-hook-form";
import { Form } from "react-router";
import { z } from "zod";

import { Button } from "~/shared/components/ui/button";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Form as FormShad,
} from "~/shared/components/ui/form";
import { Input } from "~/shared/components/ui/input";
import { Textarea } from "~/shared/components/ui/textarea";

const jobApplicationSchema = z.object({
  name: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "E-mail inválido" }),
  phone: z.string().min(10, { message: "Telefone inválido" }),
  linkedin: z.string().url({ message: "URL do LinkedIn inválida" }).optional().or(z.literal("")),
  portfolio: z.string().url({ message: "URL do portfólio inválida" }).optional().or(z.literal("")),
  experience: z.string().min(50, { message: "Por favor, descreva sua experiência com pelo menos 50 caracteres" }),
  motivation: z.string().min(50, { message: "Por favor, descreva sua motivação com pelo menos 50 caracteres" }),
});

type JobApplicationSchema = z.infer<typeof jobApplicationSchema>;

interface JobApplicationFormProps {
  jobTitle: string;
  jobId: string;
}

export function JobApplicationForm({ jobTitle, jobId }: JobApplicationFormProps) {
  const form = useForm<JobApplicationSchema>({
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      portfolio: "",
      experience: "",
      motivation: "",
    },
    resolver: zodResolver(jobApplicationSchema),
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl bg-background/80 backdrop-blur-md border border-border shadow-2xl"
      style={{
        boxShadow:
          "0 8px 32px 0 rgba(31, 38, 135, 0.15), 0 1.5px 4px 0 rgba(0,0,0,0.04)",
      }}
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-extrabold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 drop-shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Candidatura para {jobTitle}
      </motion.h2>
      
      <motion.p
        className="text-center text-muted-foreground mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Preencha o formulário abaixo para se candidatar a esta vaga
      </motion.p>

      <Form method="post">
        <input type="hidden" name="jobId" value={jobId} />
        <FormShad {...form}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-base">
                    Nome completo
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
                  <FormLabel className="font-semibold text-base">
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
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-base">
                    Telefone
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="(11) 98765-4321"
                      className="bg-white/70 dark:bg-input/40 border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="linkedin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-base">
                    LinkedIn (opcional)
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="https://linkedin.com/in/seuperfil"
                      className="bg-white/70 dark:bg-input/40 border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="portfolio"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel className="font-semibold text-base">
                    Portfólio ou GitHub (opcional)
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="https://github.com/seuperfil"
                      className="bg-white/70 dark:bg-input/40 border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="md:col-span-2 border-2 border-dashed border-border rounded-lg p-4 hover:border-primary/50 transition-all cursor-pointer">
              <div className="flex flex-col items-center justify-center py-4">
                <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                <p className="font-medium">Anexar currículo</p>
                <p className="text-sm text-muted-foreground">Arraste e solte ou clique para selecionar</p>
                <p className="text-xs text-muted-foreground mt-1">PDF, DOCX ou TXT (máx. 5MB)</p>
              </div>
              <input type="file" className="hidden" accept=".pdf,.docx,.doc,.txt" />
            </div>

            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel className="font-semibold text-base">
                    Experiência profissional
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Textarea
                        {...field}
                        placeholder="Descreva sua experiência profissional relevante para esta vaga..."
                        className="bg-white/70 dark:bg-input/40 border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all min-h-24 resize-none"
                        rows={4}
                        maxLength={2000}
                      />
                      <FormDescription className="absolute bottom-2 right-2 text-xs text-muted-foreground">
                        {field.value.length} / 2000 caracteres
                      </FormDescription>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="motivation"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel className="font-semibold text-base">
                    Por que você quer trabalhar conosco?
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Textarea
                        {...field}
                        placeholder="Conte-nos por que você se interessou por esta vaga e o que você pode agregar à nossa equipe..."
                        className="bg-white/70 dark:bg-input/40 border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all min-h-24 resize-none"
                        rows={4}
                        maxLength={2000}
                      />
                      <FormDescription className="absolute bottom-2 right-2 text-xs text-muted-foreground">
                        {field.value.length} / 2000 caracteres
                      </FormDescription>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <motion.div
              className="pt-2 md:col-span-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                type="submit"
                className="w-full py-3 font-semibold text-lg rounded-lg bg-gradient-to-r from-primary to-blue-500 text-white shadow-md hover:from-blue-500 hover:to-primary transition-all"
                disabled={
                  form.formState.isSubmitting || !form.formState.isValid
                }
              >
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Enviando candidatura...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Enviar candidatura
                  </>
                )}
              </Button>
            </motion.div>
          </div>
        </FormShad>
      </Form>
    </motion.div>
  );
}