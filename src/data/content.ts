import { ServiceItem, TargetAudience, PortfolioProject } from '../types';

export const COMPANY_INFO = {
  name: 'Vasrouse Serviços',
  legalName: 'Vasrouse Serviços, Lda.',
  symbol: 'V7',
  tagline: 'Comunicação Visual de Ponta a Ponta',
  domain: 'vasrouse.co.ao',
  address: 'Av. Deolinda Rodrigues, Luanda, Angola',
  addressDetail: 'Frente ao Catetão do Petro',
  phones: [
    { display: '+244 939 917 381', raw: '+244939917381', whatsapp: '244939917381' },
    { display: '+244 939 917 594', raw: '+244939917594', whatsapp: '244939917594' }
  ],
  emails: [
    'geral@vasrouse.ao',
    'info@vasrouse.ao',
    'contacto@vasrouse.ao'
  ],
  workingHours: {
    weekdays: 'Segunda a Sexta: 08h00 às 18h00',
    saturdays: 'Sábado: 09h00 às 13h00'
  }
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'redes-sociais',
    number: '01',
    title: 'Redes Sociais',
    subtitle: 'Gestão de Conteúdo, Calendário Editorial e Comunidade',
    category: 'digital',
    description: 'Construção e gestão profissional da presença digital da sua organização, garantindo constância, alinhamento institucional e retenção da comunidade.',
    deliverables: [
      'Planeamento e calendário editorial mensal',
      'Criação de conteúdos estratégicos com copy institucional',
      'Gestão ativa de comentários e mensagens diretas',
      'Relatórios mensais de alcance, engajamento e conversão'
    ],
    keyBenefit: 'Presença diária com consistência de alto padrão visual e comunicação alinhada com as metas do negócio.'
  },
  {
    id: 'marketing-digital',
    number: '02',
    title: 'Marketing Digital',
    subtitle: 'Estratégia e Campanhas Digitais com Resultados Orientados',
    category: 'digital',
    description: 'Campanhas orientadas a resultados mensuráveis para fortalecer o reconhecimento da sua marca e gerar oportunidades de negócio qualificadas.',
    deliverables: [
      'Campanhas de tráfego pago (Meta Ads, Google Ads, LinkedIn)',
      'Estratégias de geração de leads comerciais e institucionais',
      'Copywriting persuasivo e redação institucional para anúncios',
      'Otimização contínua de custos por contacto e conversão'
    ],
    keyBenefit: 'Investimento direcionado ao público certo com controlo rigoroso de métricas e ROI.'
  },
  {
    id: 'design-digital',
    number: '03',
    title: 'Design Digital',
    subtitle: 'Artes para Web, Redes Sociais e Anúncios',
    category: 'digital',
    description: 'Identidades visuais digitais marcantes que comunicam autoridade e modernidade em cada ecrã, alimentando canais digitais com primor gráfico.',
    deliverables: [
      'Templates visuais exclusivos para redes sociais',
      'Banners para websites, portais e campanhas digitais',
      'Apresentações corporativas institucionais (Pitch Decks / Keynotes)',
      'Infográficos estáticos e dinâmicos para relatórios'
    ],
    keyBenefit: 'Uniformidade gráfica em todos os canais digitais com estética sofisticada e legibilidade máxima.'
  },
  {
    id: 'design-impressao',
    number: '04',
    title: 'Design para Impressão',
    subtitle: 'Flyers, Cartazes, Catálogos e Embalagens',
    category: 'impresso',
    description: 'Criação gráfica concebida especificamente para suportes físicos, respeitando normas rigorosas de pré-impressão, sangrias e perfis de cor CMYK.',
    deliverables: [
      'Flyers, folhetos desdobráveis e cartazes de evento',
      'Catálogos de produtos e brochuras corporativas de prestígio',
      'Branding de papelaria institucional (envelopes, pastas, cartões)',
      'Packaging, rótulos e embalagens personalizadas'
    ],
    keyBenefit: 'Ficheiros finais fechados e calibrados com rigor técnico para evitar desvios cromáticos na máquina.'
  },
  {
    id: 'producao-impressao',
    number: '05',
    title: 'Produção e Impressão',
    subtitle: 'Materiais Finais Prontos a Entregar com Acabamento Profissional',
    category: 'impresso',
    description: 'Controlo total da cadeia produtiva física com recurso a tecnologias de impressão de alta fidelidade e acabamentos nobres que valorizam a marca.',
    deliverables: [
      'Impressão offset e digital de grande e pequeno formato',
      'Acabamentos premium (verniz localizado UV, relevo seco, hot stamping)',
      'Materiais de grande formato (lonas, roll-ups, sinalética, stands)',
      'Controlo de qualidade folha a folha e embalamento seguro'
    ],
    keyBenefit: 'Entrega de material pronto e inspecionado em Luanda e expedição garantida para todas as províncias.'
  },
  {
    id: 'revistas-editorial',
    number: '06',
    title: 'Revistas e Editorial',
    subtitle: 'Paginação, Diagramação e Produção de Revistas',
    category: 'editorial',
    description: 'Especialização de referência no mercado angolano em projetos editoriais complexos: revistas periódicas, relatórios de contas, anuários e livros.',
    deliverables: [
      'Grelhas tipográficas personalizadas e paginação de elite',
      'Diagramação e tratamento fotográfico de alta resolução',
      'Gestão de provas de cor certificadas e aprovação de bonecos',
      'Encadernação artesanal, cosida a linha ou com lombada quadrada'
    ],
    keyBenefit: 'Padrão editorial internacional que confere peso documental e notoriedade à sua instituição.'
  }
];

