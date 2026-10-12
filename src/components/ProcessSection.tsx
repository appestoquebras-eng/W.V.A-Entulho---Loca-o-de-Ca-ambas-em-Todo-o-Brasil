import React from 'react';
import { PROCESS_STEPS, getWhatsAppUrl } from '../data/content';
import { ArrowRight, MessageCircle, CalendarCheck, Truck } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const directWhatsAppUrl = getWhatsAppUrl({ action: 'general' });

  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-[#0e1013] text-neutral-100 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f97316]">
            <span>Processo Simplificado</span>
            <span aria-hidden="true">·</span>
            <span>Sem Burocracia</span>
          </div>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-display uppercase leading-tight">
            Como Funciona em 3 Passos
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            Fluxo direto e sem complicação. Do primeiro contato via WhatsApp até a retirada programada da sua caçamba.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#14171d] p-7 hover:border-[#f97316]/50 transition-colors group shadow-lg"
            >
              <div>
                {/* Step Number and Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black text-[#f97316] font-display">
                    {step.step}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-[#f97316]/40 text-[#f97316] transition-colors">
                    {idx === 0 && <MessageCircle className="h-5 w-5" />}
                    {idx === 1 && <CalendarCheck className="h-5 w-5" />}
                    {idx === 2 && <Truck className="h-5 w-5" />}
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-black text-white font-display uppercase tracking-wide">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
                <span className="font-mono uppercase tracking-wider">Etapa {idx + 1} de 3</span>
                <span className="text-[#f97316] font-semibold">Atendimento rápido</span>
              </div>
            </div>
          ))}
        </div>

        {/* Inline Process CTA */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#171b22] to-[#12151b] p-8 sm:p-10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-white font-display uppercase">
              Precisa de caçamba para hoje ou para os próximos dias?
            </h3>
            <p className="mt-2 text-sm text-neutral-300">
              Chame nossa equipe no WhatsApp. Atendimento ágil de segunda a sexta, das 07h às 18h.
            </p>
          </div>

          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#25d366] px-7 py-4 text-xs sm:text-sm font-bold text-neutral-950 uppercase tracking-wider hover:bg-[#20bd5a] transition-all whitespace-nowrap shrink-0 shadow-lg shadow-[#25d366]/20 active:scale-98"
          >
            <MessageCircle className="h-4 w-4 fill-current" />
            <span>Falar no WhatsApp Agora</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </a>
        </div>

      </div>
    </section>
  );
};
