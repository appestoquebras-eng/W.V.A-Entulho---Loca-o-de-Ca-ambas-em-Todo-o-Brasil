import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, COMPANY_INFO } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open by default

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#12151a] text-neutral-100 border-b border-white/5 relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f97316]">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Perguntas Frequentes</span>
            <span aria-hidden="true">·</span>
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-display uppercase leading-tight">
            Dúvidas Frequentes sobre Locação
          </h2>

          <p className="mt-4 text-base text-neutral-300 leading-relaxed">
            Respostas claras e diretas sobre tamanhos, valores, prazos, formas de pagamento e operação da sua caçamba.
          </p>
        </div>

        {/* 8 FAQ Accordion Items */}
        <div className="mt-12 space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#f97316]/50 bg-[#181c23] shadow-lg shadow-black/40'
                    : 'border-white/10 bg-[#14171c] hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white font-display uppercase tracking-wide">
                    {idx + 1}. {item.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#f97316] bg-[#f97316]/10' : 'text-neutral-400'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-neutral-300 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in-50">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center rounded-2xl bg-white/[0.02] border border-white/5 p-6">
          <p className="text-sm text-neutral-300">
            Ainda tem alguma dúvida específica sobre o acesso ao seu canteiro ou regras da sua cidade?
          </p>
          <div className="mt-4">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                'Olá, W.V.A Entulho! Tenho uma dúvida sobre a locação de caçamba para minha obra.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25d366] px-5 py-3 text-xs font-bold uppercase tracking-wider text-neutral-950 hover:bg-[#20bd5a] transition-all"
            >
              <MessageCircle className="h-4 w-4 fill-neutral-950 stroke-none" />
              <span>Perguntar aos Especialistas no WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
