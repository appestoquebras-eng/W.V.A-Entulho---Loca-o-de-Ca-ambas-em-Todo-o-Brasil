import React, { useState } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface PrivacyTermsModalProps {
  initialTab?: 'privacy' | 'terms';
  onClose: () => void;
}

export const PrivacyTermsModal: React.FC<PrivacyTermsModalProps> = ({
  initialTab = 'privacy',
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(initialTab);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-3xl w-full rounded-2xl border border-white/20 bg-[#12151a] p-6 sm:p-8 shadow-2xl flex flex-col overflow-hidden text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setActiveTab('privacy')}
              className={`text-sm sm:text-base font-bold font-display uppercase pb-1 transition-colors border-b-2 ${
                activeTab === 'privacy'
                  ? 'border-[#f97316] text-white'
                  : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              Política de Privacidade (LGPD)
            </button>
            <span className="text-neutral-600">/</span>
            <button
              type="button"
              onClick={() => setActiveTab('terms')}
              className={`text-sm sm:text-base font-bold font-display uppercase pb-1 transition-colors border-b-2 ${
                activeTab === 'terms'
                  ? 'border-[#f97316] text-white'
                  : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              Termos de Uso do Serviço
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fechar janela"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="mt-4 flex-1 overflow-y-auto space-y-4 pr-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          {activeTab === 'privacy' ? (
            <>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white font-display uppercase mb-1">
                  1. Identificação do Controlador
                </h4>
                <p>
                  Este site institucional é de responsabilidade da <strong>{COMPANY_INFO.legalName}</strong> (nome fantasia <strong>{COMPANY_INFO.brandName}</strong>), inscrita no CNPJ sob o nº <strong>{COMPANY_INFO.cnpj}</strong>, com contato oficial pelo e-mail <strong>{COMPANY_INFO.email}</strong>.
                </p>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-bold text-white font-display uppercase mb-1">
                  2. Ausência de Formulários e Atendimento via WhatsApp
                </h4>
                <p>
                  Este website não possui formulários de captação de dados, cadastros ou armazenamento em bancos de dados. Toda a interação, cotação e solicitação de orçamento ocorre diretamente via aplicativo <strong>WhatsApp</strong> (serviço de terceiros fornecido pela Meta Platforms Inc.), regido por seus próprios termos de serviço e políticas de privacidade.
                </p>
                <p className="mt-2">
                  Ao clicar nos links do site para iniciar uma conversa, você é direcionado diretamente para o aplicativo com uma mensagem contextual padrão, mantendo você em controle total das informações que decide compartilhar com nossa equipe.
                </p>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-bold text-white font-display uppercase mb-1">
                  3. Cookies e Rastreamento Mínimo
                </h4>
                <p>
                  Não utilizamos cookies invasivos, rastreadores comportamentais ou coleta de dados pessoais sem consentimento. O carregamento da página utiliza apenas recursos estáticos essenciais para funcionamento e estilização visual.
                </p>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-bold text-white font-display uppercase mb-1">
                  4. Compartilhamento Operacional com Empresas Parceiras
                </h4>
                <p>
                  A <strong>W.V.A Entulho</strong> opera com uma rede de empresas parceiras cadastradas em todo o Brasil. Os dados necessários para entrega e recolhimento (como endereço do canteiro e telefone do recebedor) são compartilhados com o operador local exclusivamente após o fechamento da contratação e para o estrito cumprimento da logística combinada.
                </p>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-bold text-white font-display uppercase mb-1">
                  5. Direitos do Titular (LGPD)
                </h4>
                <p>
                  Em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018), você pode requerer informações sobre o tratamento de dados ou exclusão de conversas e registros comerciais enviando uma solicitação ao e-mail <strong>{COMPANY_INFO.email}</strong>.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white font-display uppercase mb-1">
                  1. Objeto do Serviço e Imagens Ilustrativas
                </h4>
                <p>
                  A <strong>W.V.A Entulho</strong> atua na intermediação e logística de locação de caçambas estacionárias para transporte de resíduos da construção civil (classe A e inertes).
                </p>
                <p className="mt-2">
                  <strong>Aviso sobre imagens:</strong> As fotos e renderizações visuais exibidas no site são ilustrações representativas de capacidade volumétrica (3 m³ a 10 m³). Os equipamentos entregues no local cumprem a cubagem contratada, podendo apresentar variações estéticas ou de pintura conforme o modelo operacional da empresa parceira cadastrada na sua cidade.
                </p>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-bold text-white font-display uppercase mb-1">
                  2. Confirmação de Orçamento e Prazo de Permanência
                </h4>
                <p>
                  A W.V.A não fixa tabelas universais de preços no site. Os valores e condições são cotados e confirmados previamente no WhatsApp com base na localização exata, tipo de entulho gerado, volume pretendido e disponibilidade de frota no município.
                </p>
                <p className="mt-2">
                  O prazo de permanência da caçamba na obra é acordado no orçamento de acordo com o cronograma da obra e as regras municipais vigentes para estacionamento em via pública na cidade.
                </p>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-bold text-white font-display uppercase mb-1">
                  3. Pagamento e Bloqueio de Reserva
                </h4>
                <p>
                  Para assegurar a reserva do equipamento na escala do caminhão poliguindaste e garantir o cumprimento do horário da rota, o pagamento é realizado no ato da contratação. As condições e modalidades aceitas são informadas previamente pelo atendente.
                </p>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-bold text-white font-display uppercase mb-1">
                  4. Resíduos Proibidos e Responsabilidade Ambiental
                </h4>
                <p>
                  É estritamente vedado colocar na caçamba: telhas de amianto (fibrocimento tóxico), solventes, tintas líquidas, produtos químicos ou inflamáveis, lixo hospitalar, baterias ou lixo orgânico doméstico. A identificação de materiais proibidos impede o transporte até a regularização pelo contratante.
                </p>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-bold text-white font-display uppercase mb-1">
                  5. Limite de Carga e Acesso do Caminhão
                </h4>
                <p>
                  O contratante deve: (a) manter o entulho nivelado com a borda da caçamba, sem transbordar; (b) garantir área livre e segura para manobra do caminhão poliguindaste; (c) observar as regulamentações locais do órgão de trânsito ou prefeitura municipal para ocupação de via pública.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="mt-4 pt-3 border-t border-white/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            Entendido e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
