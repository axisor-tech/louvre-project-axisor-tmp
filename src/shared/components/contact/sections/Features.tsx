'use client'
import { Shield, Users, Zap } from "lucide-react";

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesProps {
  features?: FeatureItem[];
}

const defaultFeatures: FeatureItem[] = [
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

export const Features = ({ features = defaultFeatures }: FeaturesProps) => {
  return (
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
  );
};

export default Features;
