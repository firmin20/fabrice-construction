export type PageId = 'home' | 'services' | 'realisations' | 'about' | 'devis' | 'contact';

export type ServiceCategory = 'portails' | 'portes' | 'fenetres' | 'grilles' | 'balcons' | 'grilles_roulantes';

export interface ServiceItem {
  id: ServiceCategory;
  number: string;
  title: string;
  shortTitle: string;
  badge: string;
  description: string;
  fullDescription: string;
  image: string;
  altText: string;
  features: string[];
  benefits: string[];
  applications: string[];
  materials: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  description: string;
  image: string;
  altText: string;
  location: string;
  dimensions?: string;
  finish: string;
  featured?: boolean;
}

export type ClientType = 'Particulier' | 'Entreprise' | 'Architecte' | 'Promoteur immobilier' | 'Autre';

export type ProjectType = 
  | 'Portail'
  | 'Porte'
  | 'Fenêtre'
  | 'Grille de protection'
  | 'Balcon'
  | 'Grille roulante'
  | 'Autre';

export type ContactPreference = 'WhatsApp' | 'Appel téléphonique' | 'Email';

export interface QuoteFormData {
  fullName: string;
  phone: string;
  whatsapp: string;
  email: string;
  projectType: ProjectType;
  clientType: ClientType;
  width: string;
  height: string;
  description: string;
  budget: string;
  contactPreference: ContactPreference;
  photoFileName?: string;
  photoDataUrl?: string;
}
