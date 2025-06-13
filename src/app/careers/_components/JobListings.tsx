'use client';

import { motion } from 'framer-motion';
import { JobPosition } from '../types';
import { staggerContainer, fadeInUp } from '../types';
import { JobCard } from './JobCard';

interface JobListingsProps {
  jobs: JobPosition[];
}

export const JobListings = ({ jobs }: JobListingsProps) => {
  return (
    <section id="open-positions" className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Vagas abertas</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Estamos sempre em busca de talentos para se juntar à nossa equipe.
          Confira nossas vagas disponíveis.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-0"
      >
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} variants={fadeInUp} />
        ))}
      </motion.div>
    </section>
  );
};
