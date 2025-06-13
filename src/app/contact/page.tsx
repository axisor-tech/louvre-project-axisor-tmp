
import ContactCTA from "@/shared/components/contact/sections/ContactCTA";
import ContactHero from "@/shared/components/contact/sections/ContactHero";
import ContactInfoCards from "@/shared/components/contact/sections/ContactInfoCards";
import FAQSection, { FAQItem } from "@/shared/components/contact/sections/FAQSection";
import Features, { FeatureItem } from "@/shared/components/contact/sections/Features";
import QuickLinks from "@/shared/components/contact/sections/QuickLinks";
import { ContactForm } from "@/shared/components/landing-page/contact-form";
import { Shield, Users, Zap } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Axisor Technologies Brasil",
  description:
    "Entre em contato com a Axisor Technologies Brasil. Estamos prontos para transformar suas ideias em soluções tecnológicas inovadoras.",
};

const quickLinks = [
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

const features: FeatureItem[] = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Resposta Rápida",
    description: "Retornamos seu contato em até 24 horas úteis",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Consultoria Gratuita",
    description:
      "Primeira consulta sem compromisso para entender suas necessidades",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Confidencialidade",
    description: "Suas informações são tratadas com total sigilo e segurança",
  },
];

const faqs: FAQItem[] = [
  {
    question: "Qual é o tempo médio para desenvolvimento de um projeto?",
    answer:
      "O tempo varia conforme a complexidade do projeto. Projetos simples podem levar de 2-4 semanas, enquanto soluções mais complexas podem levar de 2-6 meses ou mais. Fornecemos um cronograma detalhado após a análise inicial.",
  },
  {
    question: "Vocês oferecem suporte após a entrega do projeto?",
    answer:
      "Sim! Oferecemos diferentes planos de suporte e manutenção. Com opções personalizadas, de acordo com as necessidades do cliente.",
  },
  {
    question: "Como funciona o processo de orçamento?",
    answer:
      "Após o primeiro contato, agendamos uma reunião para entender suas necessidades. Em seguida, elaboramos uma proposta detalhada com escopo, cronograma e investimento necessário.",
  },
  {
    question: "Trabalham com empresas de que porte?",
    answer:
      "Atendemos desde startups até grandes corporações. Nosso foco está em criar soluções escaláveis que crescem junto com seu negócio.",
  },
  {
    question: "Quais tecnologias vocês utilizam?",
    answer:
      "Trabalhamos com tecnologias modernas como React, Node.js, Python, IA/ML, cloud computing (AWS, Google Cloud, Cloudflare), e sempre escolhemos a melhor stack para cada projeto específico.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90 pt-24 pb-16">
      <ContactHero />
      <ContactInfoCards />
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        <ContactForm />
        <div className="flex flex-col gap-8">
          <Features features={features} />
          <QuickLinks links={quickLinks} title="Links Úteis" />
        </div>
      </div>
      <FAQSection faqs={faqs} />
      <ContactCTA
        title="Pronto para começar seu projeto?"
        description="Nossa equipe está pronta para entender suas necessidades e criar a solução perfeita para seu negócio."
        emailHref="mailto:contato@axisor.com.br"
        emailText="Enviar E-mail"
        phoneHref="tel:+5547984807846"
        phoneText="Ligar Agora"
      />
    </div>
  );
}
