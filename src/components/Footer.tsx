import React from 'react';
import { PageId } from '../types';
import { COMPANY, SERVICES } from '../data/companyData';
import { BrandLogo } from './BrandLogo';
import { MessageSquare, Phone, Mail, MapPin, Shield, ArrowUpRight, Clock, Award } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#07080a] border-t border-white/[0.08] text-slate-400 relative overflow-hidden">
      {/* Subtle architectural gold accent line at the very top */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="inline-block">
              <BrandLogo variant="horizontal" />
            </div>
            <p className="text-xs text-[#d4af37] font-semibold tracking-wider flex items-center gap-1.5 mt-2">
              <Shield className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{COMPANY.positioning}</span>
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Atelier de chaudronnerie d’art, menuiserie métallique et aluminium haut de gamme au Cameroun.
              Des solutions sur mesure conçues pour protéger, embellir et valoriser vos espaces.
            </p>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Direction technique</p>
              <p className="text-sm font-semibold text-white mt-0.5">{COMPANY.responsible}</p>
              <p className="text-xs text-[#d4af37]">{COMPANY.role}</p>
            </div>
          </div>

          {/* Column 2: Navigation Rapide */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5 group text-left"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#d4af37]"></span>
                  <span>Accueil</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5 group text-left"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#d4af37]"></span>
                  <span>Nos Services</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('realisations')}
                  className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5 group text-left"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#d4af37]"></span>
                  <span>Réalisations & Galerie</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5 group text-left"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#d4af37]"></span>
                  <span>À propos & Savoir-faire</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('devis')}
                  className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5 group text-left font-semibold text-[#f7df8b]"
                >
                  <span className="w-1 h-1 rounded-full bg-[#d4af37]"></span>
                  <span>Demander un Devis Gratuit</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5 group text-left"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#d4af37]"></span>
                  <span>Contact & Atelier</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Nos Spécialités */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
              Spécialités
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleNavClick('services')}
                    className="hover:text-[#d4af37] transition-colors flex items-center justify-between w-full group text-left"
                  >
                    <span>{s.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#d4af37] transition-colors" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Coordonnées & Accès */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
              Coordonnées
            </h3>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">{COMPANY.location}</p>
                  <p className="text-xs text-slate-400">Région du Centre, Cameroun</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <div>
                  <a
                    href={`${COMPANY.whatsappLink}?text=${encodeURIComponent(COMPANY.whatsappDefaultMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-emerald-400 transition-colors font-medium"
                  >
                    {COMPANY.whatsapp}
                  </a>
                  <span className="text-[10px] text-emerald-400/80 ml-1.5 font-medium">(WhatsApp)</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <a
                  href={COMPANY.phoneLink}
                  className="text-white hover:text-[#d4af37] transition-colors font-medium"
                >
                  {COMPANY.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <a
                  href={COMPANY.emailLink}
                  className="text-white hover:text-[#d4af37] transition-colors text-xs font-mono break-all"
                >
                  {COMPANY.email}
                </a>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-white/[0.06] text-xs">
                <Clock className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300">{COMPANY.workingHours}</p>
                  <p className="text-[#d4af37] text-[11px] font-medium">{COMPANY.emergencies}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banner from poster: "NOTRE EXPERTISE, VOTRE CONFIANCE !" */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="px-3 py-1 rounded bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#f7df8b] text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#d4af37]" />
              {COMPANY.slogan}
            </span>
            <span className="text-xs text-slate-400">
              Fabrication artisanale camerounaise de haute précision
            </span>
          </div>

          <p className="text-xs text-slate-400 text-center">
            © 2026 Fabrice Construction. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
