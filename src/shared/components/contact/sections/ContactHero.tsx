'use client'
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const ContactHero = () => {
  return (
    <section className="container mx-auto px-4 mb-16 max-w-6xl">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-chart-1/20 border border-primary/20">
            <MessageCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-chart-1">
            Vamos Conversar
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          Estamos prontos para transformar suas ideias em soluções
          tecnológicas inovadoras. Entre em contato e descubra como podemos
          ajudar sua empresa a crescer.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ContactHero;
