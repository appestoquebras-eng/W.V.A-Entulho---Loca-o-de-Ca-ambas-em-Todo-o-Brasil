import { CacambaSize, FaqItem, ProcessStep } from '../types';

export const COMPANY_INFO = {
  brandName: 'W.V.A ENTULHO',
  tagline: 'Locação de Caçambas para Toda Obra',
  legalName: 'W. V. A. PEREIRA ENTULHO',
  cnpj: '17.323.365/0001-50',
  whatsappRaw: '5511957596840',
  whatsappDisplay: '(11) 95759-6840',
  phoneTel: '+5511957596840',
  email: 'wvaentulho@gmail.com',
  workingHours: 'Segunda a sexta-feira, das 07h às 18h',
  coverageScope: 'Atendimento em todo o Brasil através de empresas parceiras cadastradas (mediante disponibilidade por cidade)',
};

const BASE_STORAGE_URL = 'https://ojvznzupiojimykqryhw.supabase.co/storage/v1/object/public/wva-site-assets/';

export const ASSETS = {
  logo: `${BASE_STORAGE_URL}logo.png`,
  heroTruck: `${BASE_STORAGE_URL}caminhao-obra-v2.png`,
  patioCacambas: `${BASE_STORAGE_URL}patio-cacambas-v2.png`,
  cacamba3m3: `${BASE_STORAGE_URL}cacamba-3m3-v2.png`,
  cacamba4m3: `${BASE_STORAGE_URL}cacamba-4m3-v2.png`,
  cacamba5m3: `${BASE_STORAGE_URL}cacamba-5m3-v2.png`,
  cacamba6m3: `${BASE_STORAGE_URL}cacamba-6m3-v2.png`,
  cacamba7m3: `${BASE_STORAGE_URL}cacamba-7m3-v2.png`,
  cacamba10m3: `${BASE_STORAGE_URL}cacamba-10m3-v2.png`,
};

export const BENEFITS = [
  {
    title: 'Atendimento Rápido no WhatsApp',
    description: 'Sem cadastros longos ou formulários. Você fala direto com nossa equipe e recebe retorno ágil sobre valores e datas.',
    badge: 'Sem burocracia',
  },
  {
    title: 'Cobertura em Todo o Brasil',
    description: 'Rede de empresas parceiras cadastradas em diversos municípios, conectando sua obra à disponibilidade local.',
    badge: 'Rede nacional',
  },
  {
    title: 'Descarte e Operação Responsável',
    description: 'Orientação clara para caçambas dentro do limite de carga e destinação de entulho conforme normas do seu município.',
    badge: 'Segurança total',
  },
];

