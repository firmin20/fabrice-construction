import React from 'react';
import { ProjectItem } from '../types';
import { COMPANY } from '../data/companyData';
import { X, MapPin, Ruler, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestQuote: (project: ProjectItem) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestQuote,
}) => {
  if (!project) return null;

  const prefilledMsg = encodeURIComponent(
    `Bonjour Fabrice Construction, je suis intéressé par votre réalisation "${project.title}" (${project.categoryLabel}) située à ${project.location}. Pourriez-vous m'établir un devis ?`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0f1217] border border-white/[0.12] rounded-2xl overflow-hidden shadow-2xl shadow-black/90 flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black text-slate-300 hover:text-white border border-white/20 transition-all focus:outline-none"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Large Image */}
        <div className="md:w-3/5 relative bg-black flex items-center justify-center overflow-hidden min-h-[260px] sm:min-h-[340px]">
          <img
            src={project.image}
            alt={project.altText || project.title}
            className="w-full h-full object-cover max-h-[500px]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1217] via-transparent to-transparent md:hidden"></div>
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/75 text-[#f7df8b] border border-[#d4af37]/50 backdrop-blur-sm">
              {project.categoryLabel}
            </span>
          </div>
        </div>

        {/* Right Side: Details & Actions */}
        <div className="md:w-2/5 p-6 flex flex-col justify-between overflow-y-auto bg-[#0f1217]">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-[#d4af37] font-semibold uppercase tracking-wider mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Savoir-faire Fabrice Construction</span>
            </div>

            <h3 id="project-modal-title" className="text-xl font-bold text-white leading-snug font-serif">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
              {project.description}
            </p>

            {/* Specifications list */}
            <div className="mt-5 space-y-2.5 pt-4 border-t border-white/[0.08] text-xs">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Localisation</span>
                  <span className="font-medium text-white">{project.location}</span>
                </div>
              </div>

              {project.dimensions && (
                <div className="flex items-start gap-2.5 text-slate-300">
                  <Ruler className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Dimensions indicatives</span>
                    <span className="font-medium text-white">{project.dimensions}</span>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-2.5 text-slate-300">
                <div className="w-4 h-4 rounded-full border border-[#d4af37] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></div>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Finitions & Traitement</span>
                  <span className="font-medium text-white">{project.finish}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-6 pt-5 border-t border-white/[0.08] space-y-2.5">
            <button
              onClick={() => {
                onRequestQuote(project);
                onClose();
              }}
              className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c69b3d] shadow-lg shadow-[#d4af37]/20 hover:brightness-110 flex items-center justify-center gap-2 transition-all"
            >
              <span>DEMANDER UN DEVIS POUR CE MODÈLE</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`${COMPANY.whatsappLink}?text=${prefilledMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-emerald-300 bg-emerald-950/40 border border-emerald-500/40 hover:bg-emerald-900/40 flex items-center justify-center gap-2 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>DISCUTER SUR WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
