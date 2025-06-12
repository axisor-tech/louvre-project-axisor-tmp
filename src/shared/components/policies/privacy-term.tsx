import { format } from "date-fns";
import { motion } from "framer-motion";
import {
  AlertCircle,
  Eye,
  FileText,
  Globe,
  Lock,
  Mail,
  Shield,
  Users,
} from "lucide-react";

const date = format(new Date("2025-05-26"), "dd/MM/yyyy");

export default function PrivacyTerm() {
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
      icon: <FileText className="h-6 w-6" />,
      title: "1. Informações que coletamos",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Coletamos dados fornecidos diretamente por você, como:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Nome
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              E-mail
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Empresa
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Mensagens enviadas via formulários
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Também coletamos dados automaticamente, como:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              Endereço IP
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              Navegador utilizado
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              Dados de navegação (cookies, tempo de visita, páginas acessadas)
            </li>
          </ul>
        </div>
      ),
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "2. Finalidade da coleta",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Os dados são utilizados para:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-chart-1 rounded-full"></div>
              Responder a contatos e solicitações enviadas pelo site
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-chart-1 rounded-full"></div>
              Enviar informações institucionais ou comerciais, com seu
              consentimento
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-chart-1 rounded-full"></div>
              Melhorar a experiência do usuário no site
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-chart-1 rounded-full"></div>
              Analisar dados de tráfego para aperfeiçoamento contínuo da
              plataforma
            </li>
          </ul>
        </div>
      ),
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "3. Compartilhamento de dados",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            A Axisor não vende nem compartilha seus dados com terceiros, exceto
            quando:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-chart-4 rounded-full"></div>
              For necessário para execução de serviços contratados por você
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-chart-4 rounded-full"></div>
              Houver obrigação legal ou solicitação por autoridade competente
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-chart-4 rounded-full"></div>
              Em caso de uso de ferramentas de terceiros (ex: Google Analytics),
              conforme seus próprios termos de uso
            </li>
          </ul>
        </div>
      ),
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "4. Cookies e tecnologias de rastreamento",
      content: (
        <p className="text-muted-foreground leading-relaxed">
          Utilizamos cookies para melhorar sua experiência de navegação. Você
          pode ajustar as permissões de cookies nas configurações do seu
          navegador a qualquer momento.
        </p>
      ),
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "5. Armazenamento e segurança",
      content: (
        <p className="text-muted-foreground leading-relaxed">
          Seus dados são armazenados em ambientes seguros e controlados, com
          acesso restrito e protegido por medidas técnicas e administrativas
          compatíveis com os padrões da indústria.
        </p>
      ),
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "6. Seus direitos (de acordo com a LGPD)",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Você tem direito a:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-chart-2 rounded-full"></div>
              Acessar, corrigir ou excluir seus dados pessoais
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-chart-2 rounded-full"></div>
              Revogar o consentimento
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-chart-2 rounded-full"></div>
              Solicitar a portabilidade dos dados
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-chart-2 rounded-full"></div>
              Obter informações sobre uso e compartilhamento dos seus dados
            </li>
          </ul>
          <div className="mt-6 p-4 bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl">
            <p className="text-muted-foreground leading-relaxed">
              Para exercer esses direitos, entre em contato conosco por:
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Mail className="h-4 w-4 text-primary" />
              <a
                href="mailto:privacidade@axisor.com.br"
                className="text-primary hover:underline"
              >
                privacidade@axisor.com.br
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: "7. Alterações nesta política",
      content: (
        <p className="text-muted-foreground leading-relaxed">
          Esta Política pode ser atualizada a qualquer momento. Recomendamos
          revisá-la periodicamente. Toda alteração será comunicada nesta página
          com data de revisão.
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
            <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-chart-3">
              Política de Privacidade
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
            A Axisor Technologies Brasil valoriza a sua privacidade e está
            comprometida com a proteção dos seus dados pessoais. Esta Política
            de Privacidade explica como coletamos, usamos, armazenamos e
            protegemos as informações dos usuários que acessam nosso site e
            nossos serviços.
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
              className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all hover:border-primary/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20">
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
          className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-6 md:p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            8. Contato
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Se tiver dúvidas sobre esta Política de Privacidade, entre em
            contato:
          </p>
          <div className="space-y-3">
            <div className="text-lg font-semibold text-foreground">
              Axisor Technologies Brasil
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <a
                href="mailto:privacidade@axisor.com.br"
                className="text-primary hover:underline text-lg"
              >
                privacidade@axisor.com.br
              </a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              <a
                href="https://www.axisor.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-lg"
              >
                www.axisor.com.br
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
