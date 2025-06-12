import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, Building2, Clock, MapPin } from "lucide-react";
import { Link } from "react-router";

import { Badge } from "~/shared/components/ui/badge";
import { Button } from "~/shared/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/shared/components/ui/card";

interface JobDetailProps {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  applyLink?: string;
}

export function JobDetail({
  id,
  title,
  department,
  location,
  type,
  description,
  requirements,
  responsibilities,
  benefits,
  applyLink = "/careers/apply",
}: JobDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <Link to="/careers" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Voltar para todas as vagas
      </Link>

      <Card className="border-border/50 shadow-xl overflow-hidden bg-background/80 backdrop-blur-md">
        <CardHeader className="bg-gradient-to-r from-background/80 to-background/60 border-b border-border/30 pb-6">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                {title}
              </CardTitle>
              <p className="text-muted-foreground mt-1">{department}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <Badge variant="outline" className="flex items-center gap-1 px-3 py-1 bg-background/50 border-border/50">
                <MapPin className="h-3.5 w-3.5" />
                {location}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 px-3 py-1 bg-background/50 border-border/50">
                <Clock className="h-3.5 w-3.5" />
                {type}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 px-3 py-1 bg-background/50 border-border/50">
                <Briefcase className="h-3.5 w-3.5" />
                Tecnologia
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 px-3 py-1 bg-background/50 border-border/50">
                <Building2 className="h-3.5 w-3.5" />
                Axisor Brasil
              </Badge>
            </motion.div>
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-3">Descrição da vaga</h3>
            <p className="text-muted-foreground">{description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-3">Responsabilidades</h3>
            <ul className="list-disc pl-5 space-y-2">
              {responsibilities.map((item, index) => (
                <li key={index} className="text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-3">Requisitos</h3>
            <ul className="list-disc pl-5 space-y-2">
              {requirements.map((item, index) => (
                <li key={index} className="text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-3">Benefícios</h3>
            <ul className="list-disc pl-5 space-y-2">
              {benefits.map((item, index) => (
                <li key={index} className="text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="pt-4 border-t border-border/30 mt-8"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <h3 className="text-xl font-semibold">Interessado na vaga?</h3>
                <p className="text-muted-foreground">Preencha o formulário de candidatura</p>
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-500 hover:from-blue-500 hover:to-primary text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Candidatar-se agora
              </Button>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}