export const TARGET_AUDIENCES: TargetAudience[] = [
  {
    id: 'instituicoes-publicas',
    title: 'Instituições Públicas e Diplomacia',
    subtitle: 'Ministérios, Governos Provinciais, Embaixadas e Organismos Internacionais',
    badge: 'Setor Governamental & Diplomático',
    focus: 'Rigor técnico, discrição institucional, cumprimento estrito de prazos e imagem de Estado impecável.',
    tone: 'Formal, institucional, focado em segurança de informação e solenidade.',
    description: 'Projetos públicos e missões diplomáticas exigem padrões invioláveis de exatidão editorial, confidencialidade de dados e respeito integral aos calendários de prestação de contas.',
    highlights: [
      'Cumprimento rigoroso das normas visuais e heráldicas da República de Angola',
      'Sigilo absoluto na preparação de relatórios de contas e documentação estratégica',
      'Prazos garantidos para cerimónias de Estado, conferências e aberturas oficiais'
    ],
    sampleDeliverables: [
      'Relatórios e Contas Anuais com encadernação nobre',
      'Revistas institucionais de balanço de governação',
      'Manuais de protocolo, pastas de cúpula e credenciamento de alta segurança',
      'Sinalética cerimonial e displays para delegações diplomáticas'
    ]
  },
  {
    id: 'empresas-pmes',
    title: 'Empresas e PMEs',
    subtitle: 'Sociedades Comerciais, Indústrias, Serviços e Startups',
    badge: 'Setor Corporativo & Comercial',
    focus: 'Atração de novos clientes, canais digitais ativos e benefícios comerciais mensuráveis.',
    tone: 'Direto, ágil, focado em retorno sobre o investimento e dinamismo de mercado.',
    description: 'As pequenas e médias empresas encontram na Vasrouse Serviços um parceiro ágil para estruturar a sua marca com solidez, competir no mercado com imagem profissional e ativar vendas no digital.',
    highlights: [
      'Identidades corporativas completas prontas a aplicar no mesmo mês',
      'Gestão de redes sociais com geração regular de pedidos de cotação',
      'Produção económica e escalável de material comercial impresso para equipas de vendas'
    ],
    sampleDeliverables: [
      'Cartões de visita especiais, pastas comerciais e fardamentos visuais',
      'Catálogos de produtos impressos e em formato PDF interativo',
      'Gestão mensal de redes sociais com anúncios patrocinados',
      'Roll-ups e expositores para pontos de venda e feiras comerciais'
    ]
  },
  {
    id: 'editoras-eventos',
    title: 'Editoras, Media e Eventos',
    subtitle: 'Casas Editoriais, Produtoras de Eventos, Feiras e Agências Parceiras',
    badge: 'Produção Cultural & Editorial',
    focus: 'Revistas periódicas, catálogos artísticos e material impresso com acabamento de alta exigência.',
    tone: 'Técnico, criativo e atento à excelência tipográfica e tátil.',
    description: 'Para quem vive do conteúdo e da cultura visual, oferecemos suporte integral na pré-impressão e finalização gráfica, dominando tipos de papel, gramagens, acabamentos e encadernações nobres.',
    highlights: [
      'Supervisão técnica na escolha de papéis couché, offset e especiais texturados',
      'Provas de cor calibradas e acompanhamento minucioso em máquina',
      'Capacidade de resposta rápida para grandes eventos com datas fixas inadiáveis'
    ],
    sampleDeliverables: [
      'Revistas trimestrais e mensais diagramadas com grelhas modulares',
      'Livros comemorativos e catálogos de arte com capa dura e verniz UV',
      'Badges, bilhetes de segurança e programas para fóruns internacionais',
      'Ecossistemas visuais completos para festivais e exposições'
    ]
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-1',
    title: 'Revista Institucional: Estratégia & Crescimento Sustentável',
    client: 'Consórcio de Desenvolvimento & Inovação',
    sector: 'Institucional & Energia',
    category: 'editorial',
    categoryLabel: 'Produção Editorial',
    image: '/src/assets/images/vasrouse_editorial_mag_1792426607243.jpg',
    summary: 'Diagramação e impressão de 148 páginas com grelha editorial suíça, papel couché mate 150g e acabamento com lombada cosida a linha.',
    specs: [
      { label: 'Formato', value: 'A4 Fechado (210 x 297 mm)' },
      { label: 'Páginas', value: '148 páginas a 4 cores' },
      { label: 'Miolo / Capa', value: 'Couché Mate 150g / Capa 350g com Soft Touch' },
      { label: 'Tiragem', value: '3.500 exemplares com distribuição VIP' }
    ],
    challenge: 'Integrar relatórios técnicos complexos e ensaios fotográficos de grande escala mantendo a sobriedade institucional exigida pelos conselhos de administração.',
    solution: 'Criação de um sistema modular de infografia, paleta sóbria de contrastes elegantes e paginação fluida que permitiu leitura rápida e apreço visual.',
    impact: 'Reconhecido como padrão de excelência de publicação anual e aprovado sem revisões no conselho deliberativo.'
  },
  {
    id: 'proj-2',
    title: 'Identidade Corporativa & Papelaria Institucional de Prestígio',
    client: 'Sociedade de Gestão de Ativos & Consultoria',
    sector: 'Setor Financeiro & Corporativo',
    category: 'impresso',
    categoryLabel: 'Design & Impressão',
    image: '/src/assets/images/vasrouse_print_branding_1792426606513.jpg',
    summary: 'Conjunto completo de papelaria corporativa com pastas com bolsa, papéis timbrados, envelopes personalizados e cartões com acabamento nobre dourado.',
    specs: [
      { label: 'Materiais', value: 'Pastas 400g, Papel de Carta 100g Fedrigoni' },
      { label: 'Acabamentos', value: 'Hot Stamping dourado e relevo seco' },
      { label: 'Cores', value: 'Pantone Dark Violet exclusivo + Verniz Seletivo' },
      { label: 'Kit Completo', value: 'Cartões VIP, envelopes saco, envelopes ofício e pastas' }
    ],
    challenge: 'Transmitir autoridade, solidez financeira e prestígio internacional perante parceiros institucionais angolanos e estrangeiros.',
    solution: 'Seleção minuciosa de suportes papéis nobres certificados e estampagem a quente de extrema precisão mecânica.',
    impact: 'Melhoria imediata na perceção de valor da sociedade durante rondas de negócios em Luanda e Lisboa.'
  },
  {
    id: 'proj-3',
    title: 'Campanha Digital 360° & Ecossistema de Redes Sociais',
    client: 'Plataforma Comercial de Inovação & Serviços',
    sector: 'Tecnologia & Retalho',
    category: 'digital',
    categoryLabel: 'Marketing Digital & Social',
    image: '/src/assets/images/vasrouse_digital_campaign_1792426608027.jpg',
    summary: 'Desenvolvimento do plano de conteúdo e artes para canais digitais, gerando mais de 4,2 milhões de impressões com engajamento de 18,5%.',
    specs: [
      { label: 'Canais', value: 'Instagram, LinkedIn e Meta Ads' },
      { label: 'Formatos', value: 'Carrosséis, Reels dinâmicos, Stories e Anúncios' },
      { label: 'Duração', value: 'Campanha de 90 dias ininterruptos' },
      { label: 'Métricas', value: '+4,2M Impressões / +91K Cliques qualificados' }
    ],
    challenge: 'Posicionar a nova marca num mercado altamente competitivo e transformar seguidores ocasionais em clientes ativos com cotações abertas.',
    solution: 'Copywriting focado em benefícios comerciais diretos e identidade visual contrastante com destaques em Dark Violet e Electric Lime.',
    impact: 'Aumento expressivo nas conversões diretas via WhatsApp institucional e consolidação como referência no segmento.'
  },
  {
    id: 'proj-4',
    title: 'Estúdio de Criação & Produção Visual Integrada',
    client: 'Vasrouse Serviços Showcase',
    sector: 'Comunicação Visual de Ponta a Ponta',
    category: 'impresso',
    categoryLabel: 'Produção e Impressão',
    image: '/src/assets/images/vasrouse_hero_studio_1792426605504.jpg',
    summary: 'Acompanhamento do ciclo integral de comunicação: desde o briefing criativo nos nossos ecrãs até à prova física de máquina e entrega final.',
    specs: [
      { label: 'Equipa', value: 'Direção de Arte, Paginação e Produção' },
      { label: 'Localização', value: 'Av. Deolinda Rodrigues, Luanda' },
      { label: 'Garantia', value: '100% rigor cromático e prova de cor prévia' },
      { label: 'Capacidade', value: 'Tiragens curtas de urgência a grandes volumes' }
    ],
    challenge: 'Eliminar o hiato tradicional entre o designer que cria no computador e a gráfica que imprime fisicamente.',
    solution: 'Integração de todo o fluxo num único interlocutor responsável: Vasrouse Serviços.',
    impact: 'Eliminação de atrasos, erros de corte e discrepâncias de cor nos projetos dos nossos clientes.'
  }
];

