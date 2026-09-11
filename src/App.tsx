import React, { useState, useEffect } from 'react';
import { PageId, ServiceCategory, ProjectItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProjectModal } from './components/ProjectModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { RealisationsPage } from './pages/RealisationsPage';
import { AboutPage } from './pages/AboutPage';
import { QuotePage } from './pages/QuotePage';
import { ContactPage } from './pages/ContactPage';
import { ChevronRight, Home } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceCategory | undefined>(undefined);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [quotePreselectedService, setQuotePreselectedService] = useState<string | undefined>(undefined);

  // Sync scroll on page switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: PageId, serviceId?: ServiceCategory) => {
    setCurrentPage(page);
    if (serviceId) {
      setSelectedServiceId(serviceId);
    } else {
      setSelectedServiceId(undefined);
    }
  };

  const handleOpenProject = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const handleRequestQuoteForProject = (project: ProjectItem) => {
    // Map project category to quote preselect
    setQuotePreselectedService(project.categoryLabel);
    setCurrentPage('devis');
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setQuotePreselectedService(serviceTitle);
    setCurrentPage('devis');
  };

  // Breadcrumbs title lookup
  const pageTitles: Record<PageId, string> = {
    home: 'Accueil',
    services: 'Nos Services',
    realisations: 'Nos Réalisations',
    about: 'À Propos',
    devis: 'Demande de Devis',
    contact: 'Contact & Atelier',
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0c0f] text-slate-100 font-sans selection:bg-[#d4af37] selection:text-black">
      {/* Sticky Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Breadcrumbs for subpages */}
      {currentPage !== 'home' && (
        <div className="bg-[#0c0f14] border-b border-white/[0.06] py-2.5 px-4 text-xs text-slate-400">
          <div className="max-w-7xl mx-auto flex items-center gap-2">
            <button
              onClick={() => handleNavigate('home')}
              className="flex items-center gap-1 hover:text-[#d4af37] transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Accueil</span>
            </button>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-[#f7df8b] font-medium">{pageTitles[currentPage]}</span>
          </div>
        </div>
      )}

      {/* Main Page Routing */}
      <main className="flex-1 w-full flex flex-col">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} onOpenProject={handleOpenProject} />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            initialServiceId={selectedServiceId}
            onNavigate={handleNavigate}
            onSelectServiceForQuote={handleSelectServiceForQuote}
          />
        )}
        {currentPage === 'realisations' && (
          <RealisationsPage
            onNavigate={handleNavigate}
            onOpenProject={handleOpenProject}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'devis' && (
          <QuotePage
            initialProjectType={quotePreselectedService}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Project Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProject}
        onRequestQuote={handleRequestQuoteForProject}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
