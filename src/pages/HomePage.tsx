import React, { useState } from 'react';
import { PageId, ServiceCategory, ProjectItem } from '../types';
import { COMPANY, SERVICES, PROJECTS, WHY_CHOOSE_US, PROCESS_STEPS } from '../data/companyData';
import { BrandLogo } from '../components/BrandLogo';
import {
  ArrowRight,
  Shield,
  CheckCircle2,
  Phone,
  MessageSquare,
  Sparkles,
  Eye,
  Layers,
  Award,
  ChevronRight,
  MapPin,
  Clock,
  Compass,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, serviceId?: ServiceCategory) => void;
  onOpenProject: (project: ProjectItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'portails', label: 'Portails' },
    { id: 'portes', label: 'Portes' },
    { id: 'fenetres', label: 'Fenêtres' },
    { id: 'grilles', label: 'Grilles' },
    { id: 'balcons', label: 'Balcons' },
    { id: 'grilles_roulantes', label: 'Grilles roulantes' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS.slice(0, 6)
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#0a0c0f]">
      {/* ========================================================================= */}
      {/* 5. HERO SECTION                                                          */}
      {/* ========================================================================= */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-white/[0.08]">
        {/* Background Image with Dark Vignette & Gold Atmospheric Sheen */}
        <div className="absolute inset-0 z-0">
          <img
            src={SERVICES[0].image}
            alt="Portail majestueux en fer forgé Fabrice Construction"
            className="w-full h-full object-cover object-center brightness-[0.38] scale-105 transform motion-safe:animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0f] via-[#0a0c0f]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c0f]/90 via-[#0a0c0f]/50 to-transparent"></div>
          {/* Subtle gold grid/mesh accent */}
          <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-start">
          {/* Small Trust Statement Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-[#d4af37]/40 backdrop-blur-md text-xs font-semibold text-[#f7df8b] mb-6">
            <Shield className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="tracking-wider">{COMPANY.positioning}</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase leading-[1.15] max-w-4xl font-serif">
            VOTRE MAISON MÉRITE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-[#f7df8b] to-[#d4af37]">
              LA FORCE ET L'ÉLÉGANCE.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed font-light">
            Nous concevons et réalisons sur mesure vos portails, portes, fenêtres, grilles, balcons et solutions en fer forgé & aluminium.
          </p>

          {/* Hero Call to Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            {/* Primary CTA */}
            <button
              onClick={() => onNavigate('devis')}
              className="px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-black bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c69b3d] shadow-xl shadow-[#d4af37]/25 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
            >
              <span>DEMANDER UN DEVIS</span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => onNavigate('realisations')}
              className="px-7 py-4 rounded-xl font-semibold text-sm uppercase tracking-wider text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>VOIR NOS RÉALISATIONS</span>
            </button>

            {/* WhatsApp instant fast action */}
            <a
              href={`${COMPANY.whatsappLink}?text=${encodeURIComponent(COMPANY.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-4 rounded-xl font-semibold text-xs sm:text-sm text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 flex items-center justify-center gap-2 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          {/* Key Trust Stats Bar */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-white/[0.1] w-full max-w-4xl text-left">
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-[#d4af37] font-serif">100%</p>
              <p className="text-xs text-slate-300 uppercase tracking-wider mt-0.5">Sur mesure</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-white font-serif">2016</p>
              <p className="text-xs text-slate-300 uppercase tracking-wider mt-0.5">Expérience & Maîtrise</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-[#d4af37] font-serif">Nkolo</p>
              <p className="text-xs text-slate-300 uppercase tracking-wider mt-0.5">Atelier & Forge</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-white font-serif">0 Défaut</p>
              <p className="text-xs text-slate-300 uppercase tracking-wider mt-0.5">Finition & Pose</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BRAND POSTER REFERENCE SHOWCASE CARD                                     */}
      {/* Direct homage to the visual reference banner                             */}
      {/* ========================================================================= */}
      <section className="py-8 bg-[#07090c] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl bg-gradient-to-r from-[#12151b] via-[#1a1f29] to-[#0e1117] border border-[#d4af37]/30 p-6 sm:p-8 shadow-2xl shadow-black/80 overflow-hidden">
            {/* Angled metallic highlight lines */}
            <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-[#d4af37]/10 to-transparent pointer-events-none transform skew-x-12"></div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
              <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                <BrandLogo variant="horizontal" />
                <div className="h-10 w-[1px] bg-white/15 hidden sm:block"></div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#d4af37]">
                    Direction & Atelier
                  </span>
                  <p className="text-lg font-bold text-white leading-tight">
                    {COMPANY.responsible} <span className="text-xs font-normal text-slate-400">({COMPANY.role})</span>
                  </p>
                  <p className="text-xs text-slate-400 flex items-center justify-center sm:justify-start gap-1.5 mt-1">
                    <MapPin className="w-3 h-3 text-[#d4af37]" />
                    <span>Situé à {COMPANY.location}</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`${COMPANY.whatsappLink}?text=${encodeURIComponent(COMPANY.whatsappDefaultMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/40 text-xs font-semibold flex items-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>{COMPANY.whatsapp}</span>
                </a>
                <a
                  href={COMPANY.phoneLink}
                  className="px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 text-xs font-semibold flex items-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  <span>{COMPANY.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. HOME — SERVICES                                                        */}
      {/* ========================================================================= */}
      <section id="services-section" className="py-20 lg:py-24 bg-[#0a0c0f] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 text-[#d4af37] text-xs font-bold uppercase tracking-widest border border-[#d4af37]/30 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nos Domaines d'Intervention</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-serif">
              NOS SERVICES
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-3"></div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Des solutions sur mesure pour protéger, embellir et valoriser vos espaces.
            </p>
          </div>

          {/* 6 Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-gradient-to-b from-[#141820] to-[#0d1015] border border-white/[0.08] hover:border-[#d4af37]/50 shadow-xl overflow-hidden transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Top Image Box */}
                <div className="relative h-56 w-full overflow-hidden bg-black">
                  <img
                    src={service.image}
                    alt={service.altText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141820] via-transparent to-transparent"></div>

                  {/* Corner Number Badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 text-[#f7df8b] text-[11px] font-mono font-bold tracking-wider border border-[#d4af37]/40 backdrop-blur-sm">
                    {service.number}
                  </span>

                  {/* Category Pill */}
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/60 text-slate-300 text-[10px] font-bold uppercase tracking-wider border border-white/10 backdrop-blur-sm">
                    {service.badge}
                  </span>
                </div>

                {/* Content Box */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wide group-hover:text-[#f7df8b] transition-colors font-serif">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Card CTA */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <button
                      onClick={() => onNavigate('services', service.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#d4af37] group-hover:text-[#f7df8b] transition-colors"
                    >
                      <span>Découvrir</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <button
                      onClick={() => onNavigate('devis')}
                      className="text-[11px] font-medium text-slate-400 hover:text-white transition-colors"
                    >
                      Devis rapide &rarr;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. HOME — WHY CHOOSE US                                                   */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#0d1015] border-y border-white/[0.08] relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-serif">
              POURQUOI CHOISIR FABRICE CONSTRUCTION ?
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-3"></div>
            <p className="text-slate-300 text-sm sm:text-base">
              L'alliance de l'artisanat traditionnel du fer forgé et de l'ingénierie moderne de l'aluminium.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.number}
                className="p-6 rounded-2xl bg-[#13161d] border border-white/[0.08] hover:border-[#d4af37]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#d4af37]/40 group-hover:text-[#d4af37] font-mono transition-colors block mb-4">
                    {item.number}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wide leading-tight mb-2.5 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-1 text-[11px] font-semibold text-[#d4af37]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Standard certifié</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. HOME — PROJECTS / PORTFOLIO PREVIEW                                    */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#0a0c0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 text-[#d4af37] text-xs font-bold uppercase tracking-widest border border-[#d4af37]/30 mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>Galerie Projets</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-serif">
                NOS RÉALISATIONS
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Découvrez un aperçu de nos projets livrés avec soin au Cameroun.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#d4af37] text-black font-bold shadow-md shadow-[#d4af37]/20'
                      : 'bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Architectural Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onOpenProject(project)}
                className="group relative rounded-2xl overflow-hidden bg-[#12151b] border border-white/[0.08] hover:border-[#d4af37]/50 shadow-xl cursor-pointer transition-all duration-300 flex flex-col"
              >
                <div className="relative h-64 w-full overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.altText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12151b] via-transparent to-transparent"></div>

                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 text-[#f7df8b] text-[11px] font-bold uppercase tracking-wider border border-[#d4af37]/40 backdrop-blur-sm">
                    {project.categoryLabel}
                  </span>

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-xl bg-black/80 text-white border border-white/20 text-xs font-bold uppercase tracking-wider flex items-center gap-2 backdrop-blur-sm">
                      <Eye className="w-4 h-4 text-[#d4af37]" />
                      <span>Voir le projet</span>
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#f7df8b] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-300 line-clamp-2 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="text-slate-400 text-[11px]">{project.location}</span>
                    <span className="text-[#d4af37] font-semibold text-[11px] flex items-center gap-1">
                      <span>Détails</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('realisations')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/15 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>EXPLORER TOUTES NOS RÉALISATIONS</span>
              <ArrowRight className="w-4 h-4 text-[#d4af37]" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. HOME — PROCESS                                                         */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#0d1015] border-y border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 text-[#d4af37] text-xs font-bold uppercase tracking-widest border border-[#d4af37]/30 mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Méthodologie & Rigueur</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-serif">
              COMMENT ÇA MARCHE ?
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-3"></div>
            <p className="text-slate-300 text-sm sm:text-base">
              Un parcours transparent en 4 étapes de l’idée initiale jusqu’à la pose finale sur votre chantier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative p-6 rounded-2xl bg-[#12151b] border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#f7df8b] font-mono font-extrabold text-sm flex items-center justify-center">
                      {step.step}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold">
                      Étape {step.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-2 font-serif">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#d4af37] mb-2">
                    {step.description}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {step.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Process CTA */}
          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c69b3d] shadow-lg shadow-[#d4af37]/20 hover:brightness-110 active:scale-[0.98] transition-all"
            >
              <span>PARLONS DE VOTRE PROJET</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. HOME — TRUST / BRAND STATEMENT (Dark Luxury Section)                  */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#060709] relative overflow-hidden border-b border-white/[0.08]">
        {/* Subtle architectural background line */}
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:40px_40px] opacity-10"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-6">
            <BrandLogo variant="full" />
          </div>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white uppercase tracking-tight font-serif leading-tight">
            NOUS NE FABRIQUONS PAS SIMPLEMENT DU MÉTAL.
          </h2>

          <p className="mt-4 text-sm sm:text-xl font-medium text-[#d4af37] tracking-wider uppercase font-serif">
            NOUS CRÉONS DES RÉALISATIONS QUI PROTÈGENT ET VALORISENT VOTRE PROPRIÉTÉ.
          </p>

          <div className="my-8 flex items-center justify-center gap-4 text-xs sm:text-sm font-semibold tracking-widest text-slate-300 uppercase">
            <span className="w-8 h-[1px] bg-[#d4af37]"></span>
            <span>{COMPANY.positioning}</span>
            <span className="w-8 h-[1px] bg-[#d4af37]"></span>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Chaque portail, porte ou grille qui quitte notre atelier de Nkolo est le fruit d’un travail rigoureux, calibré pour braver le temps, sublimer votre architecture et offrir une sécurité inébranlable à votre famille.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 23. FINAL CONVERSION SECTION                                              */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#0e1117] to-[#07090c] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#f7df8b] text-xs font-bold uppercase tracking-widest mb-6">
            <Award className="w-3.5 h-3.5" />
            <span>Devis Rapide & Sans Engagement</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight font-serif">
            UN PROJET EN TÊTE ?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Donnez-nous les dimensions, le style ou simplement votre idée. Nous vous accompagnons pour donner vie à votre projet.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('devis')}
              className="w-full sm:w-auto px-9 py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-black bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c69b3d] shadow-xl shadow-[#d4af37]/25 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
            >
              <span>DEMANDER UN DEVIS</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>

            <a
              href={`${COMPANY.whatsappLink}?text=${encodeURIComponent(COMPANY.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm uppercase tracking-wider text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 flex items-center justify-center gap-2 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>PARLER SUR WHATSAPP</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
              Réponse rapide sous 24h
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
              Déplacement sur site pour prise de cotes
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
              Conseil technique personnalisé
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
