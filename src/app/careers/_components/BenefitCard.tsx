'use client';

import { motion } from 'framer-motion';
import { Benefit } from '../types';

interface BenefitCardProps {
  benefit: Benefit;
  variants: {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    transition: { duration: number };
  };
}

export const BenefitCard = ({ benefit, variants }: BenefitCardProps) => {
  return (
    <motion.div
      variants={variants}
      className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:border-primary/30 group h-full"
    >
      <div className="mb-4 p-3 rounded-full bg-gradient-to-br from-background to-background/50 border border-border/30 w-fit group-hover:border-primary/20 transition-all">
        {benefit.icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
      <p className="text-muted-foreground">{benefit.description}</p>
    </motion.div>
  );
};
