'use client'
import FAQ from "@/shared/components/contact/faq";
import { motion } from "framer-motion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQItem[];
  title?: string;
  description?: string;
}

// Animation variants
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const FAQSection = ({ 
  faqs = [],
  title = "Perguntas Frequentes",
  description = "Encontre respostas para as dúvidas mais comuns sobre nossos serviços e processos."
}: FAQSectionProps) => {
  return (
    <section className="container mx-auto px-4 mt-20 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-foreground mb-4">
          {title}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="space-y-4"
      >
        {faqs.map((faq, index) => (
          <FAQ key={index} faq={faq} />
        ))}
      </motion.div>
    </section>
  );
};

export default FAQSection;
