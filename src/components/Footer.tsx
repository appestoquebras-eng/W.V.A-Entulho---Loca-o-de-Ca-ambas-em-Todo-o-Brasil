import React from 'react';
import { Phone, Mail, Clock, MessageCircle, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, ASSETS, getWhatsAppUrl } from '../data/content';

interface FooterProps {
  onOpenPrivacyModal: (tab: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyModal }) => {
  const directWhatsAppUrl = getWhatsAppUrl({ action: 'general' });

  return (
    <footer id="contato" className="border-t border-white/10 bg-[#0a0c0e] text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="h-12 w-12 rounded-full overflow-hidden border border-[#f97316] bg-neutral-900 shrink-0">
                <img
                  src={ASSETS.logo}
                  alt="W.V.A Entulho Logo"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div>
                <span className="text-xl font-black text-white font-display uppercase tracking-tight block">
                  {COMPANY_INFO.brandName}
                </span>
                <span className="text-xs text-neutral-400 font-medium">
                  {COMPANY_INFO.legalName}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Locação de caçambas de entulho de 3m³ a 10m³ para reformas, construções e demolições em todo o Brasil. Atendimento rápido e transparente via rede de empresas parceiras cadastradas.
            </p>

            <div className="pt-2 text-xs text-neutral-400 space-y-1">
              <div>
                <strong className="text-neutral-200">CNPJ:</strong>{' '}
                <span className="font-mono tabular-nums">{COMPANY_INFO.cnpj}</span>
              </div>
              <div>
                <strong className="text-neutral-200">Horário:</strong> {COMPANY_INFO.workingHours}
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#cacambas" className="hover:text-white transition-colors">
                  Tamanhos de Caçamba (3m³ a 10m³)
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Como Funciona a Locação
                </a>
              </li>
              <li>
                <a href="#atendimento-brasil" className="hover:text-white transition-colors">
                  Atendimento em Todo o Brasil
                </a>
              </li>
              <li>
                <a href="#residuos" className="hover:text-white transition-colors">
                  Materiais Aceitos & Proibidos
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre a Empresa
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Dúvidas Frequentes (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts & Channels */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display">
              Canais Oficiais de Contato
            </h4>

            <div className="space-y-2.5 text-xs">
              <a
                href={`tel:${COMPANY_INFO.phoneTel}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-colors"
              >
                <Phone className="h-4 w-4 text-[#f97316] shrink-0" />
                <div>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-wide block">
                    Telefone Direto
                  </span>
                  <span className="font-bold text-white font-mono tabular-nums">
                    {COMPANY_INFO.whatsappDisplay}
                  </span>
                </div>
              </a>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#25d366]/10 border border-[#25d366]/20 hover:border-[#25d366]/40 transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-[#25d366] shrink-0" />
                <div>
                  <span className="text-[10px] text-emerald-400 uppercase tracking-wide block font-semibold">
                    WhatsApp para Orçamento
                  </span>
                  <span className="font-bold text-white font-mono tabular-nums">
                    {COMPANY_INFO.whatsappDisplay}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-colors"
              >
                <Mail className="h-4 w-4 text-[#f97316] shrink-0" />
                <div>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-wide block">
                    E-mail Oficial
                  </span>
                  <span className="text-white font-mono">{COMPANY_INFO.email}</span>
                </div>
              </a>
            </div>

            <div className="pt-2">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-neutral-950 hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25d366]/20 active:scale-98"
              >
                <MessageCircle className="h-4 w-4 fill-current" />
                <span>Solicitar Caçamba no WhatsApp</span>
                <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.legalName} · CNPJ {COMPANY_INFO.cnpj} · Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => onOpenPrivacyModal('privacy')}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => onOpenPrivacyModal('terms')}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
