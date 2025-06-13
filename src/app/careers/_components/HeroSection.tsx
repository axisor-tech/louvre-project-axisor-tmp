'use client';

import { Button } from '@/shared/components/ui/button';
import { motion } from 'framer-motion';


export const HeroSection = () => {
  const scrollToPositions = () => {
    document
      .getElementById("open-positions")
      ?.scrollIntoView({ behavior: "smooth" }); 
  };
  return (
    <section className="container mx-auto px-4 mb-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500"
        >
          Construa seu futuro conosco
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl text-muted-foreground mb-8"
        >
          Na Axisor, acreditamos que pessoas talentosas e apaixonadas são a
          chave para criar soluções tecnológicas inovadoras que transformam
          negócios.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-blue-500 hover:from-blue-500 hover:to-primary text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
            onClick={scrollToPositions}
          >
            Ver vagas abertas
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};
