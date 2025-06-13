"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { motion } from "framer-motion";
import { staggerContainer, type JobPosition } from "../types";

interface JobListingsProps {
  jobs: JobPosition[];
}

export const JobListings = ({}: JobListingsProps) => {
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
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-5 mb-12"
      >
        <div className="w-48 h-48">
          <DotLottieReact src="assets/animations/sad.lottie" loop autoplay />
        </div>

        <p className="text-muted-foreground max-w-2xl mx-auto text-center text-lg font-medium">
          <span className="block text-primary font-semibold mb-1">
            No momento, não temos vagas abertas.
          </span>
          Não se preocupe! Envie seu currículo para{" "}
          <a
            className="underline text-blue-600 hover:text-blue-800"
            href="mailto:carreira@axisor.com.br"
          >
            carreira@axisor.com.br
          </a>{" "}
          e entraremos em contato assim que surgir uma oportunidade.
        </p>
      </motion.div>
    </section>
  );
};
