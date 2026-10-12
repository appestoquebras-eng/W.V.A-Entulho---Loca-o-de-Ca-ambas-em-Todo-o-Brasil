import React, { useState } from 'react';
import { Phone, Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, ASSETS, getWhatsAppUrl } from '../data/content';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const directWhatsAppUrl = getWhatsAppUrl({ action: 'general' });

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Caçambas', href: '#cacambas' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Atendimento Brasil', href: '#atendimento-brasil' },
    { label: 'Resíduos', href: '#residuos' },
    { label: 'Sobre & Contato', href: '#sobre' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0e1013]/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 sm:gap-6 px-4 sm:px-6 lg:px-8">
        
        {/* Brand Zone */}
        <a
          href="#inicio"
          className="group flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] rounded-md"
        >
          <div className="relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-neutral-900 shadow-lg ring-2 ring-[#f97316]/60 transition-transform group-hover:scale-105 overflow-hidden shrink-0">
            <img
              src={ASSETS.logo}
              alt="Logo W.V.A Entulho"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-black tracking-tight text-white font-display uppercase group-hover:text-[#f97316] transition-colors leading-none">
              W.V.A Entulho
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium tracking-wider text-neutral-400 uppercase mt-1">
              Locação de Caçambas
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-5 text-[13px] font-semibold text-neutral-300">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 text-neutral-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#f97316] after:absolute after:bottom-0 after:left-0 after:transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f97316]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Zone: Direct WhatsApp Link */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={`tel:${COMPANY_INFO.phoneTel}`}
            className="hidden md:flex items-center gap-2 text-xs font-medium text-neutral-300 hover:text-white transition-colors py-2 px-2.5 rounded-lg border border-white/10 hover:border-white/20 whitespace-nowrap shrink-0"
            title="Ligar para W.V.A Entulho"
          >
            <Phone className="h-3.5 w-3.5 text-[#f97316]" />
            <span className="font-mono tabular-nums">{COMPANY_INFO.whatsappDisplay}</span>
          </a>

          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg bg-[#25d366] px-3.5 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold text-neutral-950 uppercase tracking-wide transition-all hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-[#25d366]/20 active:scale-98 whitespace-nowrap shrink-0"
          >
            <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" />
            <span>Orçamento no WhatsApp</span>
            <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
          </a>

          {/* Hamburger Menu Toggle (<= 1280px) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-neutral-300 hover:text-white rounded-lg border border-white/10 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] shrink-0"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-white/10 bg-[#12151a] px-4 pt-4 pb-6 transition-all animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-200 hover:bg-white/5 hover:text-[#f97316] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneTel}`}
              className="flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-neutral-200 border border-white/10 rounded-lg hover:bg-white/5"
            >
              <Phone className="h-4 w-4 text-[#f97316]" />
              <span className="font-mono tabular-nums">{COMPANY_INFO.whatsappDisplay}</span>
            </a>

            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-[#25d366] py-3 text-sm font-bold text-neutral-950 uppercase tracking-wide hover:bg-[#20bd5a]"
            >
              <MessageCircle className="h-4 w-4 fill-current" />
              <span>Solicitar Orçamento no WhatsApp</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
