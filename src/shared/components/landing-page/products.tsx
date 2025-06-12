'use client'

import { cn } from "@/shared/lib/utils";
import { BookOpen, Cloud, Lightbulb } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { memo, useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { GlowingStarsBackgroundCard } from "../ui/glowing-stars";

export function Products() {
  return (
    <section className="flex flex-col w-full px-4 sm:px-6 md:px-8 my-10 md:my-16">
      <h2 className="mb-6 text-center sm:text-left text-4xl font-bold flex justify-center items-center">
        Nossos Produtos
      </h2>
      <BentoGrid className="max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn(
              "transition-all duration-300 hover:scale-[1.02] focus-within:scale-[1.02] [&>p:text-sm] sm:[&>p:text-base] min-h-[280px] p-3 sm:p-4",
              item.className
            )}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

// Componentes de skeleton otimizados com memo para evitar re-renderizações desnecessárias

const AtenaSkeleton = memo(() => {
  return <GlowingStarsBackgroundCard />;
});

AtenaSkeleton.displayName = "AtenaSkeleton";

const GutenvoxSkeleton = memo(() => {
  const [mounted, setMounted] = useState(false);
  const [delays] = useState(() => [
    Math.random() * 0.5,
    Math.random() * 0.5,
    Math.random() * 0.5
  ]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const loadingVariants = {
    initial: { opacity: 0.5, scaleY: 0.5, borderRadius: "50%" },
    animate: (i: number) => ({
      opacity: [0.5, 1, 0.5],
      scaleY: [0.5, 1.5, 0.5],
      borderRadius: ["50%", "50px", "100%"],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.3,
      },
    }),
  };

  if (!mounted) {
    return (
      <div className="flex-1 w-full h-full min-h-[100px] bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl" />
    );
  }


  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="flex flex-1 w-full h-full min-h-[100px] bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/20 dark:to-purple-900/20 flex-col space-y-2 justify-center p-3 sm:p-4 rounded-xl relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>

      <div className="flex justify-center items-center h-full">
        {delays.map((delay, i) => (
          <motion.div
            key={`shape-${i}`}
            className="h-8 w-4 bg-current mx-1 shadow-lg"
            custom={i}
            variants={loadingVariants}
            style={{
              animationDelay: `${delay}s`,
              background: "linear-gradient(135deg, #6b73ff, #000dff)",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
});

GutenvoxSkeleton.displayName = "GutenvoxSkeleton";

const SkeletonThree = memo(() => {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0, 50%", "100% 50%", "0 50%"] },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[100px] rounded-xl bg-dot-pattern flex-col space-y-2 items-center justify-center overflow-hidden will-change-auto"
      style={{
        background:
          "linear-gradient(-45deg, var(--chart-1), var(--chart-3), var(--chart-2), var(--primary))",
        backgroundSize: "400% 400%",
      }}
    >
      <Image
        src="/assets/logo/github.svg"
        alt="Github"
        className="brightness-[2]"
        width={128}
        height={128}
        loading="lazy"
      />
    </motion.div>
  );
});

SkeletonThree.displayName = "SkeletonThree";

const SkeletonFour = memo(() => {
  const first = {
    initial: { x: 20, rotate: -5 },
    hover: { x: 0, rotate: 0 },
  };
  const second = {
    initial: { x: -20, rotate: 5 },
    hover: { x: 0, rotate: 0 },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[120px] bg-dot-pattern flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 items-center justify-center p-3 sm:p-4 rounded-xl"
    >
      <motion.div
        variants={first}
        className="w-full sm:w-1/2 rounded-xl bg-card p-3 border border-border flex flex-col items-center justify-center transform sm:rotate-[-5deg] shadow-md mb-3 sm:mb-0"
      >
        <p className="text-md font-semibold text-primary text-center">
          Inovação Constante
        </p>
        <p className="text-xs text-muted-foreground mt-1 text-center line-clamp-2">
          Buscamos sempre as melhores soluções.
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="w-full sm:w-1/2 rounded-xl bg-card p-3 border border-border flex flex-col items-center justify-center transform sm:rotate-[5deg] shadow-md"
      >
        <p className="text-md font-semibold text-primary text-center">
          Foco no Impacto
        </p>
        <p className="text-xs text-muted-foreground mt-1 text-center line-clamp-2">
          Tecnologia que transforma realidades.
        </p>
      </motion.div>
    </motion.div>
  );
});

SkeletonFour.displayName = "SkeletonFour";

const CloudSkeleton = memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      className="flex flex-1 w-full h-full min-h-[100px] bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 flex-col items-center justify-center p-3 sm:p-4 rounded-xl overflow-hidden"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Núcleo central representando a nuvem */}
          <motion.circle
            cx="100"
            cy="100"
            r="20"
            fill="url(#cloudGradient)"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1.05 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient id="cloudGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>

          {/* Órbitas representando servidores */}
          {[40, 60, 80].map((radius, index) => (
            <circle
              key={index}
              cx="100"
              cy="100"
              r={radius}
              stroke="#1e40af"
              strokeWidth="0.5"
              fill="none"
            />
          ))}

          {/* Elétrons representando dados */}
          {[0, 120, 240].map((angle, index) => (
            <motion.circle
              key={index}
              cx="100"
              cy="100"
              r="3"
              fill="#2563eb"
              animate={{
                x: [
                  Math.cos((angle * Math.PI) / 180) * 60,
                  Math.cos(((angle + 120) * Math.PI) / 180) * 60,
                ],
                y: [
                  Math.sin((angle * Math.PI) / 180) * 60,
                  Math.sin(((angle + 120) * Math.PI) / 180) * 60,
                ],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.g>
      </svg>
    </motion.div>
  );
});

CloudSkeleton.displayName = "CloudSkeleton";

const items = [
  {
    title: (
      <span className="block text-lg sm:text-xl font-bold text-primary">
        Soluções Criativas para um Futuro Inteligente
      </span>
    ),
    description: (
      <span className="text-sm text-muted-foreground mt-2 line-clamp-3">
        Transformamos o cotidiano de cidades, instituições e pessoas com
        tecnologia de ponta.
      </span>
    ),
    header: <SkeletonFour />,
    className:
      "col-span-1 sm:col-span-2 md:col-span-2 rounded-xl shadow-md overflow-hidden border border-border bg-background",
    icon: <Lightbulb className="h-4 w-4 text-primary" />,
  },
  {
    title: (
      <span className="block text-base font-semibold text-chart-1">
        Gutenvox Audiolivros com IA
      </span>
    ),
    description: (
      <span className="text-xs text-muted-foreground mt-1.5 line-clamp-4">
        Transforme qualquer PDF em um audiolivro imersivo com narração por IA,
        trilhas sonoras e tradução. Acesse conhecimento de forma acessível,
        inclusiva e moderna.
      </span>
    ),
    header: <GutenvoxSkeleton />,
    className:
      "col-span-1 rounded-xl shadow-md overflow-hidden border border-border bg-background",
    icon: <BookOpen className="h-4 w-4 text-primary" />,
  },
  {
    title: (
      <span className="block text-base font-semibold text-chart-3">
        Projetos Open Source
      </span>
    ),
    description: (
      <span className="text-xs text-muted-foreground mt-1.5 line-clamp-4">
        Acreditamos que tecnologia deve ser compartilhada. Desenvolvemos e
        apoiamos projetos de código aberto em inteligência artificial, automação
        e acessibilidade digital.
      </span>
    ),
    header: <SkeletonThree />,
    className:
      "col-span-1 rounded-xl shadow-md overflow-hidden border border-border bg-background",
    icon: (
      <Image
        src="/assets/logo/github.svg"
        alt="Github"
        className="h-4 w-4"
        style={{ filter: "invert(1)" }}
        width={16}
        height={16}
        loading="lazy"
      />
    ),
  },
  {
    title: (
      <span className="block text-base font-semibold text-chart-2">
        Atena Iluminação Pública Inteligente
      </span>
    ),
    description: (
      <span className="text-xs text-muted-foreground mt-1.5 line-clamp-4">
        Gestão eficiente de redes de iluminação para prefeituras e
        concessionárias. Controle remoto, geolocalização e relatórios detalhados
        para economia, eficiência e transparência na gestão urbana.
      </span>
    ),
    header: <AtenaSkeleton />,
    className:
      "col-span-1 rounded-xl shadow-md overflow-hidden border border-border bg-background",
    icon: <Lightbulb className="h-4 w-4 text-primary" />,
  },
  {
    title: (
      <span className="block text-base font-semibold text-chart-4">
        Hospedagem e Cloud
      </span>
    ),
    description: (
      <span className="text-xs text-muted-foreground mt-1.5 line-clamp-4">
        Hospedamos e gerenciamos servidores de forma eficiente e segura.
      </span>
    ),
    header: <CloudSkeleton />,
    className:
      "col-span-1 rounded-xl shadow-md overflow-hidden border border-border bg-background",
    icon: <Cloud className="h-4 w-4 text-primary" />,
  },
];
