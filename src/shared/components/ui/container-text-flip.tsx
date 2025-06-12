'use client'

import { motion } from "framer-motion";
import { useEffect, useId, useRef, useState, useCallback } from "react";
import { cn } from "@/shared/lib/utils";

export interface ContainerTextFlipProps {
  /** Array de palavras para alternar na animação */
  words: string[];
  /** Tempo em milissegundos entre transições de palavras */
  interval?: number;
  /** Classes CSS adicionais para o container */
  className?: string;
  /** Classes CSS adicionais para o texto */
  textClassName?: string;
  /** Duração da animação de transição em milissegundos */
  animationDuration?: number;
  /** Padding horizontal adicional em pixels */
  horizontalPadding?: number;
}

export function ContainerTextFlip({
  words,
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
  horizontalPadding = 60,
}: ContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const textRef = useRef<HTMLDivElement>(null);

  const updateWidthForWord = useCallback(() => {
    if (textRef.current) {
      const textWidth = textRef.current.scrollWidth + horizontalPadding;
      setWidth(textWidth);
    }
  }, [horizontalPadding]);

  useEffect(() => {
    // Atualiza a largura quando a palavra muda
    updateWidthForWord();

    // Também atualiza após um pequeno atraso para garantir medições precisas
    const timeoutId = setTimeout(updateWidthForWord, 50);
    return () => clearTimeout(timeoutId);
  }, [currentWordIndex, horizontalPadding, updateWidthForWord]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <motion.span
      layout
      layoutId={`container-text-flip-${id}`}
      animate={{ width }}
      transition={{
        duration: animationDuration / 2000,
        ease: "easeInOut",
      }}
      className={cn(
        "relative inline-block rounded-lg py-2 text-center font-bold m-0",
        "text-foreground",
        "bg-card dark:bg-card",
        "ring-1 ring-border shadow-md shadow-foreground/10",
        "text-4xl md:text-7xl",
        className
      )}
      key={words[currentWordIndex]}
    >
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
        }}
        className={cn("px-4 flex justify-center", textClassName)}
        ref={textRef}
        layoutId={`word-content-${id}-${currentWordIndex}`}
      >
        <motion.div className="inline-block">
          {words[currentWordIndex].split("").map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              initial={{
                opacity: 0,
                filter: "blur(10px)",
                y: 10,
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
              }}
              transition={{
                delay: index * 0.02,
                duration: 0.2,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.span>
  );
}
