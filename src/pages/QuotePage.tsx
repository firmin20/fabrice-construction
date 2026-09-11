import React, { useState } from 'react';
import { QuoteFormData, ProjectType, ClientType, ContactPreference, PageId } from '../types';
import { COMPANY } from '../data/companyData';
import {
  Send,
  MessageSquare,
  CheckCircle2,
  Upload,
  Ruler,
  User,
  Phone,
  Mail,
  FileText,
  Sparkles,
  Shield,
  ArrowRight,
  RefreshCw,
  Image as ImageIcon,
  Check,
} from 'lucide-react';

interface QuotePageProps {
  initialProjectType?: string;
  onNavigate: (page: PageId) => void;
}

export const QuotePage: React.FC<QuotePageProps> = ({
  initialProjectType,
  onNavigate,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    whatsapp: '',
    email: '',
    projectType: (initialProjectType as ProjectType) || 'Portail',
    clientType: 'Particulier',
    width: '',
    height: '',
    description: '',
    budget: '',
    contactPreference: 'WhatsApp',
    photoFileName: undefined,
    photoDataUrl: undefined,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedWhatsAppLink, setGeneratedWhatsAppLink] = useState('');

  const projectTypes: ProjectType[] = [
    'Portail',
    'Porte',
    'Fenêtre',
    'Grille de protection',
    'Balcon',
    'Grille roulante',
    'Autre',
  ];

  const clientTypes: ClientType[] = [
    'Particulier',
    'Entreprise',
    'Architecte',
    'Promoteur immobilier',
    'Autre',
  ];

  const contactPreferences: ContactPreference[] = [
    'WhatsApp',
    'Appel téléphonique',
    'Email',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          photoFileName: file.name,
          photoDataUrl: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const buildWhatsAppMessage = (data: QuoteFormData) => {
    let msg = `Bonjour Fabrice Construction,\n`;
    msg += `Je souhaite demander un devis pour un projet : *${data.projectType}*.\n\n`;
    msg += `*Détails du projet :*\n${data.description || 'Projet personnalisé sur mesure'}\n\n`;
    if (data.width || data.height) {
      msg += `*Dimensions approximatives :* Largeur: ${data.width || 'N/C'}, Hauteur: ${data.height || 'N/C'}\n`;
    }
    if (data.budget) {
      msg += `*Budget indicatif :* ${data.budget}\n`;
    }
    msg += `*Client :* ${data.fullName} (${data.clientType})\n`;
    msg += `*Téléphone :* ${data.phone || 'Non précisé'}\n`;
    if (data.whatsapp) msg += `*WhatsApp :* ${data.whatsapp}\n`;
    if (data.email) msg += `*Email :* ${data.email}\n`;
    msg += `*Canal préféré :* ${data.contactPreference}`;

    return encodeURIComponent(msg);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Veuillez saisir votre nom complet.';
    }
    if (!formData.phone.trim() && !formData.whatsapp.trim()) {
      newErrors.phone = 'Veuillez renseigner au moins un numéro de téléphone ou WhatsApp.';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Veuillez décrire brièvement votre besoin.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const encoded = buildWhatsAppMessage(formData);
      const waUrl = `${COMPANY.whatsappLink}?text=${encoded}`;
      setGeneratedWhatsAppLink(waUrl);
      setIsSubmitted(true);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleInstantWhatsApp = () => {
    const encoded = buildWhatsAppMessage(formData);
    window.open(`${COMPANY.whatsappLink}?text=${encoded}`, '_blank');
  };

  return (
    <div className="w-full bg-[#0a0c0f] text-slate-200">
      {/* Page Header */}
      <section className="relative py-16 lg:py-20 bg-[#0d1015] border-b border-white/[0.08] text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#d4af37]/10 text-[#d4af37] text-xs font-bold uppercase tracking-widest border border-[#d4af37]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Estimation Gratuite & Prise de Cotes</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase font-serif">
            DEMANDEZ VOTRE DEVIS
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto my-4"></div>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Décrivez-nous votre projet et recevez une première prise de contact.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Check className="w-4 h-4" /> Réponse sous 24h
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[#d4af37]" /> Aucun engagement financier
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#d4af37]" /> Conseils techniques gratuits
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {isSubmitted ? (
          /* ========================================================================= */
          /* 15. CONFIRMATION MESSAGE & WHATSAPP SYNC                                 */
          /* ========================================================================= */
          <div className="rounded-3xl bg-[#12151c] border border-emerald-500/40 p-8 sm:p-12 shadow-2xl text-center animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
              Merci pour votre demande !
            </h2>

            <p className="mt-3 text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
              Votre demande a bien été prise en compte. <strong>FABRICE CONSTRUCTION</strong> vous contactera prochainement.
            </p>

            <div className="my-8 p-5 rounded-2xl bg-black/50 border border-white/10 text-left max-w-lg mx-auto text-xs space-y-2">
              <p className="text-[#d4af37] font-bold uppercase tracking-wider text-[11px]">
                Récapitulatif de votre projet
              </p>
              <p><strong className="text-white">Projet :</strong> {formData.projectType} ({formData.clientType})</p>
              <p><strong className="text-white">Contact :</strong> {formData.fullName} — {formData.phone || formData.whatsapp}</p>
              {formData.width && formData.height && (
                <p><strong className="text-white">Dimensions :</strong> L {formData.width} x H {formData.height}</p>
              )}
              <p><strong className="text-white">Détails :</strong> {formData.description}</p>
            </div>

            {/* Prompted requirement: Display "CONTACTER FABRICE CONSTRUCTION SUR WHATSAPP" */}
            <div className="space-y-3 max-w-md mx-auto">
              <a
                href={generatedWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 hover:brightness-110 shadow-xl shadow-emerald-950/60 flex items-center justify-center gap-3 transition-all"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>CONTACTER FABRICE CONSTRUCTION SUR WHATSAPP</span>
              </a>

              <p className="text-[11px] text-slate-400">
                En cliquant ci-dessus, les détails de votre devis seront instantanément transmis à M. Fabrice TATSING.
              </p>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: '',
                    phone: '',
                    whatsapp: '',
                    email: '',
                    projectType: 'Portail',
                    clientType: 'Particulier',
                    width: '',
                    height: '',
                    description: '',
                    budget: '',
                    contactPreference: 'WhatsApp',
                  });
                }}
                className="pt-4 text-xs text-slate-400 hover:text-white flex items-center justify-center gap-1.5 mx-auto"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Faire une autre demande de devis</span>
              </button>
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* 14. COMPREHENSIVE QUOTATION FORM                                         */
          /* ========================================================================= */
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-[#11141b] border border-white/[0.08] p-6 sm:p-10 shadow-2xl shadow-black/80 space-y-8"
          >
            {/* Section 1: Type de projet & Client */}
            <div className="space-y-4">
              <h2 className="text-base font-bold uppercase tracking-wider text-white flex items-center gap-2 border-b border-white/[0.08] pb-3 font-serif">
                <span className="w-6 h-6 rounded-full bg-[#d4af37]/20 border border-[#d4af37] text-[#f7df8b] text-xs font-mono flex items-center justify-center">
                  1
                </span>
                <span>Type de projet & Profil client</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 5. Type de projet */}
                <div>
                  <label htmlFor="quote-project-type" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Type de projet *
                  </label>
                  <select
                    id="quote-project-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#141820] text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 6. Type de client */}
                <div>
                  <label htmlFor="quote-client-type" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Type de client *
                  </label>
                  <select
                    id="quote-client-type"
                    name="clientType"
                    value={formData.clientType}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                  >
                    {clientTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#141820] text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2: Vos Coordonnées */}
            <div className="space-y-4">
              <h2 className="text-base font-bold uppercase tracking-wider text-white flex items-center gap-2 border-b border-white/[0.08] pb-3 font-serif">
                <span className="w-6 h-6 rounded-full bg-[#d4af37]/20 border border-[#d4af37] text-[#f7df8b] text-xs font-mono flex items-center justify-center">
                  2
                </span>
                <span>Vos Coordonnées</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 1. Nom complet */}
                <div className="sm:col-span-2">
                  <label htmlFor="quote-full-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Nom complet *
                  </label>
                  <div className="relative">
                    <input
                      id="quote-full-name"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Ex: M. Jean Talla"
                      className={`w-full pl-10 pr-3.5 py-3 rounded-xl bg-black/60 border text-sm text-white placeholder-slate-500 focus:outline-none ${
                        errors.fullName ? 'border-red-500' : 'border-white/15 focus:border-[#d4af37]'
                      }`}
                    />
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                  {errors.fullName && (
                    <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* 2. Téléphone */}
                <div>
                  <label htmlFor="quote-phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Téléphone (Appels) *
                  </label>
                  <div className="relative">
                    <input
                      id="quote-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Ex: +237 655 00 00 00"
                      className={`w-full pl-10 pr-3.5 py-3 rounded-xl bg-black/60 border text-sm text-white placeholder-slate-500 focus:outline-none ${
                        errors.phone ? 'border-red-500' : 'border-white/15 focus:border-[#d4af37]'
                      }`}
                    />
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* 3. WhatsApp */}
                <div>
                  <label htmlFor="quote-whatsapp" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Numéro WhatsApp
                  </label>
                  <div className="relative">
                    <input
                      id="quote-whatsapp"
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="Ex: +237 653 00 00 00"
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                    <MessageSquare className="w-4 h-4 text-emerald-400 absolute left-3.5 top-3.5" />
                  </div>
                </div>

                {/* 4. Email */}
                <div className="sm:col-span-2">
                  <label htmlFor="quote-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Adresse Email (facultatif)
                  </label>
                  <div className="relative">
                    <input
                      id="quote-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre.email@exemple.com"
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Dimensions & Spécifications */}
            <div className="space-y-4">
              <h2 className="text-base font-bold uppercase tracking-wider text-white flex items-center gap-2 border-b border-white/[0.08] pb-3 font-serif">
                <span className="w-6 h-6 rounded-full bg-[#d4af37]/20 border border-[#d4af37] text-[#f7df8b] text-xs font-mono flex items-center justify-center">
                  3
                </span>
                <span>Dimensions & Description</span>
              </h2>

              {/* 7. Dimensions approximatives */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="quote-width" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Largeur approximative
                  </label>
                  <div className="relative">
                    <input
                      id="quote-width"
                      type="text"
                      name="width"
                      value={formData.width}
                      onChange={handleInputChange}
                      placeholder="Ex: 4.00 m ou 400 cm"
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                    />
                    <Ruler className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                </div>

                <div>
                  <label htmlFor="quote-height" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Hauteur approximative
                  </label>
                  <div className="relative">
                    <input
                      id="quote-height"
                      type="text"
                      name="height"
                      value={formData.height}
                      onChange={handleInputChange}
                      placeholder="Ex: 2.20 m ou 220 cm"
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                    />
                    <Ruler className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                </div>
              </div>

              {/* 8. Description du projet */}
              <div>
                <label htmlFor="quote-description" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Description du projet *
                </label>
                <div className="relative">
                  <textarea
                    id="quote-description"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre besoin, le style souhaité, les dimensions approximatives et toute information utile."
                    className={`w-full p-4 rounded-xl bg-black/60 border text-sm text-white placeholder-slate-500 focus:outline-none ${
                      errors.description ? 'border-red-500' : 'border-white/15 focus:border-[#d4af37]'
                    }`}
                  ></textarea>
                </div>
                {errors.description && (
                  <p className="text-red-400 text-xs mt-1">{errors.description}</p>
                )}
              </div>

              {/* 9. Budget indicatif */}
              <div>
                <label htmlFor="quote-budget" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Budget indicatif (facultatif)
                </label>
                <input
                  id="quote-budget"
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  placeholder="Ex: 800 000 FCFA – 1 500 000 FCFA"
                  className="w-full px-3.5 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              {/* 10. Upload photo / inspiration */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Ajouter une photo de votre maison ou un modèle qui vous inspire
                </label>
                <div className="relative border-2 border-dashed border-white/20 hover:border-[#d4af37]/60 rounded-2xl p-6 text-center bg-black/40 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  {formData.photoFileName ? (
                    <div className="flex items-center justify-center gap-3 text-emerald-400 text-xs font-medium">
                      <ImageIcon className="w-5 h-5" />
                      <span>Fichier sélectionné : {formData.photoFileName}</span>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="w-6 h-6 text-[#d4af37] mx-auto" />
                      <p className="text-xs text-slate-300">
                        Glissez une photo ici ou <span className="text-[#d4af37] font-semibold underline">parcourez vos fichiers</span>
                      </p>
                      <p className="text-[10px] text-slate-500">JPG, PNG, WEBP (Max 10Mo)</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Section 4: Méthode de contact préférée */}
            <div className="space-y-4">
              <h2 className="text-base font-bold uppercase tracking-wider text-white flex items-center gap-2 border-b border-white/[0.08] pb-3 font-serif">
                <span className="w-6 h-6 rounded-full bg-[#d4af37]/20 border border-[#d4af37] text-[#f7df8b] text-xs font-mono flex items-center justify-center">
                  4
                </span>
                <span>Mode de rappel préféré</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {contactPreferences.map((pref) => {
                  const isSelected = formData.contactPreference === pref;
                  return (
                    <label
                      key={pref}
                      className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-[#d4af37]/15 border-[#d4af37] text-white font-semibold'
                          : 'bg-black/40 border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <input
                        type="radio"
                        name="contactPreference"
                        value={pref}
                        checked={isSelected}
                        onChange={handleInputChange}
                        className="accent-[#d4af37]"
                      />
                      <span className="text-xs uppercase tracking-wider">{pref}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary Button */}
              <button
                type="submit"
                className="flex-1 py-4 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c69b3d] shadow-xl shadow-[#d4af37]/25 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>ENVOYER MA DEMANDE DE DEVIS</span>
                <Send className="w-4 h-4 text-black" />
              </button>

              {/* Secondary Button */}
              <button
                type="button"
                onClick={handleInstantWhatsApp}
                className="py-4 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>DEMANDER SUR WHATSAPP</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
