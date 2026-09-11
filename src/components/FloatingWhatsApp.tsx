import React, { useState } from 'react';
import { COMPANY } from '../data/companyData';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showQuickCard, setShowQuickCard] = useState(false);
  const [quickMessage, setQuickMessage] = useState('');

  const encodedDefault = encodeURIComponent(COMPANY.whatsappDefaultMsg);
  const targetUrl = `${COMPANY.whatsappLink}?text=${encodedDefault}`;

  const handleQuickSend = (e: React.FormEvent) => {
    e.preventDefault();
    const textToSend = quickMessage.trim()
      ? encodeURIComponent(`Bonjour Fabrice Construction, ${quickMessage.trim()}`)
      : encodedDefault;
    window.open(`${COMPANY.whatsappLink}?text=${textToSend}`, '_blank');
    setShowQuickCard(false);
    setQuickMessage('');
  };

  return (
    <aside aria-label="Assistance WhatsApp directe" className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Mini Quick Card dialog when opened */}
      {showQuickCard && (
        <div
          role="dialog"
          aria-label="Discuter sur WhatsApp"
          className="mb-3 w-80 sm:w-88 rounded-2xl bg-[#111419] border border-emerald-500/40 shadow-2xl shadow-black/80 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-800 to-[#0b2416] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                FC
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">{COMPANY.name}</h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>En ligne sur WhatsApp</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowQuickCard(false)}
              className="p-1 rounded-md text-emerald-200 hover:text-white hover:bg-white/10"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#0a0c0f]/90 space-y-3">
            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-xs text-slate-300">
              <p className="font-semibold text-white mb-1 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                Besoin d’un devis ou d’un conseil rapide ?
              </p>
              <p className="text-[11px] text-slate-400">
                Fabrice TATSING et l’équipe technique vous répondent directement sur WhatsApp pour étudier votre projet.
              </p>
            </div>

            <form onSubmit={handleQuickSend} className="space-y-2">
              <input
                type="text"
                value={quickMessage}
                onChange={(e) => setQuickMessage(e.target.value)}
                placeholder="Ex: Devis portail 4m à Bastos..."
                className="w-full px-3 py-2.5 rounded-lg bg-black/60 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
              <button
                type="submit"
                className="w-full py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-900/30"
              >
                <span>Envoyer sur WhatsApp</span>
                <Send className="w-3 h-3" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating CTA Button */}
      <div className="relative flex items-center">
        {/* Tooltip on hover (desktop) */}
        {showTooltip && !showQuickCard && (
          <div className="absolute right-full mr-3 hidden sm:block px-3 py-1.5 rounded-lg bg-[#141820] text-slate-200 text-xs font-semibold whitespace-nowrap shadow-xl border border-emerald-500/30">
            Parler sur WhatsApp
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rotate-45 bg-[#141820] border-t border-r border-emerald-500/30"></div>
          </div>
        )}

        {/* Pulse ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30 animate-ping"></span>

        {/* Main Floating Trigger */}
        <a
          id="floating-whatsapp-btn"
          href={targetUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-400 text-white shadow-xl shadow-emerald-950/60 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center border-2 border-emerald-300/40"
          aria-label="Parler sur WhatsApp"
        >
          <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-sm fill-current" />
          <span className="sr-only">Parler sur WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
