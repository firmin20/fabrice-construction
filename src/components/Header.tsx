import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { COMPANY } from '../data/companyData';
import { BrandLogo } from './BrandLogo';
import { MessageSquare, Phone, Menu, X, ArrowRight, Shield } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Accueil' },
    { id: 'services', label: 'Services' },
    { id: 'realisations', label: 'Réalisations' },
    { id: 'about', label: 'À propos' },
    { id: 'devis', label: 'Devis' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#08090b] border-b border-white/[0.06] text-[11px] sm:text-xs text-slate-300 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#d4af37]">
              <Shield className="w-3.5 h-3.5" />
              <strong className="tracking-wide">{COMPANY.positioning}</strong>
            </span>
            <span className="text-white/20">•</span>
            <span className="text-slate-400">Atelier à {COMPANY.location}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={COMPANY.phoneLink}
              className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#d4af37]" />
              <span>{COMPANY.phone}</span>
            </a>
            <span className="text-white/20">•</span>
            <a
              href={`${COMPANY.whatsappLink}?text=${encodeURIComponent(COMPANY.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation bar */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0c0f]/95 backdrop-blur-md shadow-xl shadow-black/40 border-b border-white/[0.08] py-2.5'
            : 'bg-[#0e1013]/90 backdrop-blur-sm border-b border-white/[0.05] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo Clickable */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left group focus:outline-none transition-transform active:scale-[0.98]"
            aria-label="Accueil Fabrice Construction"
          >
            <BrandLogo variant="horizontal" />
          </button>

          {/* Desktop Navigation links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-2 text-sm font-medium tracking-wide rounded-md transition-all duration-200 ${
                    isActive
                      ? 'text-[#f8fafc] font-semibold'
                      : 'text-slate-300 hover:text-[#d4af37] hover:bg-white/[0.03]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#d4af37] via-[#f7df8b] to-[#b38f2b] rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick WhatsApp button */}
            <a
              id="header-whatsapp-cta"
              href={`${COMPANY.whatsappLink}?text=${encodeURIComponent(COMPANY.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-900/50 hover:border-emerald-400/50 transition-all text-xs font-semibold"
              title="Discuter sur WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            {/* Primary CTA button */}
            <button
              id="header-quote-cta"
              onClick={() => handleNavClick('devis')}
              className="relative group overflow-hidden px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c69b3d] hover:brightness-110 shadow-md shadow-[#d4af37]/20 active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <span>DEMANDER UN DEVIS</span>
              <ArrowRight className="w-3.5 h-3.5 text-black transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`${COMPANY.whatsappLink}?text=${encodeURIComponent(COMPANY.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-950/50 text-emerald-400 border border-emerald-500/30 sm:hidden"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-200 hover:text-white bg-white/[0.05] border border-white/[0.1] active:bg-white/[0.1] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-between bg-[#0b0d11]/98 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="p-5 border-b border-white/[0.08] flex items-center justify-between">
            <BrandLogo variant="horizontal" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-white/[0.06] text-slate-300 hover:text-white border border-white/[0.1]"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8 space-y-2">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#d4af37] mb-3">
              Navigation
            </p>
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#d4af37]/20 to-transparent text-white border-l-4 border-[#d4af37] font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className={`w-4 h-4 ${isActive ? 'text-[#d4af37]' : 'text-slate-500'}`} />
                </button>
              );
            })}

            <div className="pt-6 mt-4 border-t border-white/[0.08] space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                Actions directes
              </p>
              <button
                onClick={() => handleNavClick('devis')}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm uppercase tracking-wider text-black bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c69b3d] shadow-lg shadow-[#d4af37]/20 flex items-center justify-center gap-2"
              >
                <span>DEMANDER UN DEVIS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`${COMPANY.whatsappLink}?text=${encodeURIComponent(COMPANY.whatsappDefaultMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>CONTACTER SUR WHATSAPP</span>
              </a>

              <a
                href={COMPANY.phoneLink}
                className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-slate-200 bg-white/[0.04] border border-white/[0.08] flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Appeler : {COMPANY.phone}</span>
              </a>
            </div>
          </div>

          <div className="p-5 border-t border-white/[0.08] bg-black/40 text-center text-xs text-slate-400">
            <p className="font-semibold text-white">{COMPANY.name}</p>
            <p className="text-slate-400 mt-0.5">{COMPANY.location}</p>
          </div>
        </div>
      )}
    </>
  );
};
