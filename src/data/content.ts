import { ServiceItem, TargetAudience, PortfolioProject } from '../types';

export const COMPANY_INFO = {
  name: 'Vasrouse Serviços',
  legalName: 'Vasrouse Serviços, Lda.',
  symbol: 'V7',
  tagline: 'Comunicação Visual de Ponta a Ponta',
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
      'Criação de conteúdos estratégicos com redacção institucional',
      'Gestão activa de comentários e mensagens directas',
      'Relatórios mensais de alcance, envolvimento e conversão'
    ],
    keyBenefit: 'Presença diária com consistência de alto padrão visual e comunicação alinhada com os objectivos do negócio.'
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
      'Estratégias de geração de contactos comerciais e institucionais',
      'Redacção persuasiva e institucional para anúncios',
      'Optimização contínua de custos por contacto e conversão'
    ],
    keyBenefit: 'Investimento direccionado ao público certo com controlo rigoroso de métricas e retorno do investimento.'
  },
  {
    id: 'design-digital',
    number: '03',
    title: 'Design Digital',
    subtitle: 'Artes para Web, Redes Sociais e Anúncios',
    category: 'digital',
    description: 'Identidades visuais digitais marcantes que comunicam autoridade e modernidade em cada ecrã, alimentando canais digitais com primor gráfico.',
    deliverables: [
      'Modelos visuais exclusivos para redes sociais',
      'Faixas para portais, sítios de internet e campanhas digitais',
      'Apresentações corporativas institucionais de alto impacto',
      'Infográficos estáticos e dinâmicos para relatórios'
    ],
    keyBenefit: 'Uniformidade gráfica em todos os canais digitais com estética sofisticada e legibilidade máxima.'
  },
  {
    id: 'design-impressao',
    number: '04',
    title: 'Design para Impressão',
    subtitle: 'Folhetos, Cartazes, Catálogos e Embalagens',
    category: 'impresso',
    description: 'Criação gráfica concebida especificamente para suportes físicos, respeitando normas rigorosas de pré-impressão, sangrias e perfis cromáticos CMYK.',
    deliverables: [
      'Folhetos, desdobráveis e cartazes de eventos',
      'Catálogos de produtos e brochuras corporativas de prestígio',
      'Papelaria institucional (envelopes, pastas de cúpula, cartões de visita)',
      'Embalagens e rótulos personalizados de alta exigência'
    ],
    keyBenefit: 'Ficheiros finais fechados e calibrados com rigor técnico para evitar desvios cromáticos em máquina.'
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
      'Acabamentos nobres (verniz localizado UV, relevo seco, estampagem a ouro)',
      'Materiais de grande formato (telas, expositores roll-up, sinalética)',
      'Controlo de qualidade folha a folha e acondicionamento protegido'
    ],
    keyBenefit: 'Entrega de material pronto e inspeccionado em Luanda e expedição garantida para todas as províncias.'
  },
  {
    id: 'revistas-editorial',
    number: '06',
    title: 'Revistas e Editorial',
    subtitle: 'Paginação, Diagramação e Produção de Revistas',
    category: 'editorial',
    description: 'Especialização de referência no mercado angolano em projectos editoriais complexos: revistas periódicas, relatórios de contas, anuários e livros comemorativos.',
    deliverables: [
      'Grelhas tipográficas personalizadas e paginação de elite',
      'Diagramação e tratamento fotográfico de alta resolução',
      'Gestão de provas de cor certificadas e aprovação de maquetas físicas',
      'Encadernação cosida a linha ou com lombada quadrada nobre'
    ],
    keyBenefit: 'Padrão editorial internacional que confere peso documental e notoriedade à sua instituição.'
  }
];

