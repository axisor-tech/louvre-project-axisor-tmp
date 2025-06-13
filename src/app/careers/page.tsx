

import { benefits, jobPositions } from '@/shared/types/constants';
import type { Metadata } from 'next';
import { BenefitsSection } from './_components/BenefitsSection';
import { HeroSection } from './_components/HeroSection';
import { JobListings } from './_components/JobListings';

export const meta: Metadata = {
  title: 'Carreiras | Axisor',
  description:
    'Na Axisor, acreditamos que pessoas talentosas e apaixonadas são a chave para criar soluções tecnológicas inovadoras que transformam negócios.',
};

export default function Careers() {
   
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90 pt-24 pb-16 mt-16">
      <HeroSection />
      <BenefitsSection benefits={benefits} />
      <JobListings jobs={jobPositions} />
    </div>
  );
}