export const INSTITUTIONAL_PILLARS = [
  {
    number: '01',
    title: 'Rigor Técnico e Calibração',
    description: 'Da tipografia editorial à calibragem rigorosa de perfis CMYK e pós-impressão. Não deixamos margem para desvios cromáticos nem falhas de acabamento.'
  },
  {
    number: '02',
    title: 'Cumprimento Estrito de Prazos',
    description: 'Tratamos cada data de entrega como um compromisso inegociável. Eventos de Estado, lançamentos e reuniões de acionistas têm garantia de pontualidade absoluta.'
  },
  {
    number: '03',
    title: 'Foco em Resultados Institucionais',
    description: 'Materiais que inspiram confiança perante investidores, cidadãos e clientes. Cada peça foi pensada para reforçar a credibilidade da sua instituição.'
  }
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    name: 'Diagnóstico & Alinhamento',
    desc: 'Compreensão aprofundada dos objetivos, normas institucionais, público e especificações técnicas.'
  },
  {
    step: '02',
    name: 'Conceção & Design Gráfico',
    desc: 'Desenvolvimento das grelhas, identidade visual, diagramação e redação estratégica institucional.'
  },
  {
    step: '03',
    name: 'Provas & Validação Rígida',
    desc: 'Emissão de bonecos editoriais e provas cromáticas para conferência de conteúdo e aprovação formal.'
  },
  {
    step: '04',
    name: 'Produção & Alta Fidelidade',
    desc: 'Impressão em suportes selecionados, acabamentos especiais (UV, relevo, costura) e controlo de qualidade.'
  },
  {
    step: '05',
    name: 'Entrega & Ativação de Sucesso',
    desc: 'Embalamento protegido e entrega em mãos em Luanda ou despacho seguro para outras províncias de Angola.'
  }
];

