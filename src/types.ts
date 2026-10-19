export type ServiceCategory = 'digital' | 'impresso' | 'editorial' | 'todos';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'digital' | 'impresso' | 'editorial';
  description: string;
  deliverables: string[];
  keyBenefit: string;
  badge?: string;
}

export interface TargetAudience {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  focus: string;
  tone: string;
  description: string;
  highlights: string[];
  sampleDeliverables: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  sector: string;
  category: 'digital' | 'impresso' | 'editorial';
  categoryLabel: string;
  image: string;
  summary: string;
  specs: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  impact: string;
}

export interface QuoteFormData {
  fullNameOrOrg: string;
  email: string;
  phoneWhatsapp: string;
  serviceId: string;
  timeline: string;
  projectDescription: string;
  estimatedBudget?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'institucional' | 'producao' | 'comercial';
}
