import React from 'react';
import { MessageCircle, ArrowUpRight, Layers } from 'lucide-react';
import { getWhatsAppUrl } from '../data/content';

export const MobileStickyBar: React.FC = () => {
  const directWhatsAppUrl = getWhatsAppUrl({ action: 'general' });

  return (
    <aside aria-label="Ações rápidas mobile" className="fixed bottom-0 left-0 right-0 z-40 block sm:hidden border-t border-white/10 bg-[#0e1013]/95 backdrop-blur-lg px-3 py-2.5">
      <div className="grid grid-cols-12 gap-2">
        <a
          href="#cacambas"
          className="col-span-4 flex h-11 items-center justify-center gap-1.5 rounded-xl bg-white/10 border border-white/10 text-[11px] font-bold uppercase tracking-wider text-white active:bg-white/20"
        >
          <Layers className="h-3.5 w-3.5 text-[#f97316]" />
          <span>Tamanhos</span>
        </a>

        <a
          href={directWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-8 flex h-11 items-center justify-center gap-2 rounded-xl bg-[#25d366] text-xs font-black uppercase tracking-wider text-neutral-950 shadow-lg shadow-[#25d366]/20 active:bg-[#20bd5a]"
        >
          <MessageCircle className="h-4 w-4 fill-neutral-950 stroke-none" />
          <span>Orçamento WhatsApp</span>
          <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
        </a>
      </div>
    </aside>
  );
};
