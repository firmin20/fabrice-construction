import React, { useEffect } from 'react';
import { PageId, ServiceCategory } from '../types';
import { COMPANY, SERVICES } from '../data/companyData';
import { ArrowRight, CheckCircle2, MessageSquare, Shield, Sparkles, Building2, Wrench } from 'lucide-react';

interface ServicesPageProps {
  initialServiceId?: ServiceCategory;
  onNavigate: (page: PageId) => void;
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  initialServiceId,
  onNavigate,
  onSelectServiceForQuote,
}) => {
  useEffect(() => {
    if (initialServiceId) {
      const element = document.getElementById(`service-anchor-${initialServiceId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [initialServiceId]);

  return (
    <div className="w-full bg-[#0a0c0f] text-slate-200">
      {/* Header Banner */}
      <section className="relative py-20 lg:py-24 bg-[#0d1015] border-b border-white/[0.08] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#d4af37]/10 text-[#d4af37] text-xs font-bold uppercase tracking-widest border border-[#d4af37]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Expertise Fer Forgé & Aluminium</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase font-serif">
            NOS SOLUTIONS
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto my-4"></div>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Du fer forgé à l'aluminium, nous réalisons des solutions adaptées aux particuliers et aux professionnels.
          </p>

          {/* Service jump pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#service-anchor-${s.id}`}
                className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-[#d4af37]/20 hover:border-[#d4af37]/50 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-all"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Alternating Service Blocks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24">
        {SERVICES.map((service, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <section
              id={`service-anchor-${service.id}`}
              key={service.id}
              className="scroll-mt-28 relative rounded-3xl bg-[#11141b] border border-white/[0.08] p-6 sm:p-10 lg:p-12 shadow-2xl shadow-black/80 overflow-hidden"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image side (5 cols) */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl group">
                    <img
                      src={service.image}
                      alt={service.altText}
                      className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                    {/* Corner badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/80 text-[#f7df8b] text-xs font-mono font-bold tracking-wider border border-[#d4af37]/40 backdrop-blur-sm">
                      Spécialité {service.number}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-300">
                      <p className="font-semibold text-white">{service.altText}</p>
                    </div>
                  </div>
                </div>

                {/* Content side (7 cols) */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'} space-y-6`}>
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-2">
                      <Shield className="w-3.5 h-3.5" />
                      <span>{service.badge}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase font-serif">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                      {service.fullDescription}
                    </p>
                  </div>

                  {/* Benefits Block */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#f7df8b] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                      Avantages Principaux
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Example Applications */}
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-slate-400" />
                      Applications Recommandées
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.applications.map((app, aIdx) => (
                        <span
                          key={aIdx}
                          className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs text-slate-300"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Materials & Components */}
                  <div className="pt-2">
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Wrench className="w-3 h-3 text-[#d4af37]" />
                      <span>Matériaux : {service.materials.join(' • ')}</span>
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      onClick={() => {
                        onSelectServiceForQuote(service.title);
                        onNavigate('devis');
                      }}
                      className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c69b3d] shadow-lg shadow-[#d4af37]/20 hover:brightness-110 flex items-center justify-center gap-2 transition-all"
                    >
                      <span>DEMANDER UN DEVIS</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={`${COMPANY.whatsappLink}?text=${encodeURIComponent(
                        `Bonjour Fabrice Construction, je souhaite un devis pour votre service : ${service.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3.5 rounded-xl font-semibold text-xs text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/40 flex items-center justify-center gap-2 transition-all"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      <span>WhatsApp Rapide</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#07090c] border-t border-white/[0.08] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase font-serif">
            Besoin d’une réalisation combinée ou spécifique ?
          </h2>
          <p className="mt-3 text-sm text-slate-400 max-w-xl mx-auto">
            Nous réalisons également des chantiers complets (portail + clôture + grilles + portes blindées) avec harmonie architecturale globale.
          </p>
          <div className="mt-6">
            <button
              onClick={() => onNavigate('devis')}
              className="px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c69b3d] shadow-xl shadow-[#d4af37]/25 hover:brightness-110 transition-all"
            >
              DEMANDEZ VOTRE ÉTUDE GLOBALE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
