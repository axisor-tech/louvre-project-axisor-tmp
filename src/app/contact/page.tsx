'use client'
import FAQ from "@/shared/components/contact/faq";
import { ContactInfoItem } from "@/shared/components/contact/sections/ContactInfoCards";
import type { FAQItem } from "@/shared/components/contact/sections/FAQSection";
import type { FeatureItem } from "@/shared/components/contact/sections/Features";
import ContactForm from "@/shared/schema/contact-form";
import { motion } from "framer-motion";
import { Clock, ExternalLink, Mail, MapPin, MessageCircle, Phone, Shield, Users, Zap } from "lucide-react";
import { Metadata } from "next";
import { type staggerContainer, fadeInUp } from "../careers/types";

export const metadata: Metadata = {
   title: "Contato | Axisor",
   description:
    "Entre em contato com a Axisor Technologies Brasil. Estamos prontos para transformar suas ideias em soluções tecnológicas inovadoras.",
};

const contactInfo: ContactInfoItem[] = [
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
      "O tempo varia conforme a complexidade do projeto. Projetos simples podem levar de 2-4 semanas, enquanto soluções mais complexas podem levar de 2-6 meses. Fornecemos um cronograma detalhado após a análise inicial.",
  },
  {
    question: "Vocês oferecem suporte após a entrega do projeto?",
    answer:
      "Sim! Oferecemos diferentes planos de suporte e manutenção. Com oopções de customização e extensões personalizado, sempre se concentrando em sua necessidade.",
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
      "Trabalhamos com tecnologias modernas como React, Node.js, Python, IA/ML, cloud computing (AWS, Azure), e sempre escolhemos a melhor stack para cada projeto específico.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90 pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-chart-1/20 border border-primary/20">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-chart-1">
              Vamos Conversar
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Estamos prontos para transformar suas ideias em soluções
            tecnológicas inovadoras. Entre em contato e descubra como podemos
            ajudar sua empresa a crescer.
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
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
      </section>

      {/* Main Content Grid */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Por que escolher a Axisor?
              </h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-chart-1/20 border border-primary/20 h-fit">
                      <div className="text-primary">{feature.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-r from-primary/10 to-chart-1/10 border border-primary/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Links Úteis
              </h3>
              <div className="space-y-3">
                <a
                  href="/careers"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Users className="h-4 w-4" />
                  Trabalhe Conosco
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="/privacy-term"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Shield className="h-4 w-4" />
                  Política de Privacidade
                  <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="/term-of-use"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Shield className="h-4 w-4" />
                  Termos de Uso
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 mt-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços
            e processos.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <FAQ key={index} faq={faq} />
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mt-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="bg-gradient-to-r from-primary/10 to-chart-1/10 border border-primary/20 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para entender suas necessidades e criar a
            solução perfeita para seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contato@axisor.com.br"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Mail className="h-5 w-5" />
              Enviar E-mail
            </a>
            <a
              href="tel:+5547999999999"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border bg-background/50 text-foreground rounded-lg font-semibold hover:bg-accent/50 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Ligar Agora
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

