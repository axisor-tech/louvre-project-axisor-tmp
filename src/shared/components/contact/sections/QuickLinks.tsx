'use client'
import { ExternalLink, Shield, Users } from "lucide-react";

export interface QuickLink {
  href: string;
  icon: React.ReactNode;
  text: string;
}

interface QuickLinksProps {
  links?: QuickLink[];
  title?: string;
}

const defaultLinks: QuickLink[] = [
  {
    href: "/careers",
    icon: <Users className="h-4 w-4" />,
    text: "Trabalhe Conosco",
  },
  {
    href: "/privacy-term",
    icon: <Shield className="h-4 w-4" />,
    text: "Política de Privacidade",
  },
  {
    href: "/term-of-use",
    icon: <Shield className="h-4 w-4" />,
    text: "Termos de Uso",
  },
];

export const QuickLinks = ({ 
  links = defaultLinks,
  title = "Links Úteis"
}: QuickLinksProps) => {
  return (
    <div className="bg-gradient-to-r from-primary/10 to-chart-1/10 border border-primary/20 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        {title}
      </h3>
      <div className="space-y-3">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="flex items-center gap-2 text-primary hover:underline"
          >
            {link.icon}
            {link.text}
            <ExternalLink className="h-3 w-3" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
