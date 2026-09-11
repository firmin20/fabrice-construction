import React from 'react';
import { PageId } from '../types';
import { COMPANY, WORKSHOP_IMAGE } from '../data/companyData';
import { BrandLogo } from '../components/BrandLogo';
import {
  Shield,
  Award,
  CheckCircle2,
  MapPin,
  MessageSquare,
  Phone,
  Mail,
  ArrowRight,
  Hammer,
  Gem,
  Lock,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#0a0c0f] text-slate-200">
      {/* Hero Header */}
      <section className="relative py-20 lg:py-24 bg-[#0d1015] border-b border-white/[0.08] overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#d4af37]/10 text-[#d4af37] text-xs font-bold uppercase tracking-widest border border-[#d4af37]/30 mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Histoire & Vision</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase font-serif max-w-3xl mx-auto leading-tight">
            LE SAVOIR-FAIRE AU SERVICE DE VOTRE PROJET.
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto my-4"></div>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            <strong className="text-white font-semibold">{COMPANY.name}</strong> est une entreprise spécialisée dans la fabrication de solutions en fer forgé et aluminium.
          </p>
        </div>
      </section>

      {/* Narrative Section with Workshop Photo */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Craftsmanship Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-black/80 bg-black">
              <img
                src={WORKSHOP_IMAGE}
                alt="Atelier de ferronnerie et menuiserie aluminium Fabrice Construction"
                className="w-full h-[400px] sm:h-[480px] object-cover brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              {/* Tag on image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md">
                <p className="text-xs text-[#d4af37] font-bold uppercase tracking-wider">Atelier de Nkolo</p>
                <p className="text-sm font-medium text-white mt-0.5">
                  Forge à chaud, usinage de l'aluminium et soudure de haute précision.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Detailed Story */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase font-serif tracking-wide leading-snug">
              Une passion pour la matière, <br />
              une exigence pour votre sécurité.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Implantée à Nkolo, à l’entrée de Berlangue, <strong>FABRICE CONSTRUCTION</strong> s’est forgée une réputation d'excellence auprès des particuliers, des architectes et des promoteurs immobiliers exigeants du Cameroun.
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Dans notre atelier, chaque commande est traitée comme une œuvre architecturale unique. Nous refusons les réalisations standardisées fragiles : nous sélectionnons des aciers de fort grammage, des profilés aluminium thermolaqués certifiés et nous soignons chaque cordon de soudure, chaque cintrage et chaque couche de protection antirouille.
            </p>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200 font-medium">Artisanat professionnel</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200 font-medium">Fabrication sur mesure</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200 font-medium">Qualité & Durabilité</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200 font-medium">Finitions esthétiques</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3 ENGAGEMENT PRINCIPLES: SOLIDITÉ, ESTHÉTIQUE, SÉCURITÉ                    */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#0d1015] border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-serif">
              NOTRE ENGAGEMENT
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent my-3"></div>
            <p className="text-slate-300 text-sm sm:text-base">
              Trois piliers indissociables qui guident chacune de nos créations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* SOLIDITÉ */}
            <div className="p-8 rounded-3xl bg-[#12151b] border border-white/[0.08] hover:border-[#d4af37]/40 transition-all duration-300 relative group">
              <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#f7df8b] flex items-center justify-center mb-6">
                <Hammer className="w-6 h-6 text-[#d4af37]" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-3 font-serif">
                SOLIDITÉ
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Nous employons des fers pleins, des profilés renforcés et des traitements anti-corrosion en profondeur adaptés aux climats tropicaux humides. Nos réalisations sont bâties pour traverser les décennies sans se déformer.
              </p>
            </div>

            {/* ESTHÉTIQUE */}
            <div className="p-8 rounded-3xl bg-[#12151b] border border-white/[0.08] hover:border-[#d4af37]/40 transition-all duration-300 relative group">
              <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#f7df8b] flex items-center justify-center mb-6">
                <Gem className="w-6 h-6 text-[#d4af37]" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-3 font-serif">
                ESTHÉTIQUE
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Du classicisme majestueux des portails royaux aux lignes ultra-contemporaines de l’aluminium brossé, nous sublimons votre bien immobilier en créant des designs raffinés qui valorisent immédiatement votre façade.
              </p>
            </div>

            {/* SÉCURITÉ */}
            <div className="p-8 rounded-3xl bg-[#12151b] border border-white/[0.08] hover:border-[#d4af37]/40 transition-all duration-300 relative group">
              <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#f7df8b] flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-[#d4af37]" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-3 font-serif">
                SÉCURITÉ
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Protéger ce qui vous est le plus cher est notre responsabilité première. Verrous multipoints renforcés, gonds anti-dégondage, barreaux anti-sciage et grilles inviolables : la sérénité n'est jamais une option.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* RESPONSIBLE PROFILE CARD: FABRICE TATSING                                 */}
      {/* ========================================================================= */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#151922] via-[#101319] to-[#0a0c0f] border border-[#d4af37]/40 p-8 sm:p-10 shadow-2xl shadow-black/80 overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 text-center sm:text-left">
            {/* Responsible Avatar / Emblem */}
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-[#1a202c] to-[#2d3748] border-2 border-[#d4af37] p-2 flex items-center justify-center shadow-xl">
                <BrandLogo variant="compact" />
              </div>
              <div className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-[#d4af37] text-black text-[10px] font-extrabold uppercase tracking-wider shadow">
                Artisan
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 space-y-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                  Fondateur & Direction Technique
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif tracking-wide mt-0.5">
                  {COMPANY.responsible}
                </h3>
                <p className="text-xs text-slate-400 font-medium">
                  {COMPANY.role} — Fabrice Construction
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                « Notre fierté réside dans le regard de nos clients lorsque le portail s’ouvre pour la première fois avec fluidité, et que la maison se pare de son éclat définitif. Je supervise personnellement chaque prise de cote et chaque validation d'ouvrage avant livraison. »
              </p>

              {/* Direct Contacts */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-4 text-xs">
                <a
                  href={`${COMPANY.whatsappLink}?text=${encodeURIComponent('Bonjour M. Fabrice TATSING, je souhaite échanger sur mon projet.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:underline font-semibold"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{COMPANY.whatsapp}</span>
                </a>

                <a
                  href={COMPANY.phoneLink}
                  className="flex items-center gap-2 text-slate-200 hover:text-[#d4af37] font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{COMPANY.phone}</span>
                </a>

                <a
                  href={COMPANY.emailLink}
                  className="flex items-center gap-2 text-slate-300 hover:text-white"
                >
                  <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{COMPANY.email}</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Atelier : {COMPANY.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Action CTA */}
      <section className="py-16 bg-[#07090c] border-t border-white/[0.08] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase font-serif">
            Confiez votre projet à des artisans passionnés
          </h2>
          <p className="mt-3 text-sm text-slate-400 max-w-xl mx-auto">
            Contactez notre atelier dès aujourd’hui pour obtenir des conseils personnalisés et une estimation claire.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('devis')}
              className="px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c69b3d] shadow-xl shadow-[#d4af37]/25 hover:brightness-110 flex items-center justify-center gap-2"
            >
              <span>DEMANDER UN DEVIS GRATUIT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-4 rounded-xl font-semibold text-xs uppercase tracking-wider text-white bg-white/[0.05] border border-white/10 hover:bg-white/[0.1]"
            >
              VISITER NOTRE ATELIER
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