export const TARGET_AUDIENCES: TargetAudience[] = [
  {
    id: 'instituicoes-publicas',
    title: 'Instituições Públicas e Diplomacia',
    subtitle: 'Ministérios, Governos Provinciais, Embaixadas e Organismos Internacionais',
    badge: 'Sector Governamental & Diplomático',
    focus: 'Rigor técnico, discrição institucional, cumprimento estrito de prazos e imagem de Estado cuidada.',
    tone: 'Formal, institucional, orientado a resultados e solenidade protocolar.',
    description: 'Projectos públicos e missões diplomáticas exigem padrões invioláveis de exactidão editorial, confidencialidade de dados e respeito integral aos calendários de prestação de contas.',
    highlights: [
      'Cumprimento rigoroso das normas visuais e heráldicas da República de Angola',
      'Sigilo absoluto na preparação de relatórios de contas e documentação estratégica',
      'Prazos garantidos para cerimónias de Estado, conferências e aberturas oficiais'
    ],
    sampleDeliverables: [
      'Relatórios e Contas Anuais com encadernação nobre',
      'Revistas institucionais de balanço de governação',
      'Manuais de protocolo, pastas de cúpula e credenciamento de alta segurança',
      'Sinalética cerimonial e expositores para delegações diplomáticas'
    ]
  },
  {
    id: 'empresas-pmes',
    title: 'Empresas e PMEs',
    subtitle: 'Sociedades Comerciais, Indústrias, Serviços e Empreendimentos',
    badge: 'Sector Corporativo & Comercial',
    focus: 'Atracção de novos clientes, redes activas e benefícios comerciais concretos.',
    tone: 'Directo, claro, focado em retorno sobre o investimento e dinamismo de mercado.',
    description: 'As pequenas e médias empresas encontram na Vasrouse Serviços um parceiro ágil para estruturar a sua marca com solidez, competir no mercado com imagem profissional e activar vendas no digital.',
    highlights: [
      'Identidades corporativas completas prontas a aplicar no mesmo mês',
      'Gestão de redes sociais com geração regular de pedidos de cotação',
      'Produção económica e escalável de material comercial impresso para equipas de vendas'
    ],
    sampleDeliverables: [
      'Cartões de visita especiais, pastas comerciais e fardamentos visuais',
      'Catálogos de produtos impressos e em formato digital interactivo',
      'Gestão mensal de redes sociais com anúncios patrocinados',
      'Expositores roll-up e mostruários para pontos de venda e feiras comerciais'
    ]
  },
  {
    id: 'editoras-eventos',
    title: 'Editoras, Media e Eventos',
    subtitle: 'Casas Editoriais, Produtoras de Eventos, Feiras e Agências Parceiras',
    badge: 'Produção Cultural & Editorial',
    focus: 'Revistas periódicas, catálogos artísticos e material impresso com acabamento de elevada exigência técnica.',
    tone: 'Técnico, criativo e atento à excelência tipográfica e táctil.',
    description: 'Para quem vive do conteúdo e da cultura visual, oferecemos suporte integral na pré-impressão e finalização gráfica, dominando tipos de papel, gramagens, acabamentos e encadernações nobres.',
    highlights: [
      'Supervisão técnica na escolha de papéis couché, offset e especiais texturados',
      'Provas de cor calibradas e acompanhamento minucioso em máquina',
      'Capacidade de resposta rápida para grandes eventos com datas fixas inadiáveis'
    ],
    sampleDeliverables: [
      'Revistas trimestrais e mensais diagramadas com grelhas modulares',
      'Livros comemorativos e catálogos de arte com capa dura e verniz UV',
      'Crachás, bilhetes de segurança e programas para fóruns internacionais',
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
    image: '/images/vasrouse_editorial_mag_1792426607243.jpg',
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
    client: 'Sociedade de Gestão de Activos & Consultoria',
    sector: 'Sector Financeiro & Corporativo',
    category: 'impresso',
    categoryLabel: 'Design & Impressão',
    image: '/images/vasrouse_print_branding_1792426606513.jpg',
    summary: 'Conjunto completo de papelaria corporativa com pastas com bolsa, papéis timbrados, envelopes personalizados e cartões com acabamento nobre dourado.',
    specs: [
      { label: 'Materiais', value: 'Pastas 400g, Papel de Carta 100g Fedrigoni' },
      { label: 'Acabamentos', value: 'Estampagem a ouro e relevo seco' },
      { label: 'Cores', value: 'Pantone Dark Violet exclusivo + Verniz Selectivo' },
      { label: 'Conjunto Completo', value: 'Cartões VIP, envelopes saco, envelopes ofício e pastas' }
    ],
    challenge: 'Transmitir autoridade, solidez financeira e prestígio internacional perante parceiros institucionais angolanos e estrangeiros.',
    solution: 'Selecção minuciosa de suportes de papéis nobres certificados e estampagem a quente de extrema precisão mecânica.',
    impact: 'Melhoria imediata na percepção de valor da sociedade durante rondas de negócios em Luanda e Lisboa.'
  },
  {
    id: 'proj-3',
    title: 'Campanha Digital 360° & Ecossistema de Redes Sociais',
    client: 'Plataforma Comercial de Inovação & Serviços',
    sector: 'Tecnologia & Comércio',
    category: 'digital',
    categoryLabel: 'Marketing Digital & Social',
    image: '/images/vasrouse_digital_campaign_1792426608027.jpg',
    summary: 'Desenvolvimento do plano de conteúdo e artes para canais digitais, gerando mais de 4,2 milhões de impressões com envolvimento de 18,5%.',
    specs: [
      { label: 'Canais', value: 'Instagram, LinkedIn e Meta Ads' },
      { label: 'Formatos', value: 'Carrosséis, Vídeos curtos, Histórias e Anúncios' },
      { label: 'Duração', value: 'Campanha de 90 dias ininterruptos' },
      { label: 'Métricas', value: '+4,2M Impressões / +91K Cliques qualificados' }
    ],
    challenge: 'Posicionar a nova marca num mercado altamente competitivo e transformar seguidores ocasionais em clientes activos com cotações abertas.',
    solution: 'Redacção focada em benefícios comerciais directos e identidade visual contrastante com destaques em Dark Violet e Electric Lime.',
    impact: 'Aumento expressivo nas conversões directas via WhatsApp institucional e consolidação como referência no segmento.'
  },
  {
    id: 'proj-4',
    title: 'Estúdio de Criação & Produção Visual Integrada',
    client: 'Vasrouse Serviços Showcase',
    sector: 'Comunicação Visual de Ponta a Ponta',
    category: 'impresso',
    categoryLabel: 'Produção e Impressão',
    image: '/images/vasrouse_hero_studio_1792426605504.jpg',
    summary: 'Acompanhamento do ciclo integral de comunicação: desde o briefing criativo nos nossos ecrãs até à prova física de máquina e entrega final.',
    specs: [
      { label: 'Equipa', value: 'Direcção de Arte, Paginação e Produção' },
      { label: 'Localização', value: 'Av. Deolinda Rodrigues, Luanda' },
      { label: 'Garantia', value: '100% rigor cromático e prova de cor prévia' },
      { label: 'Capacidade', value: 'Tiragens curtas de urgência a grandes volumes' }
    ],
    challenge: 'Eliminar o hiato tradicional entre o designer que cria no computador e a gráfica que imprime fisicamente.',
    solution: 'Integração de todo o fluxo num único interlocutor responsável: Vasrouse Serviços.',
    impact: 'Eliminação de atrasos, erros de corte e discrepâncias de cor nos projectos dos nossos clientes.'
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
    description: 'Tratamos cada data de entrega como um compromisso inegociável. Eventos de Estado, lançamentos e reuniões de accionistas têm garantia de pontualidade absoluta.'
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
    desc: 'Compreensão aprofundada dos objectivos, normas institucionais, público e especificações técnicas.'
  },
  {
    step: '02',
    name: 'Concepção & Design Gráfico',
    desc: 'Desenvolvimento das grelhas, identidade visual, diagramação e redacção estratégica institucional.'
  },
  {
    step: '03',
    name: 'Provas & Validação Rígida',
    desc: 'Emissão de maquetas editoriais e provas cromáticas para conferência de conteúdo e aprovação formal.'
  },
  {
    step: '04',
    name: 'Produção & Alta Fidelidade',
    desc: 'Impressão em suportes seleccionados, acabamentos especiais (UV, relevo, costura) e controlo de qualidade.'
  },
  {
    step: '05',
    name: 'Entrega & Activação de Sucesso',
    desc: 'Acondicionamento protegido e entrega em mãos em Luanda ou expedição segura para outras províncias de Angola.'
  }
];

export const TRUST_SECTORS = [
  'Ministérios & Organismos Públicos',
  'Empresas de Energia, Petróleo & Gás',
  'Instituições Financeiras & Seguros',
  'Editoras & Veículos de Comunicação',
  'Grandes Conferências & Cimeiras em Luanda',
  'PMEs Comerciais & Industriais de Angola',
  'Missões Diplomáticas & Cooperação Internacional'
];

export const FAQ_LIST = [
  {
    question: 'Como funciona o processo de prova de cor e validação antes da impressão final?',
    answer: 'Antes de rodar qualquer tiragem gráfica ou editorial, produzimos uma prova de cor calibrada ou maqueta física (amostra real). A produção final só avança após validação formal e assinatura da prova pelo cliente, garantindo zero desvios cromáticos.',
    category: 'producao' as const
  },
  {
    question: 'Qual é a garantia de sigilo para relatórios de contas ou documentos de Estado?',
    answer: 'Tratamos projectos institucionais sob estrito acordo de confidencialidade (NDA). Toda a equipa envolvida na paginação e impressão segue protocolos de segurança da informação, com ficheiros encriptados e destruição controlada de provas de ensaio.',
    category: 'institucional' as const
  },
  {
    question: 'A Vasrouse Serviços efectua entregas em províncias fora de Luanda?',
    answer: 'Sim. A nossa sede e estúdio de produção situam-se na Av. Deolinda Rodrigues em Luanda, mas dispomos de logística de expedição rápida e segura para todas as 18 províncias de Angola (Benguela, Huíla, Cabinda, Huambo, etc.).',
    category: 'comercial' as const
  },
  {
    question: 'É possível contratar pacotes contínuos de Redes Sociais combinados com Impressão regular?',
    answer: 'Sim, é o nosso modelo 360° mais procurado por PMEs e corporações. Criamos a estratégia mensal digital e fornecemos uma quota periódica de materiais impressos (folhetos de campanha, cartazes ou revistas periódicas) com facturação centralizada.',
    category: 'comercial' as const
  },
  {
    question: 'Quais são os prazos médios para produção de revistas e livros corporativos?',
    answer: 'Para projectos padrão, o ciclo editorial completo (diagramação de 80 a 160 páginas, aprovação e impressão) varia habitualmente entre 10 a 20 dias úteis. Para cimeiras, congressos e eventos urgentes, dispomos de modalidade acelerada com cronograma dedicado.',
    category: 'producao' as const
  }
];
