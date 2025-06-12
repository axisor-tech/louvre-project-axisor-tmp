import { format } from "date-fns";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Eye,
  FileText,
  Gavel,
  Link2,
  Mail,
  Shield,
  Users,
} from "lucide-react";
import { Link } from "react-router";

const date = format(new Date("2025-05-26"), "dd/MM/yyyy");

export default function TermOfUse() {
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

  const sections = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "1. Aceitação dos Termos",
      content: (
        <p className="text-muted-foreground leading-relaxed">
          Ao acessar este site, você declara estar de acordo com os presentes
          Termos de Uso. Se não concordar com qualquer cláusula, recomendamos
          que não utilize os nossos serviços.
        </p>
      ),
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "2. Uso do conteúdo",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Todo o conteúdo deste site – incluindo textos, imagens, logos,
            marcas, layouts e funcionalidades – é de propriedade da Axisor ou de
            seus parceiros, e protegido pelas leis de direitos autorais e
            propriedade intelectual.
          </p>
          <div className="p-4 bg-accent/20 border border-accent/30 rounded-lg">
            <p className="text-muted-foreground leading-relaxed font-medium">
              É proibido copiar, reproduzir, distribuir ou modificar qualquer
              conteúdo sem autorização expressa.
            </p>
          </div>
        </div>
      ),
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "3. Uso adequado do site",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Ao utilizar este site, você se compromete a:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-chart-4 rounded-full"></div>
              Fornecer informações verdadeiras nos formulários de contato
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-chart-4 rounded-full"></div>
              Não utilizar o site para fins ilegais, ofensivos ou que violem
              direitos de terceiros
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-chart-4 rounded-full"></div>
              Não tentar invadir, hackear ou prejudicar nossos sistemas, APIs ou
              serviços
            </li>
          </ul>
        </div>
      ),
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "4. Formulários e dados pessoais",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Ao preencher formulários em nosso site, você concorda com o
            tratamento dos seus dados conforme descrito em nossa{" "}
            <Link to="/privacy-term" className="text-chart-1 hover:underline">
              Política de Privacidade
            </Link>
            .
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Você pode solicitar o cancelamento de comunicações a qualquer
            momento.
          </p>
        </div>
      ),
    },
    {
      icon: <Link2 className="h-6 w-6" />,
      title: "5. Links para terceiros",
      content: (
        <p className="text-muted-foreground leading-relaxed">
          Nosso site pode conter links para sites de terceiros. Não somos
          responsáveis pelas práticas de privacidade, conteúdo ou funcionamento
          desses sites externos.
        </p>
      ),
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "6. Disponibilidade e alterações",
      content: (
        <p className="text-muted-foreground leading-relaxed">
          A Axisor pode alterar ou remover qualquer conteúdo, funcionalidade ou
          serviço do site sem aviso prévio. Também podemos atualizar estes
          Termos de Uso periodicamente.
        </p>
      ),
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "7. Limitação de responsabilidade",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            A Axisor não se responsabiliza por:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-chart-1 rounded-full"></div>
              Problemas técnicos que impeçam o acesso ao site
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-chart-1 rounded-full"></div>
              Danos diretos ou indiretos causados por uso indevido ou
              interpretação incorreta das informações aqui contidas
            </li>
          </ul>
        </div>
      ),
    },
    {
      icon: <Gavel className="h-6 w-6" />,
      title: "8. Legislação aplicável",
      content: (
        <p className="text-muted-foreground leading-relaxed">
          Este site é regido pelas leis da República Federativa do Brasil.
          Qualquer conflito será resolvido no foro da comarca de Joinville/SC,
          salvo disposição legal em contrário.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90 pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="p-3 rounded-full bg-gradient-to-br from-chart-1/20 to-chart-4/20 border border-chart-1/20">
              <Gavel className="h-8 w-8 text-chart-1" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-chart-1 to-chart-4">
              Termos de Uso
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-2"
          >
            <h2 className="text-xl font-semibold text-foreground">
              Axisor Technologies Brasil
            </h2>
            <p className="text-muted-foreground">Última atualização: {date}</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg text-muted-foreground mt-6 leading-relaxed max-w-3xl mx-auto"
          >
            Bem-vindo ao site da Axisor Technologies Brasil. Ao acessar ou
            utilizar nossos serviços, você concorda com os seguintes termos e
            condições. Recomendamos que leia atentamente este documento antes de
            continuar navegando.
          </motion.p>
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="container mx-auto px-4 max-w-4xl">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all hover:border-chart-1/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-chart-1/20 to-chart-4/20 border border-chart-1/20">
                  {section.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  {section.title}
                </h3>
              </div>
              <div className="text-base">{section.content}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 mt-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-gradient-to-r from-chart-1/10 to-chart-4/10 border border-chart-1/20 rounded-xl p-6 md:p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            9. Contato
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Para dúvidas sobre estes termos, entre em contato conosco:
          </p>
          <div className="flex items-center justify-center gap-2">
            <Mail className="h-5 w-5 text-chart-1" />
            <a
              href="mailto:contato@axisor.com.br"
              className="text-chart-1 hover:underline text-lg"
            >
              contato@axisor.com.br
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