export const TRUST_SECTORS = [
  'Ministérios & Organismos Públicos',
  'Empresas de Energia, Petróleo & Gás',
  'Instituições Financeiras & Seguros',
  'Editoras & Veículos de Comunicação',
  'Grandes Conferências & Cimeiras em Luanda',
  'PMEs Comerciais & Industriais de Angola',
  'Missões Diplomáticas & Cooperação'
];

export const FAQ_LIST = [
  {
    question: 'Como funciona o processo de prova de cor e validação antes da impressão final?',
    answer: 'Antes de rodar qualquer tiragem gráfica ou editorial, produzimos uma prova de cor calibrada ou boneco físico (mockup real). A produção final só avança após validação formal e assinatura da prova pelo cliente, garantindo zero desvios cromáticos.',
    category: 'producao' as const
  },
  {
    question: 'Qual é a garantia de sigilo para relatórios e contas ou documentos de Estado?',
    answer: 'Tratamos projetos institucionais sob estrito acordo de confidencialidade (NDA). Toda a equipa envolvida na paginação e impressão segue protocolos de segurança da informação, com ficheiros encriptados e destruição controlada de aparas de teste.',
    category: 'institucional' as const
  },
  {
    question: 'A Vasrouse Serviços efetua entregas em províncias fora de Luanda?',
    answer: 'Sim. A nossa sede e estúdio de produção situam-se na Av. Deolinda Rodrigues em Luanda, mas dispomos de logística de expedição rápida e segura para todas as 18 províncias de Angola (Benguela, Huíla, Cabinda, Huambo, etc.).',
    category: 'comercial' as const
  },
  {
    question: 'É possível contratar pacotes contínuos de Redes Sociais combinados com Impressão regular?',
    answer: 'Sim, é o nosso modelo 360° mais procurado por PMEs e corporações. Criamos a estratégia mensal digital e fornecemos uma quota periódica de materiais impressos (flyers de campanha, cartazes ou revistas periódicas) com fatura única e gestão centralizada.',
    category: 'comercial' as const
  },
  {
    question: 'Quais são os prazos médios para produção de revistas e livros corporativos?',
    answer: 'Para projetos padrão, o ciclo editorial completo (diagramação de 80 a 160 páginas, aprovação e impressão) varia habitualmente entre 10 a 20 dias úteis. Para cimeiras, congressos e eventos urgentes, dispomos de modalidade acelerada com cronograma dedicado.',
    category: 'producao' as const
  }
];

