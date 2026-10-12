import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/content';

export const WhatsAppFloatingButton: React.FC = () => {
  const directWhatsAppUrl = getWhatsAppUrl({ action: 'general' });

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-20 sm:bottom-6 right-5 z-40">
      <a
        href={directWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-neutral-950 shadow-2xl shadow-[#25d366]/40 transition-transform duration-200 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25d366]/50"
        aria-label="Iniciar conversa com a W.V.A Entulho no WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25d366] opacity-30 animate-ping group-hover:opacity-50" />

        <MessageCircle className="relative h-7 w-7 fill-neutral-950 stroke-none" />

        {/* Desktop Tooltip */}
        <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-neutral-900 px-3 py-1.5 text-xs font-bold text-white shadow-xl border border-white/10 opacity-0 transition-opacity duration-200 sm:group-hover:opacity-100 font-display uppercase tracking-wide">
          Orçamento no WhatsApp
        </span>
      </a>
    </aside>
  );
};
