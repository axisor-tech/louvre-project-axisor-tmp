'use client'
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import { Spotlight } from "../background/Spotlight";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="relative flex w-full overflow-hidden bg-background dark:bg-gradient-to-b dark:from-background dark:to-background/90 antialiased">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none opacity-[0.15] dark:opacity-[0.07]",
          "[background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)]"
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="var(--primary)"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-2 pt-10 pb-20 sm:px-4 sm:pt-28 md:pt-40 flex flex-col items-start sm:items-center justify-start sm:justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="bg-gradient-to-b from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-center text-2xl font-bold text-transparent sm:text-4xl md:text-6xl lg:text-7xl">
            Axisor
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-secondary">
              O Eixo da Tecnologia
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-[90vw] text-center text-xs sm:mt-6 sm:max-w-lg sm:text-lg font-normal text-muted-foreground md:max-w-2xl">
            Na Axisor, desenvolvemos plataformas inteligentes com IA e inovação
            multidisciplinar para governos, empresas e pessoas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-6 w-full max-w-xs sm:gap-4 sm:mt-10 sm:max-w-full">
            <Button size="sm" className="w-full sm:w-auto group">
              Saiba mais
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="w-full sm:w-auto"
              asChild
            >
              <Link href="#contact-us">Contato</Link>
            </Button>
          </div>
        </motion.div>

        {/* Decorações adicionais - linhas para maior dimensionalidade */}
        <div className="hidden sm:block absolute bottom-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-30" />
        <div className="hidden sm:block absolute -left-20 top-1/2 h-40 w-px bg-gradient-to-b from-transparent via-border to-transparent opacity-30" />
        <div className="hidden sm:block absolute -right-20 top-1/2 h-40 w-px bg-gradient-to-b from-transparent via-border to-transparent opacity-30" />
      </div>
    </div>
  );
}
