import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY } from '../data/companyData';
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  Send,
  Navigation,
  CheckCircle2,
  Shield,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [quickMessage, setQuickMessage] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickMessage.name && (quickMessage.phone || quickMessage.message)) {
      const text = encodeURIComponent(
        `Bonjour Fabrice Construction,\nMon nom est : ${quickMessage.name}\nTéléphone : ${quickMessage.phone}\nMessage : ${quickMessage.message}`
      );
      window.open(`${COMPANY.whatsappLink}?text=${text}`, '_blank');
      setIsSent(true);
    }
  };

  return (
    <div className="w-full bg-[#0a0c0f] text-slate-200">
      {/* Page Header */}
      <section className="relative py-20 lg:py-24 bg-[#0d1015] border-b border-white/[0.08] text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#d4af37]/10 text-[#d4af37] text-xs font-bold uppercase tracking-widest border border-[#d4af37]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Prise de Contact Directe</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase font-serif">
            PARLONS DE VOTRE PROJET
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto my-4"></div>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Une question technique, une prise de cotes ou un projet d'envergure ? Contactez directement notre responsable d'atelier.
          </p>
        </div>
      </section>

      {/* Main 4 Contact Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: WHATSAPP */}
          <div className="p-6 rounded-3xl bg-[#12151c] border border-white/[0.08] hover:border-emerald-500/50 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Canal prioritaire</span>
              <h3 className="text-lg font-bold text-white font-serif mt-1">WHATSAPP</h3>
              <p className="text-sm font-semibold text-slate-200 mt-2">{COMPANY.whatsapp}</p>
              <p className="text-xs text-slate-400 mt-1">Réponse instantanée, envoi direct de photos et plans.</p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <a
                href={`${COMPANY.whatsappLink}?text=${encodeURIComponent(COMPANY.whatsappDefaultMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-500/40 flex items-center justify-center gap-2 transition-all"
              >
                <span>ÉCRIRE SUR WHATSAPP</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: TÉLÉPHONE */}
          <div className="p-6 rounded-3xl bg-[#12151c] border border-white/[0.08] hover:border-[#d4af37]/50 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#f7df8b] flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-[#d4af37]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">Ligne directe</span>
              <h3 className="text-lg font-bold text-white font-serif mt-1">TÉLÉPHONE</h3>
              <p className="text-sm font-semibold text-slate-200 mt-2">{COMPANY.phone}</p>
              <p className="text-xs text-slate-400 mt-1">Échange vocal direct avec M. Fabrice TATSING.</p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <a
                href={COMPANY.phoneLink}
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 flex items-center justify-center gap-2 transition-all"
              >
                <span>APPELER</span>
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              </a>
            </div>
          </div>

          {/* Card 3: EMAIL */}
          <div className="p-6 rounded-3xl bg-[#12151c] border border-white/[0.08] hover:border-[#d4af37]/50 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#f7df8b] flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-[#d4af37]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Courrier électronique</span>
              <h3 className="text-lg font-bold text-white font-serif mt-1">EMAIL</h3>
              <p className="text-xs font-semibold text-slate-200 mt-2 font-mono break-all">{COMPANY.email}</p>
              <p className="text-xs text-slate-400 mt-1">Pour vos appels d'offres et bordereaux quantitatifs.</p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <a
                href={COMPANY.emailLink}
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 flex items-center justify-center gap-2 transition-all"
              >
                <span>ÉCRIRE UN EMAIL</span>
                <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
              </a>
            </div>
          </div>

          {/* Card 4: LOCALISATION */}
          <div className="p-6 rounded-3xl bg-[#12151c] border border-white/[0.08] hover:border-[#d4af37]/50 transition-all flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#f7df8b] flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#d4af37]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">Atelier & Forge</span>
              <h3 className="text-lg font-bold text-white font-serif mt-1">LOCALISATION</h3>
              <p className="text-sm font-semibold text-slate-200 mt-2">{COMPANY.location}</p>
              <p className="text-xs text-slate-400 mt-1">Cameroun — Prise de rendez-vous pour visite d'atelier.</p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <button
                onClick={() => onNavigate('devis')}
                className="w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c69b3d] shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <span>DEMANDER UN DEVIS</span>
                <ArrowRight className="w-3.5 h-3.5 text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Section: Location and Quick Message layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Location & Access Guide (No invented GPS coordinates, pure landmark architectural map card) */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-[#11141b] border border-white/[0.08] shadow-2xl space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d4af37]">
              <Navigation className="w-4 h-4" />
              <span>Accès & Atelier</span>
            </div>

            <h2 className="text-2xl font-bold text-white font-serif">
              Venir à notre atelier de Nkolo
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Notre atelier de ferronnerie et menuiserie aluminium est facilement accessible à <strong>Nkolo, situé immédiatement à l'entrée de Berlangue</strong>.
            </p>

            {/* Stylized Architectural Location Map Container */}
            <div className="relative rounded-2xl overflow-hidden bg-[#0a0c0f] border border-white/10 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-semibold text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#d4af37]" />
                  {COMPANY.location}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#d4af37]/20 text-[#f7df8b] text-[10px] font-bold uppercase">
                  Atelier Actif
                </span>
              </div>

              {/* Graphical representation of the road access */}
              <div className="relative h-44 rounded-xl bg-gradient-to-br from-[#161a22] to-[#0c0e12] border border-white/10 p-4 flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-white">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Axe Principal
                  </span>
                  <span>Carrefour Nkolo</span>
                </div>

                <div className="relative my-auto flex items-center justify-center">
                  <div className="w-full h-2 bg-[#2d3748] rounded-full relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-[#d4af37] text-black font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>FABRICE CONSTRUCTION</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Entrée Berlangue</span>
                  <span className="text-[#d4af37] font-medium">Stationnement clients disponible</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <p className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span><strong>Horaires :</strong> {COMPANY.workingHours}</span>
                </p>
                <p className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span><strong>Visites :</strong> Accueil des clients et présentation des échantillons d'aluminium et finitions forgées.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right: Quick Direct Contact Form */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-[#11141b] border border-white/[0.08] shadow-2xl space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] block mb-1">
                Message Immédiat
              </span>
              <h2 className="text-2xl font-bold text-white font-serif">
                Envoyer un message rapide
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Transmettez vos coordonnées : votre message sera immédiatement pré-rempli sur WhatsApp pour un échange sans délai.
              </p>
            </div>

            {isSent ? (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <p className="text-sm font-semibold text-white">Message préparé pour WhatsApp !</p>
                <p className="text-xs text-slate-300">
                  Si WhatsApp ne s'est pas ouvert automatiquement, cliquez ci-dessous pour continuer la discussion.
                </p>
                <a
                  href={`${COMPANY.whatsappLink}?text=${encodeURIComponent(
                    `Bonjour Fabrice Construction, je suis ${quickMessage.name} (${quickMessage.phone}). ${quickMessage.message}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>OUVRIR WHATSAPP</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Votre Nom *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={quickMessage.name}
                    onChange={(e) => setQuickMessage((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Ex: M. Paul Ebanda"
                    className="w-full px-3.5 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Téléphone ou WhatsApp *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={quickMessage.phone}
                    onChange={(e) => setQuickMessage((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="Ex: +237 653 98 55 21"
                    className="w-full px-3.5 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                    Votre Message ou Question *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={quickMessage.message}
                    onChange={(e) => setQuickMessage((prev) => ({ ...prev, message: e.target.value }))}
                    placeholder="Bonjour, je souhaiterais des renseignements pour sécuriser une villa à Yaoundé..."
                    className="w-full p-3.5 rounded-xl bg-black/60 border border-white/15 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c69b3d] shadow-lg shadow-[#d4af37]/20 hover:brightness-110 flex items-center justify-center gap-2 transition-all"
                  >
                    <span>ENVOYER DIRECTEMENT SUR WHATSAPP</span>
                    <Send className="w-4 h-4 text-black" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
