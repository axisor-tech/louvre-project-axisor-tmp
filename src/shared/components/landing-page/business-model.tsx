'use client'
import { motion } from "framer-motion";
import { cn } from "@/shared/lib/utils";
import { PointerHighlight } from "../ui/pointer-highlight";

const businessModelVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function BusinessModel() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="my-24"
      variants={businessModelVariants}
    >
      <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center tracking-tight">
        Nosso Modelo de Negócio
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {[
          {
            title: "Desenvolvimento sob demanda",
            description:
              "Geração de caixa e validação técnica através de projetos personalizados que atendem às necessidades específicas de nossos clientes.",
            icon: "💼",
            color: "text-primary",
          },
          {
            title: "Produtos próprios SaaS",
            description:
              "Desenvolvemos e oferecemos soluções Software as a Service (SaaS) inovadoras, como o Gutenvox e a plataforma Atena, escaláveis e prontas para uso.",
            icon: "💪",
            color: "text-chart-1",
          },
          {
            title: "Pesquisa e inovação aplicada",
            description:
              "Nosso foco está em pesquisa e inovação com aplicação prática, buscando soluções escaláveis e com impacto social e tecnológico relevante.",
            icon: "🔬",
            color: "text-chart-3",
          },
          {
            title: "Cultura open-source",
            description:
              "Acreditamos no poder da colaboração e contribuímos ativamente para o ecossistema de tecnologia através de uma cultura open-source forte.",
            icon: "🌐",
            color: "text-chart-4",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-card p-8 rounded-xl shadow-sm border-border border h-full flex flex-col hover:shadow-md transition-shadow duration-300"
          >
            <div className="text-4xl mb-6 text-center bg-muted inline-flex items-center justify-center w-14 h-14 rounded-full mx-auto">
              {item.icon}
            </div>
            <h4 className="text-xl font-semibold mb-4 text-center">
              <PointerHighlight containerClassName="inline-block">
                <span className={cn("font-bold", item.color)}>
                  {item.title}
                </span>
              </PointerHighlight>
            </h4>
            <p className="text-muted-foreground text-base leading-relaxed flex-grow text-center">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
