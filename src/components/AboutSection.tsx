import React from 'react';
import { Building2, FileText, Mail, Phone, Clock, MessageCircle, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';
import { COMPANY_INFO, ASSETS, getWhatsAppUrl } from '../data/content';

export const AboutSection: React.FC = () => {
  const directWhatsAppUrl = getWhatsAppUrl({ action: 'general' });

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#0e1013] text-neutral-100 border-b border-white/5 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f97316]">
            <span>Transparência Institucional</span>
            <span aria-hidden="true">·</span>
            <span>Dados Reais da Empresa</span>
          </div>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-display uppercase leading-tight">
            Sobre a W.V.A Entulho
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            Atuamos na intermediação logística e locação de caçambas estacionárias para obras residenciais, comerciais e industriais em todo o Brasil, conectando contratantes a empresas parceiras cadastradas e regularizadas.
          </p>
        </div>

        {/* 2-Column Split: Company Dossier + Operational Pillars */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Registered Company Dossier */}
          <div className="lg:col-span-6 rounded-2xl border border-white/10 bg-[#14171d] p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-4 border-b border-white/10 pb-6">
              <div className="h-16 w-16 shrink-0 rounded-full bg-neutral-900 border-2 border-[#f97316] overflow-hidden">
                <img
                  src={ASSETS.logo}
                  alt="Logo W.V.A Pereira Entulho"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div>
                <span className="text-xs font-bold text-[#f97316] uppercase tracking-wider">
                  Cadastro Oficial de Pessoa Jurídica
                </span>
                <h3 className="text-lg font-black text-white font-display uppercase">
                  {COMPANY_INFO.legalName}
                </h3>
                <span className="text-xs font-mono text-neutral-400">
                  CNPJ: {COMPANY_INFO.cnpj}
                </span>
              </div>
            </div>

            {/* Structured Real Data Grid */}
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <Building2 className="h-4 w-4 text-[#f97316] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wide block">
                    Nome Fantasia
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {COMPANY_INFO.brandName} (Locação de Caçambas)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <FileText className="h-4 w-4 text-[#f97316] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wide block">
                    CNPJ Ativo
                  </span>
                  <span className="text-sm font-mono text-white font-semibold tabular-nums">
                    {COMPANY_INFO.cnpj}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <Clock className="h-4 w-4 text-[#f97316] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wide block">
                    Horário de Atendimento
                  </span>
                  <span className="text-sm text-neutral-200">
                    {COMPANY_INFO.workingHours}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <Mail className="h-4 w-4 text-[#f97316] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wide block">
                    E-mail Oficial
                  </span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm text-neutral-200 hover:text-[#f97316] transition-colors underline-offset-4 hover:underline"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <Phone className="h-4 w-4 text-[#f97316] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wide block">
                    Central de Atendimento Telefônico & WhatsApp
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneTel}`}
                    className="text-sm font-bold text-white hover:text-[#25d366] transition-colors font-mono tabular-nums"
                  >
                    {COMPANY_INFO.whatsappDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Operational Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-[#16191f] p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white font-display uppercase">
                Nosso Compromisso com a Sua Obra
              </h3>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-[#25d366] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Atendimento claro do orçamento à retirada
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      Nosso foco é a eficiência operacional: verificar a viabilidade da caçamba para o seu endereço, oferecer o atendimento adequado para a capacidade necessária e cumprir o agendamento com compromisso e transparência.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-[#25d366] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Rede de empresas parceiras cadastradas
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      Conectamos contratantes a frotas parceiras em diversas cidades do Brasil, orientando o descarte correto de resíduos conforme as regras e procedimentos do seu município.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-[#25d366] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Atendimento direto com quem resolve
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      Você conversa com profissionais no WhatsApp que entendem de cubagem, espaço de manobra de caminhão e cronograma de obra.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Action Banner */}
            <div className="rounded-2xl bg-gradient-to-br from-[#f97316]/20 via-[#181c22] to-[#12151a] p-6 sm:p-8 border border-[#f97316]/30 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
              <div>
                <span className="text-xs font-bold text-[#f97316] uppercase tracking-wider block">
                  Precisa de uma caçamba para sua obra?
                </span>
                <p className="text-base font-black text-white mt-1 font-display uppercase">
                  Fale com a W.V.A Entulho agora no WhatsApp.
                </p>
              </div>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25d366] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-950 hover:bg-[#20bd5a] transition-all whitespace-nowrap shrink-0 shadow-lg shadow-[#25d366]/20 active:scale-98"
              >
                <MessageCircle className="h-4 w-4 fill-current" />
                <span>Solicitar Orçamento</span>
                <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
