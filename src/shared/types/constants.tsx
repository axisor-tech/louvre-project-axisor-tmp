import { Briefcase, Clock, GraduationCap, Users } from "lucide-react";
import { JobPosition } from "../../app/careers/types";


export const jobPositions: JobPosition[] = [
  {
    title: "Desenvolvedor Full Stack",
    department: "Tecnologia",
    location: "Remoto",
    type: "Tempo integral",
    description:
      "Estamos procurando um desenvolvedor Full Stack experiente para se juntar à nossa equipe de tecnologia. Você trabalhará em projetos desafiadores, utilizando as mais recentes tecnologias para criar soluções inovadoras.",
    requirements: [
      "Experiência com React, Node.js e TypeScript",
      "Conhecimento em bancos de dados SQL e NoSQL",
      "Experiência com metodologias ágeis",
      "Boa comunicação e trabalho em equipe",
    ],
    link: "/careers/desenvolvedor-full-stack",
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Híbrido - São Paulo",
    type: "Tempo integral",
    description:
      "Procuramos um UX/UI Designer talentoso para criar experiências digitais excepcionais. Você será responsável por projetar interfaces intuitivas e atraentes para nossos produtos.",
    requirements: [
      "Portfólio com projetos de UX/UI",
      "Experiência com Figma e Adobe Creative Suite",
      "Conhecimento em design responsivo e acessibilidade",
      "Capacidade de conduzir pesquisas com usuários",
    ],
    link: "/careers/ux-ui-designer",
  },
  {
    title: "Analista de Dados",
    department: "Dados",
    location: "Remoto",
    type: "Tempo integral",
    description:
      "Estamos em busca de um Analista de Dados para transformar dados complexos em insights acionáveis. Você ajudará a equipe a tomar decisões baseadas em dados.",
    requirements: [
      "Experiência com SQL, Python e ferramentas de visualização",
      "Conhecimento em estatística e modelagem de dados",
      "Capacidade de comunicar insights de forma clara",
      "Experiência com grandes volumes de dados",
    ],
    link: "/careers/analista-dados",
  },
];

export const benefits = [
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Horário Flexível",
    description:
      "Valorizamos o equilíbrio entre vida pessoal e profissional com horários adaptáveis às suas necessidades.",
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-chart-4" />,
    title: "Desenvolvimento Profissional",
    description:
      "Investimos no seu crescimento com orçamento para cursos, certificações e participação em eventos.",
  },
  {
    icon: <Users className="h-10 w-10 text-blue-500" />,
    title: "Cultura Inclusiva",
    description:
      "Promovemos um ambiente diverso e acolhedor, onde todas as vozes são ouvidas e respeitadas.",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-purple-500" />,
    title: "Participação nos Lucros",
    description:
      "Compartilhamos o sucesso da empresa com programas de bonificação baseados em desempenho.",
  },
];
