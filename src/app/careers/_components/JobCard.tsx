'use client';

import { Badge } from '@/shared/components/ui/badge';
import { Button } from '@/shared/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { JobPosition } from '../types';

interface JobCardProps {
  job: JobPosition;
  variants: {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    transition: { duration: number };
  };
}

export const JobCard = ({ job, variants }: JobCardProps) => {
  return (
    <motion.div variants={variants} className="h-full">
      <Card className="flex flex-col h-full border border-border/10 bg-white/70 dark:bg-black/60 shadow-none hover:shadow-xl hover:border-primary/30 transition-all duration-300 rounded-2xl overflow-hidden group">
        <CardHeader className="px-6 pt-6 pb-2 border-none bg-transparent">
          <div className="flex flex-col gap-1">
            <CardTitle className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {job.title}
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              {job.department}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col gap-4 px-6 pb-2">
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge
              variant="outline"
              className="border-border/20 bg-transparent text-xs font-medium px-3 py-1 rounded-full"
            >
              {job.location}
            </Badge>
            <Badge
              variant="outline"
              className="border-border/20 bg-transparent text-xs font-medium px-3 py-1 rounded-full"
            >
              {job.type}
            </Badge>
          </div>
          <p className="text-base text-foreground/90 leading-relaxed mb-2 line-clamp-4">
            {job.description}
          </p>
          <div>
            <h4 className="font-medium text-sm text-foreground mb-1">
              Requisitos
            </h4>
            <ul className="list-none pl-0 space-y-1">
              {job.requirements.map((req, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-muted-foreground text-sm"
                >
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/60 inline-block" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-2 border-none bg-transparent flex justify-end">
          <Button
            variant="ghost"
            className="w-full sm:w-auto border border-border/20 bg-black/90 dark:bg-white/10 text-white dark:text-foreground hover:bg-primary hover:text-white hover:shadow-lg transition-all duration-200 font-medium rounded-lg px-6 py-3"
            asChild
          >
            <Link href={job.link}>Saiba mais</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
