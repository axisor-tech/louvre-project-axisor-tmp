'use client'
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

interface ContactCTAProps {
  title?: string;
  description?: string;
  emailHref?: string;
  emailText?: string;
  phoneHref?: string;
  phoneText?: string;
}

export const ContactCTA = ({
  title = "Pronto para começar seu projeto?",
  description = "Nossa equipe está pronta para entender suas necessidades e criar a solução perfeita para seu negócio.",
  emailHref = "mailto:contato@axisor.com.br",
  emailText = "Enviar E-mail",
  phoneHref = "tel:+5547999999999",
  phoneText = "Ligar Agora"
}: ContactCTAProps) => {
  return (
    <section className="container mx-auto px-4 mt-20 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="bg-gradient-to-r from-primary/10 to-chart-1/10 border border-primary/20 rounded-2xl p-8 md:p-12 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {title}
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={emailHref}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            <Mail className="h-5 w-5" />
            {emailText}
          </Link>
          <Link
            href={phoneHref}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border bg-background/50 text-foreground rounded-lg font-semibold hover:bg-accent/50 transition-colors"
          >
            <Phone className="h-5 w-5" />
            {phoneText}
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
