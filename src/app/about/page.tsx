import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  Eye,
  Globe,
  Heart,
  Lightbulb,
  MapPin,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";


export const meta = () => {
  return [
    { title: "Sobre Nós | Axisor" },
    {
      name: "description",
      content:
        "Conheça a Axisor Technologies Brasil - Nossa história, valores e missão de transformar o mundo através da tecnologia.",
    },
  ];
};

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

const values = [
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Inovação",
    description:
      "Buscamos constantemente novas formas de resolver problemas complexos com soluções criativas e tecnológicas.",
    color: "text-chart-1",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Colaboração",
    description:
      "Acreditamos que as melhores soluções surgem do trabalho em equipe e da troca de conhecimentos.",
    color: "text-chart-2",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Transparência",
    description:
      "Mantemos comunicação clara e honesta em todos os nossos relacionamentos e processos.",
    color: "text-chart-3",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Impacto Social",
    description:
      "Desenvolvemos tecnologias que geram impacto positivo na sociedade e no meio ambiente.",
    color: "text-chart-4",
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Excelência",
    description:
      "Comprometemo-nos com a qualidade e a entrega de soluções que superam expectativas.",
    color: "text-primary",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Sustentabilidade",
    description:
      "Criamos soluções pensando no futuro, com responsabilidade ambiental e social.",
    color: "text-secondary",
  },
];

const stats = [
  {
    number: "50+",
    label: "Projetos Entregues",
    description: "Soluções desenvolvidas com sucesso",
  },
  {
    number: "15+",
    label: "Clientes Satisfeitos",
    description: "Empresas que confiam em nosso trabalho",
  },
  {
    number: "3+",
    label: "Anos de Experiência",
    description: "Construindo o futuro da tecnologia",
  },
  {
    number: "100%",
    label: "Projetos no Prazo",
    description: "Compromisso com entregas pontuais",
  },
];

const timeline = [
  {
    year: "2021",
    title: "Fundação",
    description:
      "A Axisor nasce com o objetivo de democratizar o acesso à tecnologia de qualidade.",
  },
  {
    year: "2022",
    title: "Primeiros Clientes",
    description:
      "Conquistamos nossos primeiros clientes e desenvolvemos soluções inovadoras para o setor público.",
  },
  {
    year: "2023",
    title: "Expansão",
    description:
      "Ampliamos nossa atuação para o setor privado e desenvolvemos nossa primeira solução de IA.",
  },
  {
    year: "2024",
    title: "Consolidação",
    description:
      "Nos estabelecemos como referência em soluções tecnológicas para cidades inteligentes e educação.",
  },
];

export default function AboutPage() {
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
            <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-chart-4/20 border border-primary/20">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-chart-4">
              Sobre a Axisor
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            Somos uma empresa de tecnologia brasileira dedicada a criar soluções
            inovadoras que transformam negócios e impactam positivamente a
            sociedade. Nossa paixão é usar a tecnologia como força motriz para
            um futuro melhor.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 mb-20 max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-8 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-chart-1/20 border border-primary/20">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Nossa Missão
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Democratizar o acesso à tecnologia de qualidade, desenvolvendo
              soluções inovadoras que resolvem problemas reais e geram impacto
              positivo na sociedade, especialmente nas áreas de cidades
              inteligentes e educação com inteligência artificial.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-8 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-chart-4/20 to-chart-2/20 border border-chart-4/20">
                <Eye className="h-6 w-6 text-chart-4" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Nossa Visão
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Ser reconhecida como a principal referência em soluções
              tecnológicas inovadoras no Brasil, contribuindo para a construção
              de um futuro mais inteligente, sustentável e inclusivo através da
              tecnologia.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 mb-20 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-gradient-to-r from-primary/10 to-chart-4/10 border border-primary/20 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Nossos Números
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 mb-20 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Nossos Valores
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Os princípios que guiam nossas decisões e moldam nossa cultura
            organizacional.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-lg transition-all hover:border-primary/30"
            >
              <div
                className={`p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 w-fit mb-4 ${value.color}`}
              >
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-4 mb-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Nossa Jornada
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A evolução da Axisor desde sua fundação até os dias atuais.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-chart-4 to-primary transform md:-translate-x-1/2"></div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 z-10"></div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-lg font-bold text-primary">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-chart-4/20 to-chart-2/20 border border-chart-4/20">
                <MapPin className="h-6 w-6 text-chart-4" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Nossa Localização
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Estamos estrategicamente localizados em Joinville, Santa Catarina,
              no coração do maior polo tecnológico do Sul do Brasil.
            </p>
            <div className="space-y-2">
              <p className="text-foreground font-medium">
                Joinville, Santa Catarina
              </p>
              <p className="text-muted-foreground">Brasil</p>
            </div>
          </div>

          <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-chart-1/20 border border-primary/20">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Nosso Futuro
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Continuamos crescendo e inovando, sempre focados em entregar
              soluções que fazem a diferença no mundo real.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <Award className="h-5 w-5" />
              <span className="font-medium">
                Comprometidos com a excelência
              </span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
