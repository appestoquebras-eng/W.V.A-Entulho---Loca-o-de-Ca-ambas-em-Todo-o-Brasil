import React from 'react';
import { Check, Flame, MessageCircle, ArrowUpRight, Info } from 'lucide-react';
import { CACAMBA_SIZES, getWhatsAppUrl } from '../data/content';

export const SizesSection: React.FC = () => {
  return (
    <section id="cacambas" className="py-20 lg:py-28 bg-[#12151a] text-neutral-100 border-b border-white/5 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f97316]">
            <span>Catálogo Completo</span>
            <span aria-hidden="true">·</span>
            <span>3 m³ a 10 m³</span>
          </div>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-display uppercase leading-tight">
            Tamanhos de Caçamba
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            Desde pequenas reformas residenciais até canteiros industriais. Selecione a capacidade mais adequada e consulte valores e disponibilidade diretamente pelo WhatsApp.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CACAMBA_SIZES.map((item) => {
            const whatsAppUrl = getWhatsAppUrl({ action: 'size', size: item.volume });

            return (
              <div
                key={item.id}
                className={`relative flex flex-col justify-between rounded-2xl border transition-all duration-200 overflow-hidden ${
                  item.isPopular
                    ? 'border-[#f97316] bg-[#171b23] shadow-xl shadow-[#f97316]/10 ring-1 ring-[#f97316]'
                    : 'border-white/10 bg-[#151820] hover:border-white/20 hover:bg-[#181c26]'
                }`}
              >
                {/* Popular Badge */}
                {item.isPopular && (
                  <div className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-[#f97316] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-neutral-950 shadow-md">
                    <Flame className="h-3.5 w-3.5 fill-neutral-950 stroke-none" />
                    <span>Mais Pedida</span>
                  </div>
                )}

                <div>
                  {/* Big Image on Top */}
                  <div className="relative w-full aspect-[16/10] bg-[#0c0e12] flex items-center justify-center p-3 border-b border-white/5 overflow-hidden group">
                    <img
                      src={item.image}
                      alt={`Caçamba estacionária de entulho ${item.volume}`}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6">
                    {/* Volume Title */}
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-2xl font-black font-display text-white tracking-tight uppercase">
                        {item.volume}
                      </h3>
                      <span className="text-xs font-semibold text-[#f97316] uppercase tracking-wide">
                        Capacidade técnica
                      </span>
                    </div>

                    {/* Single Sentence Short Use */}
                    <p className="mt-3 text-sm text-neutral-300 leading-relaxed min-h-[40px]">
                      {item.idealFor}
                    </p>

                    {/* 2 Practical Examples */}
                    <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                        Exemplos de uso:
                      </span>
                      {item.examples.map((example, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                          <Check className="h-3.5 w-3.5 text-[#f97316] shrink-0 mt-0.5" />
                          <span>{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct CTA Button to WhatsApp */}
                <div className="p-6 pt-0">
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 px-4 text-xs font-bold uppercase tracking-wider transition-all active:scale-98 cursor-pointer ${
                      item.isPopular
                        ? 'bg-[#25d366] text-neutral-950 hover:bg-[#20bd5a] shadow-lg shadow-[#25d366]/20'
                        : 'bg-[#f97316] text-white hover:bg-[#ea580c] shadow-lg shadow-[#f97316]/15'
                    }`}
                  >
                    <MessageCircle className="h-4 w-4 fill-current" />
                    <span>Consultar no WhatsApp</span>
                    <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Discreet Note on Illustrative Images */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-neutral-400 text-center">
          <Info className="h-4 w-4 text-neutral-500 shrink-0" />
          <span>
            Imagens ilustrativas de capacidade volumétrica. Confirme o modelo operacional e disponibilidade na sua região via WhatsApp.
          </span>
        </div>

      </div>
    </section>
  );
};
