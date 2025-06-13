'use client';

import { motion } from 'framer-motion';
import { Benefit } from '../types';
import { BenefitCard } from './BenefitCard';
import { staggerContainer, fadeInUp } from '../types';

interface BenefitsSectionProps {
  benefits: Benefit[];
}

export const BenefitsSection = ({ benefits }: BenefitsSectionProps) => {
  return (
    <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-background/50 to-background/30 rounded-3xl mb-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">
          Benefícios de trabalhar conosco
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Valorizamos nossos colaboradores e oferecemos um pacote de
          benefícios competitivo para garantir seu bem-estar e
          desenvolvimento.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {benefits.map((benefit, index) => (
          <BenefitCard 
            key={index} 
            benefit={benefit} 
            variants={fadeInUp} 
          />
        ))}
      </motion.div>
    </section>
  );
};