export const CACAMBA_SIZES: CacambaSize[] = [
  {
    id: '3m3',
    volume: '3 m³',
    image: ASSETS.cacamba3m3,
    idealFor: 'Compacta para pequenos reparos residenciais e limpezas pontuais.',
    examples: [
      'Reforma de banheiro ou cozinha compacta',
      'Descarte pontual de pisos, azulejos e restos de quintal',
    ],
  },
  {
    id: '4m3',
    volume: '4 m³',
    isPopular: true,
    image: ASSETS.cacamba4m3,
    idealFor: 'Tamanho padrão e mais pedido para o dia a dia da construção civil.',
    examples: [
      'Reformas residenciais completas e apartamentos',
      'Troca geral de pisos, forros e pequenas demolições de alvenaria',
    ],
  },
  {
    id: '5m3',
    volume: '5 m³',
    image: ASSETS.cacamba5m3,
    idealFor: 'Capacidade intermediária para reformas de médio porte com ritmo acelerado.',
    examples: [
      'Reformas de casas térreas, sobrados e lojas comerciais',
      'Remoção de contra-pisos, revestimentos e alvenarias mistas',
    ],
  },
  {
    id: '6m3',
    volume: '6 m³',
    image: ASSETS.cacamba6m3,
    idealFor: 'Volume ampliado para obras com geração contínua de resíduos pesados.',
    examples: [
      'Demolições de paredes e estruturas de médio porte',
      'Troca estrutural de telhados e grandes reformas de fachadas',
    ],
  },
  {
    id: '7m3',
    volume: '7 m³',
    image: ASSETS.cacamba7m3,
    idealFor: 'Alta litragem para grandes canteiros e descarte pesado de entulho inerte.',
    examples: [
      'Construção do zero, fundações e reformas prediais',
      'Demolições completas com necessidade de alta capacidade de carga',
    ],
  },
  {
    id: '10m3',
    volume: '10 m³',
    image: ASSETS.cacamba10m3,
    idealFor: 'Volume máximo para grandes demandas comerciais, galpões e indústrias.',
    examples: [
      'Canteiros corporativos e galpões de grande metragem',
      'Grandes operações com logística programada de troca',
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Chame no WhatsApp',
    description: 'Informe sua cidade, bairro e o tipo de entulho gerado na sua obra para receber atendimento e orçamento imediato.',
  },
  {
    step: '02',
    title: 'Agende a Entrega',
    description: 'Confirme as condições de acesso no local e agende a data de posicionamento da caçamba com a empresa parceira cadastrada.',
  },
  {
    step: '03',
    title: 'Combine a Retirada',
    description: 'Ao término do período combinado ou quando o entulho atingir a borda máxima, o caminhão realiza a retirada com segurança.',
  },
];

export const ACCEPTED_MATERIALS = [
  {
    title: 'Alvenaria e Concreto',
    desc: 'Pedaços de concreto, blocos estruturais, tijolos maciços ou furados e pedras de fundação.',
  },
  {
    title: 'Cerâmicas e Azulejos',
    desc: 'Restos de pisos cerâmicos, porcelanatos, pastilhas e sobras de corte de revestimentos.',
  },
  {
    title: 'Argamassas e Rebocos',
    desc: 'Resíduos secos de cimento, argamassa colante, reboco e gesso em volumes moderados.',
  },
  {
    title: 'Terra Limpa e Pedregulhos',
    desc: 'Sobras de escavação, nivelamento de terreno, cascalho e pedras limpas (sem lixo orgânico).',
  },
  {
    title: 'Madeiras e Metais (sob triagem)',
    desc: 'Sobras de tábuas de caixaria, ferragens e vergalhões dependem de separação prévia e disponibilidade do parceiro local.',
  },
];

export const PROHIBITED_MATERIALS = [
  {
    title: 'Amianto e Fibrocimento',
    desc: 'Telhas de amianto e caixas d’água antigas com fibras de manuseio proibido em caçambas comuns por legislação sanitária.',
  },
  {
    title: 'Tintas, Solventes e Químicos',
    desc: 'Latas com tintas líquidas, vernizes, thinner, solventes, óleos minerais, combustíveis e pesticidas.',
  },
  {
    title: 'Lixo Orgânico e Doméstico',
    desc: 'Restos de comida, lixo doméstico, podas de árvores não autorizadas e resíduos orgânicos perecíveis.',
  },
  {
    title: 'Resíduos Hospitalares e Infectantes',
    desc: 'Materiais de clínicas, agulhas, curativos, remédios e quaisquer substâncias com risco biológico.',
  },
  {
    title: 'Pilhas, Baterias e Eletrônicos',
    desc: 'Baterias automotivas, pilhas e lixo eletroeletrônico que demandam logística reversa específica.',
  },
  {
    title: 'Inflamáveis e Explosivos',
    desc: 'Gases comprimidos, botijões, substâncias pirotécnicas ou materiais com risco iminente de ignição.',
  },
];

export const SAFETY_GUIDELINES = [
  {
    title: 'Limite Máximo na Borda',
    desc: 'O entulho nunca deve ultrapassar a borda superior da caçamba, evitando queda de pedras durante o transporte e multas de trânsito.',
  },
  {
    title: 'Espaço Livre para o Caminhão',
    desc: 'Garanta espaço desimpedido para manobra do caminhão poliguindaste no momento da entrega e retirada.',
  },
  {
    title: 'Regras Municipais de Estacionamento',
    desc: 'A colocação da caçamba na via pública deve respeitar a regulamentação de trânsito e tráfego da sua prefeitura.',
  },
  {
    title: 'Acesso Seguro e Pavimentação',
    desc: 'Verifique se o piso suporta a pressão das sapatas do caminhão e o peso da caçamba carregada.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Vocês atendem a minha cidade?',
    answer:
      'Sim, prestamos atendimento em cidades de todo o Brasil através de uma rede de empresas parceiras cadastradas. Como a operação logística depende da frota e disponibilidade local, confirmamos a viabilidade para o seu município e bairro diretamente no WhatsApp.',
  },
  {
    question: 'Como solicito um orçamento para a minha obra?',
    answer:
      'O orçamento é 100% realizado via WhatsApp. Basta clicar em qualquer botão do site para iniciar uma conversa com nossa equipe informando sua cidade, bairro, volume estimado e tipo de entulho. Respondemos com agilidade e total clareza.',
  },
  {
    question: 'Quais tamanhos de caçamba estão disponíveis?',
    answer:
      'Trabalhamos com opções de 3 m³, 4 m³ (mais pedida para reformas), 5 m³, 6 m³, 7 m³ e 10 m³. Nossa equipe no WhatsApp auxilia você a escolher o volume ideal com base na etapa e no tamanho do seu canteiro.',
  },
  {
    question: 'Qual é o prazo de permanência da caçamba na obra?',
    answer:
      'O prazo de permanência não é fixo e é acordado diretamente no orçamento com base nas necessidades da sua obra e nas regras municipais da sua cidade sobre estacionamento e permanência em via pública.',
  },
  {
    question: 'Como funciona a contratação e reserva da caçamba?',
    answer:
      'Para garantir o bloqueio do equipamento na escala do caminhão poliguindaste e assegurar pontualidade na rota, o pagamento é realizado no ato da contratação. As condições e formas de pagamento aceitas são informadas com antecedência no WhatsApp.',
  },
  {
    question: 'Quais resíduos não podem ser descartados de forma alguma?',
    answer:
      'É terminantemente proibido colocar na caçamba telhas ou peças de amianto (fibrocimento tóxico), produtos químicos, tintas ou vernizes líquidos, solventes, lixo hospitalar, baterias, pilhas e lixo orgânico doméstico.',
  },
  {
    question: 'As fotos das caçambas no site correspondem exatamente ao equipamento entregue?',
    answer:
      'As imagens apresentadas no site são ilustrações representativas de capacidade volumétrica (de 3m³ a 10m³). As caçambas entregues em cada localidade seguem rigorosamente a capacidade volumétrica contratada, podendo apresentar variações estéticas ou de pintura conforme o modelo operacional da empresa parceira cadastrada na sua cidade.',
  },
];

export function getWhatsAppUrl(context: {
  size?: string;
  action?: 'general' | 'city' | 'size' | 'urgent';
}): string {
  const phone = COMPANY_INFO.whatsappRaw;

  if (context.action === 'size' && context.size) {
    const text = `Olá, W.V.A Entulho! Gostaria de consultar disponibilidade e solicitar orçamento para a caçamba de ${context.size} na minha região.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }

  if (context.action === 'city') {
    const text = 'Olá, W.V.A Entulho! Gostaria de consultar a disponibilidade de caçamba para a minha cidade e bairro.';
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }

  if (context.action === 'urgent') {
    const text = 'Olá, W.V.A Entulho! Preciso de uma caçamba com urgência para a minha obra. Como podemos agendar?';
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }

  const text = 'Olá, W.V.A Entulho! Gostaria de solicitar um orçamento para locação de caçamba na minha obra.';
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
