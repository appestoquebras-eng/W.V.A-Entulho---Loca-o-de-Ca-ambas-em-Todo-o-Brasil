import React from 'react';
import { MapPin, MessageCircle, ArrowRight, ShieldCheck, Truck, Users } from 'lucide-react';
import { ASSETS, getWhatsAppUrl } from '../data/content';

export const NationalCoverageSection: React.FC = () => {
  const directCityUrl = getWhatsAppUrl({ action: 'city' });

  return (
    <section id="atendimento-brasil" className="py-20 lg:py-28 bg-[#0e1013] text-neutral-100 border-b border-white/5 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f97316]">
            <span>Cobertura Nacional</span>
            <span aria-hidden="true">·</span>
            <span>Rede de Empresas Parceiras</span>
          </div>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-display uppercase leading-tight">
            Atendimento em Todo o Brasil
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            Não estamos limitados a uma única cidade ou capital. A W.V.A atende demandas em território nacional por meio de uma rede de empresas parceiras cadastradas, com disponibilidade confirmada para o seu município.
          </p>
        </div>

        {/* 2-Column Split: Image on Left/Right + Content */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Photo of Skip Yard (Patio de Caçambas) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border border-white/10 bg-[#14171d] p-3 shadow-2xl group overflow-hidden">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#0f1115]">
                <img
                  src={ASSETS.patioCacambas}
                  alt="Pátio operacional de caçambas de entulho da rede parceira W.V.A"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1013]/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-black/80 backdrop-blur-md px-4 py-3 border border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-[#f97316] animate-pulse" />
                    <span className="text-xs font-bold text-white font-display uppercase tracking-wide">
                      Rede Operacional em Expansão
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#f97316]">
                    Todo o Brasil
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Explanatory Model & Direct WhatsApp Action */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-[#14171d] p-6 sm:p-8 space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-display uppercase tracking-wide">
                    Disponibilidade Confirmada por Cidade
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    A colocação e retirada dependem do roteiro das frotas locais e disponibilidade de caçambas no seu bairro. Confirmamos a viabilidade instantaneamente no WhatsApp.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-display uppercase tracking-wide">
                    Empresas Parceiras Cadastradas
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Trabalhamos com operadores e transportadores locais cadastrados, garantindo pontualidade na entrega e conhecimento das regras municipais de trânsito e destinação.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-display uppercase tracking-wide">
                    Logística Eficiente para Qualquer Porte
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Desde uma única caçamba para reforma de casa ou apartamento até frotas programadas de troca para construtoras e galpões industriais.
                  </p>
                </div>
              </div>

              {/* Direct CTA Button */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={directCityUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 rounded-xl bg-[#25d366] px-6 py-4 text-xs sm:text-sm font-bold text-neutral-950 uppercase tracking-wider hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25d366]/20 active:scale-98"
                >
                  <MessageCircle className="h-4 w-4 fill-current" />
                  <span>Consultar Minha Cidade no WhatsApp</span>
                  <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
