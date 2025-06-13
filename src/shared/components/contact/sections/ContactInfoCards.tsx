'use client'
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export interface ContactInfoItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: string;
  href: string;
  color: string;
}

interface ContactInfoCardsProps {
  contactInfo?: ContactInfoItem[];
}

// Default contact info if none provided
const defaultContactInfo: ContactInfoItem[] = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "E-mail",
    description: "Resposta em até 24 horas",
    value: "contato@axisor.com.br",
    href: "mailto:contato@axisor.com.br",
    color: "text-primary",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Telefone",
    description: "Seg-Sex, 9h às 18h",
    value: "+55 (47) 98480-7846",
    href: "tel:+5547984807846",
    color: "text-chart-1",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Localização",
    description: "Joinville, Santa Catarina",
    value: "Brasil",
    href: "#",
    color: "text-chart-4",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Horário",
    description: "Segunda a Sexta",
    value: "9h às 18h (BRT)",
    href: "#",
    color: "text-chart-2",
  },
];

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const ContactInfoCards = ({ contactInfo = defaultContactInfo }: ContactInfoCardsProps) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
    >
      {contactInfo.map((info, index) => (
        <motion.a
          key={index}
          href={info.href}
          variants={fadeInUp}
          className="group bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-lg transition-all hover:border-primary/30 block"
        >
          <div
            className={`p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 w-fit mb-4 group-hover:scale-110 transition-transform ${info.color}`}
          >
            {info.icon}
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-1">
            {info.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            {info.description}
          </p>
          <p className={`font-medium ${info.color} group-hover:underline`}>
            {info.value}
          </p>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default ContactInfoCards;
