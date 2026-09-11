import React, { useState } from 'react';
import { PageId, ProjectItem } from '../types';
import { PROJECTS, COMPANY } from '../data/companyData';
import { Sparkles, Eye, ArrowRight, MapPin, Ruler } from 'lucide-react';

interface RealisationsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenProject: (project: ProjectItem) => void;
}

export const RealisationsPage: React.FC<RealisationsPageProps> = ({
  onNavigate,
  onOpenProject,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'TOUS' },
    { id: 'portails', label: 'PORTAILS' },
    { id: 'portes', label: 'PORTES' },
    { id: 'fenetres', label: 'FENÊTRES' },
    { id: 'grilles', label: 'GRILLES' },
    { id: 'balcons', label: 'BALCONS' },
    { id: 'grilles_roulantes', label: 'GRILLES ROULANTES' },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedFilter);

  return (
    <div className="w-full bg-[#0a0c0f] text-slate-200">
      {/* Header */}
      <section className="relative py-20 lg:py-24 bg-[#0d1015] border-b border-white/[0.08] overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#d4af37]/10 text-[#d4af37] text-xs font-bold uppercase tracking-widest border border-[#d4af37]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Galerie Photographique</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase font-serif">
            NOS RÉALISATIONS
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto my-4"></div>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Découvrez quelques exemples de notre savoir-faire.
          </p>

          {/* Filter Bar */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition-all duration-200 ${
                  selectedFilter === filter.id
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#c69b3d] text-black shadow-lg shadow-[#d4af37]/25'
                    : 'bg-[#141820] text-slate-300 hover:text-white hover:bg-[#1a202c] border border-white/[0.08]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onOpenProject(project)}
              className="group relative rounded-2xl overflow-hidden bg-[#12151b] border border-white/[0.08] hover:border-[#d4af37]/50 shadow-xl cursor-pointer transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.altText}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12151b] via-transparent to-transparent"></div>

                {/* Badge Category */}
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-md bg-black/75 text-[#f7df8b] text-[11px] font-bold uppercase tracking-wider border border-[#d4af37]/40 backdrop-blur-sm">
                  {project.categoryLabel}
                </span>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-xl bg-black/85 text-white border border-[#d4af37]/50 text-xs font-bold uppercase tracking-wider flex items-center gap-2 backdrop-blur-sm shadow-xl">
                    <Eye className="w-4 h-4 text-[#d4af37]" />
                    <span>Agrandir & Détails</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#f7df8b] transition-colors leading-snug font-serif">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-light line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.06] space-y-1.5 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0" />
                    <span>{project.location}</span>
                  </div>
                  {project.dimensions && (
                    <div className="flex items-center gap-2 text-slate-400">
                      <Ruler className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span>{project.dimensions}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Block */}
      <section className="py-20 bg-gradient-to-b from-[#0d1015] to-[#07090c] border-t border-white/[0.08] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase tracking-tight font-serif">
            VOUS AVEZ UN PROJET SIMILAIRE ?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Chaque modèle présenté peut être adapté à vos dimensions exactes, aux spécificités de votre terrain et à votre budget.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('devis')}
              className="px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c69b3d] shadow-xl shadow-[#d4af37]/25 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>DEMANDER UN DEVIS</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>

            <a
              href={`${COMPANY.whatsappLink}?text=${encodeURIComponent(COMPANY.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-xl font-semibold text-xs uppercase tracking-wider text-emerald-300 bg-emerald-950/50 hover:bg-emerald-900/50 border border-emerald-500/40 transition-all"
            >
              CONTACTER SUR WHATSAPP
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
