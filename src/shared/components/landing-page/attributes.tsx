"use client";

import { motion } from "framer-motion";
import { ContainerTextFlip } from "../ui/container-text-flip";

const attributesVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export default function Attributes() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="min-h-[80vh] flex items-center justify-center bg-transparent text-white p-4 sm:p-8"
      variants={attributesVariants}
    >
      <div className="max-w-5xl w-full">
        <div className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
          <div className="mb-4 text-center sm:text-left">Na Axisor, unimos</div>
          <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
            <ContainerTextFlip
              words={[
                "inteligência artificial",
                "automação",
                "design centrado no usuário",
              ]}
              textClassName="text-white font-bold"
              className="bg-zinc-800/70 rounded-xl py-2 px-2"
              horizontalPadding={20}
              interval={3450}
            />
          </div>
          <div className="mb-4 text-center sm:text-left">para criar produtos</div>
          <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
            <ContainerTextFlip
              words={["acessíveis", "eficientes", "sustentáveis"]}
              textClassName="text-white font-bold"
              className="bg-zinc-800/70 rounded-xl py-2 px-2"
              horizontalPadding={20}
              interval={3500}
            />
          </div>
          <div className="text-center sm:text-left text-wrap">
            que transformam realidades.
          </div>
        </div>
      </div>
    </motion.div>
  );
}
