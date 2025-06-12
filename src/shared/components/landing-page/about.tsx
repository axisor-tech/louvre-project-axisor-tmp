


"use client";

import { motion } from "framer-motion";
import { PointerHighlight } from "@/shared/components/ui/pointer-highlight";
 

export default function About() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-24 text-center max-w-3xl mx-auto"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight">
        Construímos tecnologia com propósito e impacto real.
      </h2>
      <div className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
        <p className="inline">
          Somos uma empresa de tecnologia que cria soluções para problemas
          concretos nas áreas de{" "}
        </p>
        <PointerHighlight containerClassName="inline-block mx-1">
          <span className="text-chart-1 font-semibold">
            Cidades Inteligentes
          </span>
        </PointerHighlight>{" "}
        <p className="inline">
          e{" "}
        </p>
        <PointerHighlight containerClassName="inline-block mx-1">
          <span className="text-chart-4 font-semibold">Educação com IA</span>
        </PointerHighlight>
        <p className="inline">.</p>
      </div>
    </motion.div>
  );
}
