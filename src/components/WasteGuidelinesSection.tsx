import React from 'react';
import { Check, X, AlertTriangle, ShieldAlert } from 'lucide-react';
import { ACCEPTED_MATERIALS, PROHIBITED_MATERIALS, SAFETY_GUIDELINES } from '../data/content';

export const WasteGuidelinesSection: React.FC = () => {
  return (
    <section id="residuos" className="py-20 lg:py-28 bg-[#12151a] text-neutral-100 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f97316]">
            <span>Conformidade & Meio Ambiente</span>
            <span aria-hidden="true">·</span>
            <span>Resíduos da Construção Civil</span>
          </div>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-display uppercase leading-tight">
            O Que Pode e Não Pode Descartar
          </h2>

          <p className="mt-4 text-base text-neutral-300 leading-relaxed">
            A locação de caçambas é regulamentada por resoluções ambientais (CONAMA) e legislações municipais. Conheça as regras para manter sua obra segura e regularizada.
          </p>
        </div>

        {/* 2 Columns: Accepted vs Prohibited */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Permitted Materials Box */}
          <div className="rounded-2xl border border-[#25d366]/30 bg-[#161a20] p-6 sm:p-8">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#25d366]/10 text-[#25d366]">
                <Check className="h-5 w-5 stroke-[3]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display uppercase tracking-wide">
                  Materiais Aceitos
                </h3>
                <span className="text-xs text-neutral-400">
                  Resíduos da construção civil e inertes
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {ACCEPTED_MATERIALS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-xl bg-white/[0.02] p-3.5 border border-white/5">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#25d366]/20 text-[#25d366] mt-0.5">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-xs text-neutral-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-[#25d366]/5 p-3.5 border border-[#25d366]/20 text-xs text-neutral-300">
              <strong className="text-white font-medium">Nota sobre recicláveis:</strong> Madeiras, metais e gesso dependem de triagem prévia e da estrutura da empresa parceira cadastrada no seu município.
            </div>
          </div>

          {/* Prohibited Materials Box */}
          <div className="rounded-2xl border border-red-500/30 bg-[#1a1618] p-6 sm:p-8">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                <X className="h-5 w-5 stroke-[3]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display uppercase tracking-wide">
                  Materiais Proibidos
                </h3>
                <span className="text-xs text-red-300/80">
                  Infringem leis ambientais e impedem a retirada
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {PROHIBITED_MATERIALS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-xl bg-white/[0.02] p-3.5 border border-white/5">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400 mt-0.5">
                    <X className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-xs text-neutral-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-red-500/10 p-3.5 border border-red-500/20 text-xs text-red-200">
              <strong className="font-semibold text-white flex items-center gap-1.5">
                <ShieldAlert className="h-4 w-4 shrink-0 text-red-400" />
                Atenção especial ao amianto:
              </strong>
              Telhas de amianto/fibrocimento tóxico contêm fibras cancerígenas e necessitam de descarte específico regulamentado por empresa especializada. Nunca misture com o entulho comum.
            </div>
          </div>

        </div>

        {/* Essential Safety Directives */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-[#16191f] p-6 sm:p-8">
          <div className="flex items-center gap-2.5">
            <AlertTriangle className="h-5 w-5 text-[#f97316]" />
            <h3 className="text-lg font-bold text-white font-display uppercase tracking-wide">
              Regras Importantes de Segurança & Operação
            </h3>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SAFETY_GUIDELINES.map((item, idx) => (
              <div key={idx} className="rounded-xl bg-white/[0.02] p-4 border border-white/5">
                <h4 className="text-xs font-bold text-[#f97316] uppercase tracking-wide">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
