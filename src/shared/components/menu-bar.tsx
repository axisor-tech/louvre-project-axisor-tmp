'use client'

import { motion } from "framer-motion";
import { Briefcase, Home, Mail, Menu, User, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "../lib/utils";
import Logo from "./logo";

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  gradient: string;
  iconColor: string;
}

const menuItems: MenuItem[] = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Início",
    href: "/",
    gradient:
      "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-primary",
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "Sobre",
    href: "/about",
    gradient:
      "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-chart-5",
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    label: "Carreira",
    href: "/careers",
    gradient:
      "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-chart-2",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Contato",
    href: "/contact",
    gradient:
      "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-chart-6",
  },
];

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
  active: {
    opacity: 0.8,
    scale: 1.5,
    transition: {
      opacity: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.3, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
      delay: 0.2,
    },
  },
};

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

// Variantes para o menu móvel
const mobileMenuVariants = {
  closed: {
    opacity: 0,
    y: "100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const mobileMenuItemVariants = {
  closed: {
    opacity: 0,
    y: 20,
  },
  open: {
    opacity: 1,
    y: 0,
  },
};


export function MenuBar() {
  const isActive = usePathname()
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {  
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Menu desktop
  const DesktopMenu = () => (
    <motion.nav
      className="hidden md:flex p-2 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/50 shadow-lg relative overflow-hidden"
      initial="initial"
      whileHover="hover"
    >
      <div className="flex items-center gap-4">
        <Logo className="py-1" hideText={false} />
        <motion.div
          className="absolute -inset-2 bg-gradient-radial from-transparent via-primary/20 to-transparent rounded-3xl z-0 pointer-events-none"
          variants={navGlowVariants}
        />
        <ul className="flex items-center gap-2 relative z-10 ml-auto">
          {menuItems.map((item) => (
            <motion.li key={item.label} className="relative">
              <Link href={item.href}>
                  <motion.div
                    className="block rounded-xl overflow-visible group relative"
                    style={{ perspective: "600px" }}
                    whileHover="hover"
                    initial="initial"
                    animate={isActive === item.href ? "active" : "initial"}
                  >
                    <motion.div
                      className="absolute inset-0 z-0 pointer-events-none"
                      variants={glowVariants}
                      style={{
                        background: item.gradient,
                        borderRadius: "16px",
                      }}
                    />
                    <motion.div
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent transition-colors rounded-xl",
                        isActive === item.href
                          ? `text-foreground ${item.iconColor}`
                          : "text-muted-foreground group-hover:text-foreground"
                      )}
                      variants={itemVariants}
                      transition={sharedTransition}
                      style={{
                        transformStyle: "preserve-3d",
                        transformOrigin: "center bottom",
                      }}
                    >
                      <span
                        className={cn(
                          "transition-colors duration-300",
                          isActive
                            ? item.iconColor
                            : "text-foreground group-hover:" + item.iconColor
                        )}
                      >
                        {item.icon}
                      </span>
                      <span className="inline">{item.label}</span>
                    </motion.div>
                    <motion.div
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent transition-colors rounded-xl",
                        isActive === item.href
                          ? `text-foreground ${item.iconColor}`
                          : "text-muted-foreground group-hover:text-foreground"
                      )}
                      variants={backVariants}
                      transition={sharedTransition}
                      style={{
                        transformStyle: "preserve-3d",
                        transformOrigin: "center top",
                        rotateX: 90,
                      }}
                    >
                      <span
                        className={cn(
                          "transition-colors duration-300",
                          isActive === item.href
                            ? item.iconColor
                            : "text-foreground group-hover:" + item.iconColor
                        )}
                      >
                        {item.icon}
                      </span>
                      <span className="inline">{item.label}</span>
                    </motion.div>
                  </motion.div>
                
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );

  // Menu mobile (bottombar)
  const MobileMenu = () => (
    <>
      {/* Barra fixa na parte inferior */}
      <motion.nav
        className="md:hidden fixed bottom-0 left-0 right-0 p-2 bg-background/90 backdrop-blur-md border-t border-border z-50"
        initial="initial"
      >
        <div className="flex items-center justify-between">
          {/* Logo (modo compacto) */}
          <div className="px-3">
            <Logo hideText={true} width={24} height={24} />
          </div>

          {/* Menu inferior com ícones */}
          <div className="flex-1 flex justify-center">
            <ul className="flex items-center justify-around w-full">
              {menuItems.slice(0, 3).map((item) => (
                <li key={item.label} className="relative">
                  <Link href={item.href}>
                      <div className="flex flex-col items-center py-1 px-3">
                        <span
                          className={cn(
                            "transition-colors duration-300 relative",
                            isActive === item.href ? item.iconColor : "text-muted-foreground"
                          )}
                        >
                          {item.icon}
                          {isActive === item.href && (
                            <motion.div
                              layoutId="bottombar-indicator"
                              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-current"
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                              }}
                            />
                          )}
                        </span>
                        <span
                          className={cn(
                            "text-xs mt-1",
                            isActive === item.href
                              ? "text-foreground"
                              : "text-muted-foreground"
                          )}
                        >
                          {item.label}
                        </span>
                      </div>
                    
                  </Link>
                </li>
              ))}

              {/* Botão de menu completo */}
              <li className="relative">
                <button
                  onClick={toggleMobileMenu}
                  className="flex flex-col items-center justify-center py-1 px-3"
                >
                  <span className="text-muted-foreground">
                    <Menu className="h-5 w-5" />
                  </span>
                  <span className="text-xs mt-1 text-muted-foreground">
                    Menu
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>

      {/* Overlay do menu móvel */}
      <motion.div
        className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-md z-50"
        initial="closed"
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
      >
        <div className="flex flex-col h-full p-5">
          {/* Cabeçalho com logo e botão fechar */}
          <div className="flex items-center justify-between mb-8">
            <Logo hideText={false} />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-full bg-primary/10 text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Lista de navegação vertical */}
          <motion.ul className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <motion.li
                key={item.label}
                variants={mobileMenuItemVariants}
                className="border-b border-border/20 pb-3"
              >
                <Link href={item.href} onClick={toggleMobileMenu}>
                    <div
                      className={cn(
                        "flex items-center gap-3 p-3 rounded-xl",
                        isActive ? "bg-primary/10" : "hover:bg-muted/30"
                      )}
                    >
                      <div
                        className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center",
                          isActive ? item.iconColor : "text-muted-foreground"
                        )}
                      >
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <span
                          className={cn(
                            "text-lg font-medium",
                            isActive
                              ? "text-foreground"
                              : "text-muted-foreground"
                          )}
                        >
                          {item.label}
                        </span>
                      </div>
                    </div>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </>
  );

  return (
    <>
      <DesktopMenu />
      <MobileMenu />
    </>
  );
}
