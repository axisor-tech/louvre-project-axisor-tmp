'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/shared/lib/utils";
import Image from "next/image";

const footerLinkCategories = [
  {
    title: "Empresa",
    links: [
      { name: "Sobre", href: "/about" },
      { name: "Carreiras", href: "/careers" },
    ],
  },
  {
    title: "Soluções",
    links: [
      { name: "Plataforma Atena", href: "/solutions/atena" },
      { name: "Gutenvox", href: "/solutions/gutenvox" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { name: "Documentação", href: "/documentation" },
      { name: "BlogAxisor", href: "/blog" },
    ],
  },
  {
    title: "Termos",
    links: [
      { name: "Política de Privacidade", href: "/privacy-policy" },
      { name: "Termos de Uso", href: "/terms-of-use" },
    ],
  },
];

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t border-border mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
        >
          {footerLinkCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <h3 className="text-sm font-semibold text-foreground mb-3">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm text-muted-foreground hover:text-foreground transition-colors",
                        "block py-1 hover:underline underline-offset-4"
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Link href="/" className="flex items-center">
                  <Image
                    src="/assets/logo/axisor_icon_light.png"
                    alt="Axisor Logo"
                    width={24}
                    height={24}

                  />
                  <span className="ml-2 text-xs font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                    &copy; {currentYear} Axisor Technologies Brasil LTDA.
                  </span>
                </Link>
              </motion.div>
            </div>

            <div className="mt-4 sm:mt-0">
              <p className="text-xs text-muted-foreground text-center sm:text-right">
                CNPJ: 60.418.062/0001-40
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
