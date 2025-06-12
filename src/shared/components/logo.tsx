import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  hideText?: boolean;
}

export default function Logo({
  width = 32,
  height = 32,
  className,
  hideText = false,
}: LogoProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Após a montagem no cliente, atualizamos o estado
  useEffect(() => {
    setMounted(true);
  }, []);

  // Durante a renderização no servidor ou primeira renderização no cliente,
  // usamos a mesma imagem para evitar incompatibilidade de hidratação
  const logoSrc = mounted
    ? resolvedTheme === "dark" || theme === "dark"
      ? "/assets/logo/axisor_icon_light.png"
      : "/assets/logo/axisor_icon_dark.png"
    : "/assets/logo/axisor_icon_dark.png"; // Valor padrão para SSR

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Link href="/" className="flex items-center gap-x-1.5">
        <div className="border-2 border-border rounded-full p-0.5">
          <Image
            src={logoSrc}
            alt="Axisor"
            width={width}
            height={height}
            className="object-contain"
            loading="lazy"
          />
        </div>
        {!hideText && (
          <span className="font-bold text-foreground text-xl md:text-2xl whitespace-nowrap">
            Axisor
          </span>
        )}
      </Link>
    </div>
  );
}
