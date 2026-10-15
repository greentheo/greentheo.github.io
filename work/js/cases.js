// The case studies, written once and read twice: /work/ builds its cards from
// this, and /work/case.html renders the full study from the same record. One
// source of truth, so a number can never disagree with itself across pages.
//
// Everything here comes off the resume and the career inventory. Nothing is
// inferred or rounded up.
//
// Every figure carries a claim type, because they are not the same kind of
// claim and a page that blurs them is a page you cannot trust twice:
//
//   realized   — it happened and the money or the time moved
//   identified — found and quantified; capture was someone else's to execute
//   validated  — measured against a held-out or human-labeled set

export const CASES = [
  {
    id: 'abinbev',
    client: 'AB InBev / Ambev',
    role: 'Principal Applied AI Architect — via A.Team',
    period: '2025',
    title: 'Finding ~$200M in a decline nobody could explain',
    summary: 'Led the data science workstream investigating falling volume and revenue in Brazil, '
      + 'then co-built the agent that does that kind of investigation on its own.',
    why: 'Separating real drivers from correlated noise.',
    whyMore: 'A decline shows up everywhere at once. The work was causal inference across sell-in, '
      + 'sell-out and direct-to-consumer channels to find which movements actually caused the others.',
    metrics: [
      ['~$200M', 'net opportunity', 'identified'],
      ['3 channels', 'sell-in, sell-out, DTC', ''],
    ],
    detail: [
      ['The diagnosis', 'Volume and revenue were falling across Brazil and the usual dashboards '
        + 'showed the decline in every cut of the data at once — which is what makes a decline hard '
        + 'rather than easy. I led the workstream applying causal inference across sell-in, sell-out '
        + 'and direct-to-consumer channels, separating the movements that were genuinely driving the '
        + 'others from those that were merely correlated with them.'],
      ['What it found', 'Underserved customer segments and form factors representing approximately '
        + '$200M net in identified savings and revenue opportunity — specific enough to act on rather '
        + 'than a direction to explore.'],
      ['The build', 'Co-built V1 of the Assemble AI Data Scientist with A.Team’s internal builder '
        + 'team: an agent that works ad hoc business questions the way an analyst would. It compiles '
        + 'evidence, archives its conclusions, and synthesizes follow-on directions and testable '
        + 'interventions rather than returning a single answer and stopping.'],
    ],
    tags: ['causal inference', 'agentic LLM', 'reinforcement learning', 'CPG'],
    svg: `<rect width="160" height="90" fill="#0f1014"/>
      <path d="M14 26 L44 38 L72 34 L100 52 L128 58 L148 70" fill="none" stroke="#e2563f" stroke-width="2"/>
      <path d="M14 26 L44 38 L72 34 L100 52 L128 58 L148 70 L148 82 L14 82Z" fill="#2a1512" opacity=".55"/>
      <g stroke="#5fd3a6" stroke-width="1.4" stroke-dasharray="3 2" fill="none">
        <path d="M72 34 L100 30 L128 24 L148 18"/>
      </g>
      <g fill="#5fd3a6"><circle cx="100" cy="30" r="2.6"/><circle cx="128" cy="24" r="2.6"/></g>
      <g stroke="#3a4250" stroke-width=".8"><path d="M14 82 H150"/><path d="M14 14 V82"/></g>
      <text x="104" y="14" fill="#5fd3a6" font-family="ui-monospace,monospace" font-size="7">~$200M</text>`,
  },
  {
    id: 'yesora',
    client: 'Yesora.ai',
    role: 'Founding CTO → Technical Advisor',
    period: '2026 – present',
    title: 'One trusted weekly view out of five incompatible systems',
    summary: 'First technical hire. Built the AI-native operating layer that reconciles fragmented '
      + 'retail data into ranked, explained, owner-assigned actions.',
    why: 'Every source was dirty, and every source kept changing shape.',
    whyMore: 'ERP, CRM, EDI, retailer portals and spreadsheets do not agree on what a product is. '
      + 'The hard part was not the model, it was making the inputs mean the same thing week to week.',
    metrics: [
      ['30h → 30min', 'design partner’s weekly reporting cycle', 'realized'],
      ['2,400+ SKUs', 'across 4+ conflicting source files, zero manual merges', 'realized'],
      ['0 → 1', 'launched to paying customers on recurring contracts', 'realized'],
    ],
    detail: [
      ['The problem', 'A consumer brand’s truth is split across an ERP, a CRM, EDI feeds, several '
        + 'retailer portals and a pile of spreadsheets. None of them agree on what a product is, the '
        + 'schemas drift without warning, and reconciling them by hand consumed a working week every week.'],
      ['The architecture', 'Designed and built it 0→1: AI-native ingestion, pipelining and '
        + 'cataloging over heterogeneous external sources, normalized into one canonical model with '
        + 'entity resolution and field-level lineage. Multi-tenant PostgreSQL with row-level security '
        + 'over tiered object, relational and key-value storage.'],
      ['Inferring structure', 'A hybrid LLM/expert system at ingest infers structure from previously '
        + 'unseen datasets and generates the data dictionary automatically — so a new source is '
        + 'onboarded rather than integrated.'],
      ['Uncertainty routing', 'Low-confidence records go to human review rather than being '
        + 'asserted — the difference between a system you can run unattended and one that '
        + 'quietly invents a number. Inputs throughout are structured files (CSV, Excel, EDI); '
        + 'there is no document scanning anywhere in this.'],
      ['Making it actionable', 'A signal-detection and ranking layer filters noise into a prioritized '
        + 'action queue covering inventory risk, margin and sales-opportunity exceptions. Every item '
        + 'carries a generated rationale and full source-record provenance, so each recommendation is '
        + 'auditable back to the row it came from.'],
      ['And the agent', 'Shipped an autonomous AI data scientist that produces, consumes and logs its '
        + 'own analyses for clients, plus an AI-native dashboarding framework and the resident agent '
        + 'operating inside it. Directed one engineer and partnered with the CEO on investor pitches '
        + 'and go-to-market.'],
    ],
    tags: ['0→1', 'entity resolution', 'PostgreSQL', 'agentic LLM', 'retail'],
    svg: `<rect width="160" height="90" fill="#0f1014"/>
      <g fill="#1a2029" stroke="#3a4250" stroke-width="1">
        <rect x="10" y="12" width="26" height="12" rx="2"/><rect x="10" y="30" width="26" height="12" rx="2"/>
        <rect x="10" y="48" width="26" height="12" rx="2"/><rect x="10" y="66" width="26" height="12" rx="2"/>
      </g>
      <g fill="none" stroke="#7aa2f7" stroke-width="1.1">
        <path d="M36 18 q26 0 32 27"/><path d="M36 36 q20 0 32 9"/>
        <path d="M36 54 q20 0 32 -9"/><path d="M36 72 q26 0 32 -27"/>
      </g>
      <rect x="68" y="36" width="22" height="18" rx="3" fill="#152a24" stroke="#5fd3a6" stroke-width="1.2"/>
      <path d="M90 45 h12" stroke="#5fd3a6" stroke-width="1.2"/>
      <g fill="#152a24" stroke="#5fd3a6" stroke-width="1">
        <rect x="104" y="24" width="46" height="11" rx="2"/><rect x="104" y="39" width="46" height="11" rx="2"/>
        <rect x="104" y="54" width="46" height="11" rx="2"/>
      </g>
      <g fill="#5fd3a6"><circle cx="110" cy="29.5" r="1.8"/><circle cx="110" cy="44.5" r="1.8"/><circle cx="110" cy="59.5" r="1.8"/></g>`,
  },
  {
    id: 'neohealth',
    client: 'Neo Health',
    role: 'CTO, AI Engineering & Data Science',
    period: '2024 – 2025',
    title: 'An LLM physician that had to be measured, not demoed',
    summary: 'An agentic consumer-health platform reasoning over wearables, sleep, vitals, labs and '
      + 'medical records — with the evaluation discipline that keeps safety-critical output honest.',
    why: 'Safety-critical output needs a rubric, not a vibe check.',
    whyMore: 'Health advice is the case where "it seems good" is not a standard. I built the rubric, '
      + 'the harness and the regression suite before trusting any of it.',
    metrics: [
      ['+10%', 'above OpenAI’s baseline, Certified Nutritionist exam content', 'validated'],
      ['80–90%', 'reduction in nutrition workflow time', 'realized'],
      ['6 engineers', 'hired and led', ''],
    ],
    detail: [
      ['The system', 'An LLM physician and dietitian reasoning over unified personal health data. '
        + 'I owned it end to end on AWS, with GCP for eventing, tracking and BigQuery analytics.'],
      ['Nutrition, end to end', 'Onboarding preference capture, meal planning under food-sensitivity '
        + 'and medical-caution constraints, diet-quality optimization, grocery list generation and '
        + 'automated Instacart fulfillment — cutting nutrition workflows by 80–90%.'],
      ['The evaluation discipline', 'Established the rubric, harness and regression suite, and '
        + 'benchmarked the system at 10% above OpenAI’s baseline on Certified Nutritionist '
        + 'examination content. For safety-critical output this is the work: a number you can defend, '
        + 'not a demo that went well.'],
      ['Guardrails', 'Built the production chatbot reasoning over wearables, sleep, vitals, labs and '
        + 'medical records, with explicit guardrails and escalation paths. Owned recipe curation, '
        + 'generation and image-generation pipelines, tuned jointly for quality, safety and unit cost '
        + 'at scale.'],
      ['The team', 'Hired and led 6 engineers; owned architecture, code review and roadmap.'],
    ],
    tags: ['agentic LLM', 'evaluation harness', 'AWS', 'guardrails', 'health'],
    svg: `<rect width="160" height="90" fill="#0f1014"/>
      <path d="M10 56 h20 l5 -14 l7 26 l6 -32 l6 20 l5 -8 h18" fill="none" stroke="#e2563f" stroke-width="1.6"/>
      <g fill="#1a2029" stroke="#3a4250" stroke-width="1">
        <rect x="96" y="16" width="54" height="14" rx="3"/><rect x="96" y="36" width="54" height="14" rx="3"/>
        <rect x="96" y="56" width="54" height="14" rx="3"/>
      </g>
      <g stroke="#5fd3a6" stroke-width="1.6" stroke-linecap="round" fill="none">
        <path d="M102 23 l3 3 l6 -7"/><path d="M102 43 l3 3 l6 -7"/><path d="M102 63 l3 3 l6 -7"/>
      </g>
      <g stroke="#3a4250" stroke-width=".8"><path d="M118 23 H146"/><path d="M118 43 H140"/><path d="M118 63 H144"/></g>`,
  },
  {
    id: 'aeom',
    client: 'AEOM Investment Advisors',
    role: 'Principal · Registered investment adviser, Series 65',
    period: '2024 – present',
    title: 'A quantitative practice, run unattended against live capital',
    summary: 'A registered advisory firm and the systematic trading system behind it — signal '
      + 'generation, execution, monitoring and risk sizing, plus a raw land fund run with partners.',
    why: 'Performance figures are deliberately absent from this page.',
    whyMore: 'AEOM is a registered investment adviser with outside partner capital, and the SEC '
      + 'Marketing Rule governs performance claims. What is here is the method, not the results.',
    metrics: [
      ['Walk-forward', 'and Monte Carlo backtesting, realistic fills and slippage', ''],
      ['4 regimes', 'volatility classification conditioning positioning', ''],
      ['400+ acres', 'rural land fund, four-investor partnership', ''],
    ],
    detail: [
      ['What it is', 'A registered investment adviser (Series 65) that I run as principal '
        + 'alongside consulting work. It exists partly because a quantitative practice is the '
        + 'honest way to keep the modelling skills sharp — a backtest that is wrong costs you '
        + 'personally, which is a different kind of feedback from a backtest that is wrong in a '
        + 'deck.'],
      ['The trading system', 'A production system running unattended against live capital: signal '
        + 'generation, execution, monitoring and risk sizing. Walk-forward and Monte Carlo '
        + 'backtesting with realistic fills and slippage, a Black-Scholes pricing engine, and a '
        + 'custom backtester underneath it.'],
      ['Measuring it properly', 'Sharpe alone hides the shape of a return stream, so the metric '
        + 'set extends to Sortino and Calmar for asymmetric payoffs, period-consistency testing, '
        + 'and hard per-window drawdown constraints. Volatility-regime classification '
        + '(high/low/rising/falling) conditions the positioning rather than being predicted for '
        + 'its own sake.'],
      ['Portfolio construction', 'Mean-variance optimization and an efficient-frontier core, '
        + 'blended with macro and geopolitical scenario forecasts.'],
      ['The news-sentiment layer', 'Ingests unstructured financial news, extracts entity '
        + 'sentiment, and produces directional signals and a volatility-regime read. The thesis is '
        + 'negative and worth stating plainly: news is a <em>poor primary predictor</em> — '
        + 'backward-looking, highly correlated with price, and much of the corpus written to fill '
        + 'a content quota. It is a useful <em>conditioning</em> layer. The informative extract is '
        + 'cross-source variance: dispersion carries information, agreement is already priced.'],
      ['The land fund', 'Over 400 acres of rural Texas farmland, acquired, lightly developed and '
        + 'resold. Lead partner in a four-investor partnership, with private-equity consulting work '
        + 'in progress alongside it.'],
      ['Why it is on this page', 'Not as a track record — none is claimed or shown. It is here '
        + 'because it is where the applied-mathematics side of the work stays load-bearing, and '
        + 'because a registered entity with outside capital is a disclosable outside business '
        + 'activity. Saying so first is the professional version.'],
    ],
    tags: ['systematic trading', 'portfolio optimization', 'NLP', 'regulated', 'options'],
    svg: `<rect width="160" height="90" fill="#0f1014"/>
      <rect x="34" y="12" width="30" height="66" fill="#1c1510" opacity=".8"/>
      <rect x="96" y="12" width="26" height="66" fill="#1c1510" opacity=".8"/>
      <g fill="#6b5b4c" font-family="ui-monospace,monospace" font-size="5.5">
        <text x="36" y="20">high vol</text><text x="98" y="20">high vol</text>
      </g>
      <path d="M10 56 L22 50 L34 54 L46 34 L58 62 L70 44 L82 40 L94 46 L106 26 L118 58 L130 42 L150 38"
        fill="none" stroke="#7aa2f7" stroke-width="1.5" stroke-linejoin="round"/>
      <g stroke="#3a4250" stroke-width=".8"><path d="M10 78 H150"/><path d="M10 12 V78"/></g>
      <g fill="#5fd3a6"><circle cx="46" cy="34" r="2.6"/><circle cx="106" cy="26" r="2.6"/></g>
      <g fill="#e2563f"><circle cx="58" cy="62" r="2.6"/><circle cx="118" cy="58" r="2.6"/></g>`,
  },
  {
    id: 'amazon',
    client: 'Amazon',
    role: 'Senior Applied Scientist — Fashion Tech & Consumer Electronics Tech',
    period: '2017 – 2023',
    title: 'Personalization at nine- and ten-figure scale',
    summary: 'Led personalization and recommender R&D across Fashion and Consumer Electronics, and '
      + 'founded a tiger team supplying applied science to the whole of Amazon Retail.',
    why: 'The teams that most needed a scientist could not staff one.',
    whyMore: 'So I founded a cross-organizational team that lent science and senior engineering '
      + 'capacity to them — which is a different problem from any single model.',
    metrics: [
      ['+93% CTR', 'gift-giving campaigns, nine-figure seasonal impact', 'realized'],
      ['+25%', 'post-cart conversion, ten-figure impact', 'realized'],
      ['~100', 'interview panels served', ''],
    ],
    detail: [
      ['Fashion', 'Led R&D for fashion personalization using active learning, reinforcement learning '
        + 'and customer preference detection. Directly managed 4 scientists and mentored 4 more '
        + 'through 3× customer base growth and a 20% increase in repeat engagement.'],
      ['Consumer Electronics', 'Led R&D on customer segmentation, product relationship classification '
        + 'and intent quantification using RNN-LSTM sequence models, improving engagement metrics by '
        + '200%. Review sentiment extraction at scale.'],
      ['The tiger team', 'Founded and led a cross-organizational team serving all of Amazon Retail, '
        + 'supplying applied science and senior engineering capacity to teams too small to staff their '
        + 'own. Built ML deployment tooling in the pre-SageMaker era.'],
      ['Recognition', 'CETech Tech Star award — top engineer among roughly 100 peers.'],
    ],
    tags: ['recommenders', 'RNN-LSTM', 'active learning', 'team lead'],
    svg: `<rect width="160" height="90" fill="#0f1014"/>
      <g fill="#1a2029" stroke="#3a4250" stroke-width=".9">
        <rect x="14" y="20" width="22" height="22" rx="3"/><rect x="42" y="20" width="22" height="22" rx="3"/>
        <rect x="70" y="20" width="22" height="22" rx="3"/><rect x="14" y="48" width="22" height="22" rx="3"/>
        <rect x="42" y="48" width="22" height="22" rx="3"/><rect x="70" y="48" width="22" height="22" rx="3"/>
      </g>
      <rect x="42" y="20" width="22" height="22" rx="3" fill="#152a24" stroke="#5fd3a6" stroke-width="1.4"/>
      <rect x="70" y="48" width="22" height="22" rx="3" fill="#152a24" stroke="#5fd3a6" stroke-width="1.4"/>
      <g stroke="#5fd3a6" stroke-width="1.6" fill="none">
        <path d="M104 70 V46"/><path d="M118 70 V34"/><path d="M132 70 V24"/><path d="M146 70 V16"/>
      </g>
      <path d="M100 70 H150" stroke="#3a4250" stroke-width=".9"/>
      <text x="100" y="12" fill="#5fd3a6" font-family="ui-monospace,monospace" font-size="7">+93%</text>`,
  },
  {
    id: 'cvr',
    client: 'CVR Energy',
    role: 'Data Scientist — via Royalty Analytics',
    period: '2008 – 2014',
    title: '$90M out of 40,000 square miles',
    summary: 'Geospatial fleet and logistics optimization across hundreds of vehicles, with '
      + 'forecasting to pre-schedule pickups and prospective well-return data steering the routes.',
    why: 'Routing is not the whole problem — knowing which stops are worth making is.',
    whyMore: 'Prospective well-return data let the optimizer prioritize the most profitable service '
      + 'areas, not just the shortest path between the ones already on the list.',
    metrics: [
      ['$90M+', 'in transportation cost savings', 'realized'],
      ['40,000+', 'square miles of service area', ''],
      ['100s', 'of vehicles dispatched', ''],
    ],
    detail: [
      ['The scale', 'Dispatch across more than 40,000 square miles and hundreds of vehicles — a '
        + 'routing problem large enough that small percentage gains are worth eight figures.'],
      ['Forecasting ahead of the route', 'Predictive forecasting pre-scheduled pickups and dropoffs '
        + 'rather than reacting to them, which is where most of the slack in a fleet actually hides.'],
      ['Prioritizing by return', 'Prospective well-return data fed the optimizer so it prioritized '
        + 'the most profitable service areas. The result was $90M+ in transportation cost savings.'],
      ['The wider engagement', 'Part of a consulting practice serving S&P 500 and startup clients '
        + 'across energy, finance, telecom and cybersecurity — including reinforcement-learning '
        + 'predictive models for high-frequency futures trading at Northfield Trading, user engagement '
        + 'optimization for Time Warner Cable, and Bayesian cybersecurity risk estimation for Dexa '
        + 'Systems.'],
    ],
    tags: ['geospatial', 'optimization', 'forecasting', 'energy'],
    svg: `<rect width="160" height="90" fill="#0f1014"/>
      <path d="M12 76 q24-10 44-4 t38-10 t54 2" fill="none" stroke="#2a3340" stroke-width=".9"/>
      <path d="M12 58 q24-10 44-4 t38-10 t54 2" fill="none" stroke="#2a3340" stroke-width=".9"/>
      <path d="M12 40 q24-10 44-4 t38-10 t54 2" fill="none" stroke="#2a3340" stroke-width=".9"/>
      <path d="M22 70 L48 48 L72 56 L96 32 L126 40 L144 22" fill="none" stroke="#e0a152"
        stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <g fill="#5fd3a6"><circle cx="22" cy="70" r="3"/><circle cx="48" cy="48" r="2.4"/>
        <circle cx="72" cy="56" r="2.4"/><circle cx="96" cy="32" r="2.4"/><circle cx="126" cy="40" r="2.4"/></g>
      <circle cx="144" cy="22" r="3.6" fill="none" stroke="#e2563f" stroke-width="1.6"/>
      <text x="14" y="18" fill="#e0a152" font-family="ui-monospace,monospace" font-size="7">$90M saved</text>`,
  },
  {
    id: 'mercer',
    client: 'Mercer Advisors',
    role: 'Principal Applied AI Architect — via A.Team',
    period: '2024',
    title: 'Ranking 4,000 firms by how likely they are to sell',
    summary: 'Acquisition intelligence over 4,000+ advisory firms: knowledge-graph extraction from '
      + 'regulatory filings, sell-probability forecasting, and a GPT layer filling structured '
      + 'assessments — combined through calibrated ranking.',
    why: 'An LLM answering 21 questions about 4,000 firms has to be checkable.',
    whyMore: 'Calibrated ranking against a human-labeled gold set is what turns a pile of generated '
      + 'answers into a list someone will act on.',
    metrics: [
      ['~2% → ~8%', 'candidate hit rate vs a human-labeled gold set', 'validated'],
      ['4,000+', 'firms assessed', ''],
      ['21 fields', 'structured per entity', ''],
    ],
    detail: [
      ['The task', 'Find which of 4,000+ advisory firms are worth approaching — a question '
        + 'answerable from regulatory filings and public sources, at a volume nobody has time for.'],
      ['The system', 'Knowledge-graph feature extraction from regulatory filings and public sources, '
        + 'sell-probability forecasting, and GPT deployed as a question-answering layer populating a '
        + '21-field assessment per entity.'],
      ['Keeping it honest', 'The three signals were combined through calibrated ranking and validated '
        + 'against a human-labeled gold set — so the output was a ranked list with a known hit rate '
        + 'rather than a generated opinion.'],
      ['The result', 'Candidate hit rate rose from roughly 2% to roughly 8%: a four-fold improvement '
        + 'in how often an approached firm was worth approaching.'],
    ],
    tags: ['LLM extraction', 'knowledge graph', 'calibrated ranking', 'finance'],
    svg: `<rect width="160" height="90" fill="#0f1014"/>
      <g fill="#171b22" stroke="#3a4250" stroke-width=".9">
        <rect x="12" y="14" width="30" height="38" rx="2"/><rect x="18" y="22" width="30" height="38" rx="2"/>
        <rect x="24" y="30" width="30" height="38" rx="2"/>
      </g>
      <g stroke="#3a4250" stroke-width="1.2" stroke-linecap="round">
        <path d="M30 40 H48"/><path d="M30 47 H48"/><path d="M30 54 H42"/>
      </g>
      <path d="M58 48 h10" stroke="#7aa2f7" stroke-width="1.2"/>
      <path d="M68 44 l6 4 -6 4z" fill="#7aa2f7"/>
      <g fill="none" stroke="#5fd3a6" stroke-width="1.1">
        <rect x="80" y="16" width="68" height="9" rx="2"/><rect x="80" y="29" width="68" height="9" rx="2"/>
        <rect x="80" y="42" width="68" height="9" rx="2"/><rect x="80" y="55" width="68" height="9" rx="2"/>
      </g>
      <g fill="#5fd3a6" opacity=".85">
        <rect x="80" y="16" width="52" height="9" rx="2"/><rect x="80" y="29" width="38" height="9" rx="2"/>
        <rect x="80" y="42" width="24" height="9" rx="2"/><rect x="80" y="55" width="14" height="9" rx="2"/>
      </g>
      <text x="80" y="76" fill="#5fd3a6" font-family="ui-monospace,monospace" font-size="7">ranked, calibrated</text>`,
  },
];
