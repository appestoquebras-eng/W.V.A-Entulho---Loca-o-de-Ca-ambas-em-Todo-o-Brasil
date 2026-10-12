import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, Truck, MapPin, Zap } from 'lucide-react';
import { COMPANY_INFO, ASSETS, BENEFITS, getWhatsAppUrl } from '../data/content';

export const Hero: React.FC = () => {
  const directWhatsAppUrl = getWhatsAppUrl({ action: 'general' });

  return (
    <section id="inicio" className="relative overflow-hidden bg-[#0e1013] border-b border-white/10">
      
      {/* =========================================================================
          DESKTOP FULL-BLEED HERO (Hidden on mobile / tablet < lg)
          Full photograph integrated into background with smooth dark gradient on left
      ========================================================================= */}
      <div className="hidden lg:block relative min-h-[580px] xl:min-h-[640px] w-full overflow-hidden">
        {/* Full-bleed background truck photograph */}
        <div className="absolute inset-0 z-0">
          <img
            src={ASSETS.heroTruck}
            alt="Caminhão poliguindaste com caçamba de entulho W.V.A em canteiro de obras"
            className="h-full w-full object-cover object-right-center xl:object-right"
            loading="eager"
          />
          {/* Deep dark gradient overlay on left for typography readability, feathering out to the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e1013] via-[#0e1013]/85 to-transparent to-75%" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1013] via-transparent to-black/40" />
        </div>

        {/* Content container over dark left side */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 h-full flex flex-col justify-center py-20">
          <div className="max-w-2xl">
            {/* National Scope Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-black/70 border border-[#f97316]/40 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#f97316] mb-5 backdrop-blur-md shadow-lg">
              <span className="flex h-2 w-2 rounded-full bg-[#f97316] animate-pulse" />
              <span>Atendimento em Todo o Brasil · Empresas Parceiras</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white font-display uppercase leading-[1.08] text-balance">
              A caçamba certa para sua obra. <span className="text-[#f97316]">Em todo o Brasil.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-lg text-neutral-200 leading-relaxed max-w-xl text-balance">
              Locação ágil e descarte responsável para reformas, construções e demolições. Conectamos seu canteiro de obras a caçambas estacionárias de <strong className="text-white font-bold">3m³ a 10m³</strong> por meio de uma rede de empresas parceiras cadastradas em diversos municípios.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#25d366] px-7 py-4 text-sm font-bold text-neutral-950 uppercase tracking-wider transition-all hover:bg-[#20bd5a] hover:shadow-xl hover:shadow-[#25d366]/30 active:scale-98"
              >
                <MessageCircle className="h-5 w-5 fill-neutral-950 stroke-none" />
                <span>Solicitar Orçamento no WhatsApp</span>
                <ArrowRight className="h-4 w-4 stroke-[3]" />
              </a>

              <a
                href="#cacambas"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-black/50 backdrop-blur-md px-6 py-4 text-sm font-bold text-white uppercase tracking-wider hover:bg-white/10 hover:border-white/40 transition-all"
              >
                <span>Ver Tamanhos</span>
              </a>
            </div>

            {/* Quick reassurance strip */}
            <div className="mt-7 flex items-center gap-6 text-xs text-neutral-300 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#25d366]" />
                Atendimento claro do orçamento à retirada
              </span>
              <span className="text-neutral-500">·</span>
              <span>Disponibilidade confirmada por cidade</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE HERO (< lg)
          Full-bleed truck image below navbar with aspect-video and object-contain,
          no border frame or outer padding on photo; text content retains px-4.
      ========================================================================= */}
      <div className="block lg:hidden pb-10">
        {/* 1. Full-bleed truck image (aspect-video + object-contain) */}
        <div className="w-full aspect-video bg-[#0e1013] overflow-hidden flex items-center justify-center">
          <img
            src={ASSETS.heroTruck}
            alt="Caminhão poliguindaste transportando caçamba de entulho"
            className="w-full h-full object-contain object-center"
            loading="eager"
          />
        </div>

        {/* Text and CTAs container with px-4 */}
        <div className="px-4">
          {/* 2. Badge AFTER image */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-neutral-900 border border-[#f97316]/40 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#f97316]">
            <span className="flex h-2 w-2 rounded-full bg-[#f97316]" />
            <span>Atendimento Brasil · Parceiros Cadastrados</span>
          </div>

          {/* 3. Title AFTER image & badge */}
          <h1 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-white font-display uppercase leading-[1.1]">
            A caçamba certa para sua obra. <span className="text-[#f97316]">Em todo o Brasil.</span>
          </h1>

          {/* 4. Description */}
          <p className="mt-3.5 text-sm sm:text-base text-neutral-300 leading-relaxed">
            Locação ágil e descarte responsável para reformas, construções e demolições. Conectamos sua obra a caçambas estacionárias de <strong className="text-white font-semibold">3m³ a 10m³</strong> com empresas parceiras cadastradas em diversos municípios.
          </p>

          {/* 5. Direct CTAs */}
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-xl bg-[#25d366] px-5 py-3.5 text-sm font-bold text-neutral-950 uppercase tracking-wider active:scale-98 shadow-lg shadow-[#25d366]/20"
            >
              <MessageCircle className="h-5 w-5 fill-neutral-950 stroke-none" />
              <span>Solicitar Orçamento no WhatsApp</span>
              <ArrowRight className="h-4 w-4 stroke-[3]" />
            </a>

            <a
              href="#cacambas"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white uppercase tracking-wider hover:bg-white/10"
            >
              <span>Ver Tamanhos de Caçamba</span>
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================================
          BENEFITS ROW (3 items)
      ========================================================================= */}
      <div className="border-t border-white/10 bg-[#12151b]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BENEFITS.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-xl border border-white/5 bg-[#161a22] p-5 transition-colors hover:border-[#f97316]/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20">
                  {idx === 0 && <Zap className="h-5 w-5" />}
                  {idx === 1 && <MapPin className="h-5 w-5" />}
                  {idx === 2 && <ShieldCheck className="h-5 w-5" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white font-display uppercase tracking-wide">
                      {benefit.title}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
