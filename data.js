/* global window */
// ============================================================
// Prompt Gallery — data
// ============================================================

const MODELS = [
  { id: "all",        name: "Hammasi",         glyph: "★",  color: "linear-gradient(135deg,#6366f1,#8b5cf6)" },
  { id: "chatgpt",    name: "ChatGPT",         glyph: "GP", color: "linear-gradient(135deg,#10b981,#06b6d4)" },
  { id: "claude",     name: "Claude",          glyph: "Cl", color: "linear-gradient(135deg,#f59e0b,#f97316)" },
  { id: "gemini",     name: "Gemini",          glyph: "Gm", color: "linear-gradient(135deg,#3b82f6,#8b5cf6)" },
  { id: "midjourney", name: "Midjourney",      glyph: "Mj", color: "linear-gradient(135deg,#0f172a,#475569)" },
  { id: "dalle",      name: "DALL·E",          glyph: "DE", color: "linear-gradient(135deg,#ec4899,#8b5cf6)" },
  { id: "stable",     name: "Stable Diffusion",glyph: "SD", color: "linear-gradient(135deg,#a855f7,#6366f1)" },
  { id: "copilot",    name: "Copilot",         glyph: "Co", color: "linear-gradient(135deg,#0ea5e9,#22d3ee)" },
  { id: "perplexity", name: "Perplexity",      glyph: "Px", color: "linear-gradient(135deg,#14b8a6,#06b6d4)" },
  { id: "llama",      name: "Llama",           glyph: "Lm", color: "linear-gradient(135deg,#1e40af,#3b82f6)" },
  { id: "mistral",    name: "Mistral",         glyph: "Ms", color: "linear-gradient(135deg,#f97316,#ef4444)" },
  { id: "grok",       name: "Grok",            glyph: "Gk", color: "linear-gradient(135deg,#475569,#1e293b)" },
];

// Map model id -> chip emoji (decorative)
const MODEL_EMOJI = {
  chatgpt: "💬", claude: "🪶", gemini: "✦", midjourney: "🎨",
  dalle: "🖼️", stable: "🌀", copilot: "⌨️", perplexity: "🔎",
  llama: "🦙", mistral: "🌬️", grok: "⚡",
};

// Category color palette (pastel)
const CATEGORIES = [
  { id: "all",        name: "Hammasi",            emoji: "✨", bg: "rgba(99,102,241,0.12)",  fg: "#4338ca" },
  { id: "marketing",  name: "Marketing",          emoji: "📣", bg: "rgba(236,72,153,0.12)",  fg: "#9d174d" },
  { id: "dev",        name: "Dasturlash",         emoji: "💻", bg: "rgba(6,182,212,0.14)",   fg: "#0e7490" },
  { id: "content",    name: "Kontent yozish",     emoji: "✍️", bg: "rgba(139,92,246,0.13)",  fg: "#6d28d9" },
  { id: "business",   name: "Biznes",             emoji: "💼", bg: "rgba(30,64,175,0.12)",   fg: "#1e3a8a" },
  { id: "education",  name: "Ta'lim",             emoji: "🎓", bg: "rgba(245,158,11,0.15)",  fg: "#b45309" },
  { id: "design",     name: "Dizayn",             emoji: "🎨", bg: "rgba(244,63,94,0.12)",   fg: "#be123c" },
  { id: "seo",        name: "SEO",                emoji: "🚀", bg: "rgba(16,185,129,0.13)",  fg: "#047857" },
  { id: "social",     name: "Ijtimoiy tarmoqlar", emoji: "📱", bg: "rgba(168,85,247,0.13)",  fg: "#6b21a8" },
  { id: "finance",    name: "Moliya",             emoji: "💰", bg: "rgba(5,150,105,0.13)",   fg: "#065f46" },
  { id: "health",     name: "Sog'liqni saqlash",  emoji: "🩺", bg: "rgba(239,68,68,0.12)",   fg: "#991b1b" },
  { id: "legal",      name: "Huquq",              emoji: "⚖️", bg: "rgba(71,85,105,0.16)",   fg: "#334155" },
  { id: "hr",         name: "HR va ishga yollash",emoji: "🤝", bg: "rgba(217,70,239,0.12)",  fg: "#86198f" },
  { id: "product",    name: "Mahsulot boshqaruvi",emoji: "🧩", bg: "rgba(59,130,246,0.12)",  fg: "#1e40af" },
  { id: "data",       name: "Ma'lumotlar tahlili",emoji: "📊", bg: "rgba(13,148,136,0.14)",  fg: "#115e59" },
  { id: "support",    name: "Mijozlarga xizmat",  emoji: "💬", bg: "rgba(234,88,12,0.13)",   fg: "#9a3412" },
  { id: "personal",   name: "Shaxsiy rivojlanish",emoji: "🌱", bg: "rgba(101,163,13,0.13)",  fg: "#3f6212" },
  { id: "translate",  name: "Tarjima",            emoji: "🌐", bg: "rgba(14,165,233,0.13)",  fg: "#075985" },
  { id: "research",   name: "Ilmiy tadqiqot",     emoji: "🔬", bg: "rgba(124,58,237,0.13)",  fg: "#5b21b6" },
  { id: "startup",    name: "Startaplar",         emoji: "🚀", bg: "rgba(249,115,22,0.13)",  fg: "#9a3412" },
];

// Build a URL that launches the model with the prompt prefilled
function modelLaunchUrl(modelId, prompt) {
  const enc = encodeURIComponent(prompt);
  switch (modelId) {
    case "chatgpt":    return `https://chat.openai.com/?q=${enc}`;
    case "claude":     return `https://claude.ai/new?q=${enc}`;
    case "gemini":     return `https://gemini.google.com/?q=${enc}`;
    case "perplexity": return `https://www.perplexity.ai/search?q=${enc}`;
    case "copilot":    return `https://copilot.microsoft.com/?q=${enc}`;
    case "grok":       return `https://grok.com/?q=${enc}`;
    case "midjourney": return `https://www.midjourney.com/explore`;
    case "dalle":      return `https://labs.openai.com/`;
    case "stable":     return `https://stablediffusionweb.com/`;
    case "llama":      return `https://www.llama.com/`;
    case "mistral":    return `https://chat.mistral.ai/chat`;
    default:           return `https://www.google.com/search?q=${enc}`;
  }
}

// Button label per model
const LAUNCH_LABEL = {
  chatgpt:    "ChatGPT'da sinash",
  claude:     "Claude'da ishlatish",
  gemini:     "Gemini'ga yuborish",
  perplexity: "Perplexity'da izlash",
  copilot:    "Copilot'da ochish",
  grok:       "Grok'da sinash",
  midjourney: "Midjourney'ga o'tish",
  dalle:      "DALL·E'da yaratish",
  stable:     "Stable Diffusion'da",
  llama:      "Llama'da ochish",
  mistral:    "Mistral'da sinash",
};

const PROMPTS = [
  {
    id: 1, model: "chatgpt", category: "marketing",
    title: "Marketing strategiya generatori",
    desc: "Mahsulotingiz uchun to'liq bozorga chiqish strategiyasini tuzib beradi: auditoriya, kanal, KPI va byudjet.",
    prompt: "Act as a senior marketing strategist with 15 years of experience launching B2B and B2C products. I will give you a product or service, and you will create a comprehensive go-to-market strategy including:\n1) Target audience analysis (3 personas with demographics, pains, jobs-to-be-done)\n2) Positioning statement and value proposition canvas\n3) Channel strategy with priority ranking and reasoning\n4) Content calendar for the first 3 months (weekly cadence)\n5) KPI framework with realistic benchmarks\n6) Budget allocation recommendations across paid, organic, and partnerships\n\nStart by asking me about: my product/service, current monthly budget, target market geography, and biggest competitor."
  },
  {
    id: 2, model: "claude", category: "dev",
    title: "Kod tekshiruvchi va optimizator",
    desc: "Kodingizdagi xato, xavfsizlik kamchiliklari va optimallashtirish imkoniyatlarini aniqlaydi.",
    prompt: "You are an expert code reviewer specializing in production systems. I will paste code and you will:\n1) Identify bugs and security vulnerabilities (with severity: critical/high/medium/low)\n2) Suggest performance optimizations with Big-O analysis where relevant\n3) Check for best practices, SOLID principles, and design patterns\n4) Rate code quality 1–10 with specific reasoning across readability, maintainability, performance, and security\n5) Provide the refactored version with inline comments explaining each change\n6) List 3 follow-up questions the author should consider\n\nBe thorough but constructive. If the language or framework is unclear, ask before reviewing."
  },
  {
    id: 3, model: "claude", category: "seo",
    title: "SEO kontent yozuvchi",
    desc: "Kalit so'zlar bilan optimallashtirilgan, FAQ va meta-tavsifli to'liq maqola yozadi.",
    prompt: "Act as an SEO content specialist. Write a comprehensive, SEO-optimized article on [TOPIC]. Include:\n- A compelling H1 title with the primary keyword\n- Meta description (155 characters max)\n- Proper H2/H3 structure with descriptive headings\n- Naturally placed primary keyword + 3 LSI keywords\n- Internal linking suggestions (placeholder anchor texts)\n- A FAQ section (5 Q&As) formatted ready for FAQ schema\n- A call-to-action conclusion\n\nTarget word count: 1500–2000 words. Tone: professional yet conversational. Reading level: 8th grade. After the article, give me 3 alternative title variations for A/B testing."
  },
  {
    id: 4, model: "midjourney", category: "design",
    title: "Brend identifikatsiyasi muddasi",
    desc: "Brendingiz uchun zamonaviy logo va vizual stil bo'yicha Midjourney prompt to'plami.",
    prompt: "minimalist geometric logo for a [BRAND NAME] — [INDUSTRY], symbolic mark combining [CONCEPT 1] and [CONCEPT 2], soft gradient palette, modern sans-serif lockup, vector style, isolated on neutral background, balanced negative space, premium feel, brand identity sheet with monochrome variations --style raw --ar 16:9 --v 6"
  },
  {
    id: 5, model: "gemini", category: "data",
    title: "Ma'lumotlar tahlili yordamchisi",
    desc: "CSV yoki jadval ma'lumotlardan tushunchalar, trendlar va vizualizatsiya tavsiyalarini ajratadi.",
    prompt: "You are a senior data analyst. I will share a dataset (CSV, table, or description). Do the following:\n1) Summarize what the data describes in 2 sentences\n2) List 5 important questions this data can answer\n3) Identify 3 trends or anomalies, supported by specific numbers\n4) Suggest 3 visualizations (chart type + which columns + why)\n5) Flag any data quality issues (missing values, outliers, suspicious patterns)\n6) Recommend the next analysis to run\n\nIf the data lacks context, ask me 2 clarifying questions before proceeding. Use plain language — no jargon unless I ask."
  },
  {
    id: 6, model: "chatgpt", category: "business",
    title: "Biznes-plan ramkasi",
    desc: "Investor uchun tayyor biznes-plan strukturasi: muammo, yechim, bozor, moliya prognozi.",
    prompt: "Act as a startup mentor who has helped 50+ founders raise seed rounds. Help me build a complete one-page business plan for [BUSINESS IDEA]. Cover:\n- Problem statement (who hurts, how much it costs them)\n- Solution and unfair advantage\n- Target market size (TAM/SAM/SOM with credible reasoning)\n- Business model and unit economics (price, CAC, LTV, payback)\n- Go-to-market motion (first 100 customers plan)\n- Competition map with positioning\n- 18-month milestones and capital needed\n- Risks and how I'll mitigate them\n\nBe ruthless about assumptions — push back where my idea is weak."
  },
  {
    id: 7, model: "claude", category: "content",
    title: "LinkedIn post yozuvchisi",
    desc: "Sizning hikoyangizdan jozibali va engagement keltiruvchi LinkedIn post yaratadi.",
    prompt: "You are a LinkedIn ghostwriter who has grown multiple founder accounts past 100k followers. I will give you a rough idea, story, or insight. Transform it into a LinkedIn post that:\n- Opens with a hook in the first 2 lines that earns the click on \"see more\"\n- Uses short paragraphs (1–2 lines) and white space generously\n- Tells a personal story with specific details, numbers, or names\n- Delivers one clear, contrarian takeaway\n- Ends with a question that invites comments\n- Avoids emoji-stuffing, hashtags walls, and corporate jargon\n\nLength: 150–220 words. Give me 3 different versions with different angles."
  },
  {
    id: 8, model: "chatgpt", category: "education",
    title: "Shaxsiy o'qituvchi",
    desc: "Har qanday mavzuni darajangizga moslab, misollar va testlar bilan o'rgatadi.",
    prompt: "You are my personal tutor. I want to learn [TOPIC]. First, ask me:\n1) My current knowledge level (1–10)\n2) My goal (pass an exam, build something, satisfy curiosity)\n3) How much time per day I can spend\n\nThen build a personalized curriculum: 7 lessons, each with a 1-sentence objective, a 3-paragraph explanation using analogies, a worked example, and 3 practice questions with answers hidden until I ask. After each lesson, quiz me with 5 questions and adjust the next lesson's difficulty based on my score. Never move on until I get 4/5 right."
  },
  {
    id: 9, model: "perplexity", category: "research",
    title: "Tadqiqot xulosalovchi",
    desc: "Berilgan mavzu bo'yicha so'nggi ilmiy maqolalar va manbalarni qisqacha sintez qiladi.",
    prompt: "Act as a research analyst. Find the most credible, recent (past 24 months) sources on [TOPIC] and produce a literature synthesis:\n1) State of the field in 3 sentences\n2) 5 key findings with citations and publication dates\n3) Where the consensus is strong vs contested\n4) 2 gaps or open questions the field has not resolved\n5) 3 practical implications for [my context]\n6) Bibliography with links, prioritizing peer-reviewed and primary sources\n\nFlag anything based on a single source or preprint. Distinguish strong evidence from emerging hypotheses."
  },
  {
    id: 10, model: "dalle", category: "design",
    title: "Mahsulot mockup generatori",
    desc: "Mahsulotingiz uchun professional reklama vizuali va illustrativ kompozitsiyalar.",
    prompt: "Editorial product photography of [PRODUCT], floating in soft pastel light, gentle shadow beneath, surrounded by minimalist props that suggest [USE CASE], shot on medium format, shallow depth of field, color palette of cream and dusty rose with one accent color, magazine cover composition, 35mm, ultra crisp focus on product label, generous negative space on left for headline."
  },
  {
    id: 11, model: "copilot", category: "dev",
    title: "Test yozuvchi (TDD)",
    desc: "Funksiyangiz uchun chetga chiqish holatlari va edge case'lar bilan to'liq test to'plamini yaratadi.",
    prompt: "Act as a senior test engineer practicing TDD. I will paste a function signature or specification. Produce a complete test suite that:\n- Covers the happy path with 3+ realistic inputs\n- Covers edge cases: empty input, null/undefined, boundary values, max sizes, negative numbers, unicode, very large strings\n- Covers error paths and expected exceptions\n- Uses parameterized tests where it reduces duplication\n- Names tests with the pattern: should_[expected]_when_[condition]\n- Includes comments where the intent isn't obvious\n\nTarget framework: [Jest / Pytest / JUnit]. Aim for branch coverage, not just line coverage."
  },
  {
    id: 12, model: "claude", category: "legal",
    title: "Shartnoma tahlilchi",
    desc: "Shartnoma matnidan xavfli bandlarni, noaniqliklarni va kerakli o'zgarishlarni ajratadi.",
    prompt: "You are a contract review attorney (informational, not legal advice). I will paste a contract or clause. Produce:\n1) Plain-language summary in 5 bullets\n2) Red flags ranked by risk (high/medium/low) with the exact clause text\n3) Ambiguous terms that could be interpreted against me\n4) Missing protective clauses I would expect for this type of agreement\n5) Suggested redlines with before/after text\n6) Questions to ask the counterparty before signing\n\nAlways end with: \"This is informational only — confirm with a licensed attorney in your jurisdiction.\""
  },
  {
    id: 13, model: "chatgpt", category: "hr",
    title: "Ish e'loni yozuvchisi",
    desc: "Mukammal nomzodlarni jalb qiluvchi, aniq va jozibali ish tavsiflarini yaratadi.",
    prompt: "Act as a senior tech recruiter. Write a job description for [ROLE] at a [STAGE] [INDUSTRY] company. Structure it as:\n- A 2-sentence hook explaining why this role matters now\n- What you'll do (5 outcomes, not tasks)\n- What we're looking for (must-haves vs nice-to-haves clearly separated)\n- What we offer (compensation range, equity if any, real benefits — not platitudes)\n- A 30/60/90 day picture of success\n- An application question that filters for genuine interest\n\nVoice: human, specific, free of clichés like \"rockstar\" or \"work hard play hard.\" Length: under 400 words."
  },
  {
    id: 14, model: "gemini", category: "social",
    title: "Ijtimoiy tarmoq kontent kalendari",
    desc: "30 kunlik Instagram/TikTok kontent rejasi: post g'oyalari, hashtaglar va vaqt jadvali.",
    prompt: "You are a social media strategist for [NICHE]. Build a 30-day content calendar for Instagram and TikTok. For each day, give me:\n- Platform (IG / TikTok / both)\n- Format (reel, carousel, photo, story-only)\n- Hook (the first 3 seconds or first line)\n- Content angle in one sentence\n- 5 relevant hashtags (mix of small/medium/large)\n- Best posting time for [CITY/COUNTRY] audience\n\nRotate across 5 content pillars: educational, behind-the-scenes, social proof, entertaining, promotional (max 1 promo per week). Identify 3 trending audio or formats worth jumping on this month."
  },
  {
    id: 15, model: "claude", category: "support",
    title: "Mijozlar shikoyatlariga javob",
    desc: "Norozi mijozning xabariga professional, empatik va muammoni hal qiluvchi javob yozadi.",
    prompt: "You are a senior customer support lead known for de-escalating tough conversations. I will paste a customer complaint or angry message. Draft a reply that:\n1) Acknowledges their feeling specifically (not generic \"sorry for the inconvenience\")\n2) Takes responsibility where appropriate, without over-apologizing\n3) Explains what actually happened in plain language\n4) Offers a concrete remedy with a timeline\n5) Includes one human touch — a name, a small gesture, an honest aside\n6) Closes with a single clear next step\n\nKeep it under 150 words. Avoid corporate phrases. Then give me a one-line internal note to the team about what to fix so this stops happening."
  },
  {
    id: 16, model: "mistral", category: "translate",
    title: "Kontekstli tarjimon",
    desc: "Matnni nafaqat tarjima qiladi, balki madaniy nuanslar va stilni ham hisobga oladi.",
    prompt: "Act as a professional translator and cultural consultant. I will give you text in [SOURCE LANGUAGE] to translate into [TARGET LANGUAGE]. Produce:\n1) A literal translation\n2) A natural, native-sounding translation (the one I should actually use)\n3) 2–3 notes on cultural or contextual nuances (idioms, register, false friends, things that don't carry across)\n4) An alternative version in a different register (formal vs casual) if relevant\n5) Any words that don't have a perfect equivalent, with the closest options and tradeoffs\n\nAsk about audience and tone before translating anything longer than 50 words."
  },
  {
    id: 17, model: "chatgpt", category: "personal",
    title: "Kunlik refleksiya yordamchisi",
    desc: "Kunlik yutuq va muammolaringizni tahlil qilib, o'sish uchun maqsadli savollar beradi.",
    prompt: "You are my reflective coach. Every evening I will share a quick brain-dump about my day. Respond with:\n1) A one-sentence reflection of what you heard (so I feel listened to)\n2) Two patterns you notice across recent entries (energy, blockers, wins)\n3) One question that will be uncomfortable but useful for me to sit with\n4) One small experiment to try tomorrow (specific, takes under 15 minutes)\n5) A short, sincere closing — no toxic positivity\n\nNever moralize. Never repeat the same question two days in a row. Remember context I share so we build over time."
  },
  {
    id: 18, model: "perplexity", category: "finance",
    title: "Investitsiya tadqiqotchisi",
    desc: "Kompaniya yoki sektor bo'yicha asoslangan moliyaviy tahlil va hisobotlar tayyorlaydi.",
    prompt: "Act as an equity research analyst (educational use, not financial advice). Research [COMPANY or SECTOR] and produce a brief:\n1) Business model in 3 sentences — how they actually make money\n2) Recent financials: revenue growth, gross margin, operating margin, cash position (cite filings)\n3) Top 3 tailwinds and top 3 risks (with sources)\n4) Competitive moat assessment — strong/medium/weak with reasoning\n5) Valuation context vs comparables (multiples, with caveats)\n6) Bull case and bear case in 2 paragraphs each\n7) 3 things to watch in the next earnings call\n\nUse only sources from the past 12 months. End with \"Not investment advice.\""
  },
  {
    id: 19, model: "stable", category: "design",
    title: "Veb-sayt fon vizuali",
    desc: "Hero seksiyangiz uchun zamonaviy abstrakt yoki fotorealistik fon yaratadi.",
    prompt: "abstract liquid glass composition, flowing translucent layers in soft sapphire blue, lavender, and mint, gentle light refraction, frosted glass texture, pastel highlights, organic curves, photoreal materials, soft studio lighting, high-end editorial aesthetic, ultra detailed, 8k, negative space on the right side for typography, ambient occlusion, subsurface scattering"
  },
  {
    id: 20, model: "chatgpt", category: "product",
    title: "Mahsulot PRD yozuvchisi",
    desc: "Yangi xususiyat uchun to'liq mahsulot talablari hujjati: muammo, foydalanuvchi voqealari, metrikalar.",
    prompt: "Act as a senior product manager. Write a one-page PRD for [FEATURE]. Sections:\n1) Problem — who, what pain, evidence (research, support tickets, data)\n2) Goal — what success looks like in measurable terms\n3) Non-goals — what we are explicitly not solving\n4) Users and use cases — 3 user stories in \"As a X, I want Y, so that Z\" format\n5) Solution overview — the smallest version that delivers value\n6) Detailed requirements — UI states, edge cases, empty states, error handling\n7) Metrics — leading and lagging indicators\n8) Risks and open questions\n9) Rollout plan — alpha → beta → GA with gates\n\nKeep it under 800 words. Push back if my goal is fuzzy or unmeasurable."
  },
  {
    id: 21, model: "claude", category: "startup",
    title: "Pitch deck strukturalovchi",
    desc: "Investorlar uchun ishonchli va aniq 10 slaydli pitch deck strukturasini yaratadi.",
    prompt: "You are a pitch coach who has prepared founders for top accelerators. Help me build a 10-slide seed pitch deck for [STARTUP]. For each slide:\n- The slide's job (what it must accomplish in 20 seconds)\n- Headline I should put on the slide\n- 3 supporting points with specific phrasing\n- The visual or chart that belongs there\n- A trap or weak phrasing to avoid\n\nSlides: 1) Vision 2) Problem 3) Solution 4) Why now 5) Market size 6) Product 7) Traction 8) Business model 9) Team 10) Ask. Then write the 60-second verbal pitch I'd give before showing slide 1."
  },
  {
    id: 22, model: "claude", category: "health",
    title: "Sog'liq odatlari murabbiyi",
    desc: "Sizning hayot tarzingizni hisobga olgan holda barqaror sog'liq odatlarini quradi.",
    prompt: "You are a behavior-change health coach (informational, not medical advice). Ask me about: my current sleep, movement, nutrition, stress, age range, and one health goal. Then design a 4-week habit plan that:\n1) Starts with one keystone habit, not a full overhaul\n2) Uses habit stacking with my existing routines\n3) Includes the minimum viable version for tough days (\"never miss twice\" rule)\n4) Adds one new habit per week only if the previous one stuck\n5) Tracks progress with a weekly 3-question check-in\n6) Names common failure modes and the if-then plan for each\n\nAlways recommend consulting a doctor for medical concerns."
  },
];

window.MODELS = MODELS;
window.MODEL_EMOJI = MODEL_EMOJI;
window.CATEGORIES = CATEGORIES;
window.PROMPTS = PROMPTS;
window.modelLaunchUrl = modelLaunchUrl;
window.LAUNCH_LABEL = LAUNCH_LABEL;

// ============================================================
// LESSONS (Prompt School)
// ============================================================
const LESSONS = [
  {
    id: 1, level: "beginner",
    title: "Prompt nima va u qanday ishlaydi?",
    desc: "AI bilan muloqotning asoslari: prompt nima, qanday tuziladi va nima uchun u natijaga ta'sir qiladi.",
    minutes: 5,
    body: [
      { type: "p", text: "Prompt — bu siz sun'iy intellekt modeliga beradigan ko'rsatma yoki savol. U shunchaki gap emas, balki AI uchun aniq vazifa qo'yuvchi struktura. Yaxshi prompt — modelga «nima qilish kerakligini» emas, «qanday qilib, qanday natija ko'rinishida va qaysi auditoriya uchun» qilish kerakligini aytib beradi." },
      { type: "p", text: "Til modellari ehtimollik bilan ishlaydi: ular siz bergan matnga eng mos keladigan davomni topishga harakat qiladi. Shuning uchun promptdagi har bir so'z — model qaysi yo'nalishda javob berishini hal qiladi. Aniq, batafsil va kontekst bilan to'ldirilgan prompt — har doim umumiy savoldan ko'ra ko'p marotaba sifatli javob beradi." },
      { type: "h4", text: "Oddiy va kuchli prompt farqi" },
      { type: "ex", text: "❌ Yomon: «Maqola yoz»\n✅ Yaxshi: «Sen tajribali kontent strateg sifatida ishlaydigan mualifsan. O'zbek tilida, kichik biznes egalari uchun, AI dan marketingda foydalanish haqida 800 so'zli maqola yoz. 3 ta amaliy misol qo'sh.»" },
      { type: "p", text: "Ko'ryapsizmi — ikkinchi promptda rol, auditoriya, mavzu, til, hajm va format aniq berilgan. Aynan shu farq mutaxassis darajadagi natija va o'rtacha natija o'rtasidagi farqdir." }
    ]
  },
  {
    id: 2, level: "beginner",
    title: "Samarali prompt yozish qoidalari",
    desc: "5 ta tamoyil: aniqlik, kontekst, rol, format, misollar. Har biri amaliy misol bilan.",
    minutes: 7,
    body: [
      { type: "p", text: "Samarali promptlar tasodifan tug'ilmaydi — ular besh tamoyilga asoslanadi: aniqlik, kontekst, rol, format va misollar. Bu tamoyillar har qanday model (ChatGPT, Claude, Gemini) bilan ishlaydi va sizning natijalaringizni darhol ikki-uch barobar yaxshilaydi." },
      { type: "h4", text: "1. Aniqlik" },
      { type: "p", text: "Modelga aniq nima kerakligini ayting. «Yaxshi maqola» — yomon. «800 so'z, ilmiy uslubda, 3 ta manba bilan» — yaxshi. Mavhum so'zlardan qoching." },
      { type: "h4", text: "2. Kontekst" },
      { type: "p", text: "Model sizning vaziyatingizni bilmaydi. Auditoriya, maqsad va cheklovlarni ayting: «Mening mijozlarim — Toshkentdagi 25-35 yoshli ofis xodimlari». Kontekst qanchalik aniq bo'lsa, javob shunchalik moslangan bo'ladi." },
      { type: "h4", text: "3. Rol" },
      { type: "ex", text: "«Sen 10 yillik tajribaga ega moliya maslahatchisisan...» — bu modelga uslub, lug'at va chuqurlik darajasini beradi." },
      { type: "h4", text: "4. Format" },
      { type: "p", text: "Javob qanday ko'rinishda kerakligini ayting: jadval, ro'yxat, kod, JSON, 5 paragraf, 3 ta variant. Aks holda, model o'zi xohlaganini chiqaradi." },
      { type: "h4", text: "5. Misollar (Few-shot)" },
      { type: "p", text: "Agar siz aniq uslubda yoki strukturada javob istasangiz — 1-2 ta misol bering. Bu eng kuchli texnikalardan biri." }
    ]
  },
  {
    id: 3, level: "beginner",
    title: "Rol berish texnikasi (Role Prompting)",
    desc: "AI ga aniq rol berish nima uchun javob sifatini ikki barobar oshiradi.",
    minutes: 6,
    body: [
      { type: "p", text: "Rol berish — promptingdagi eng oddiy, lekin eng kuchli texnika. Modelga «Sen kim ekanligingni» aytsangiz, u o'sha rolga mos uslub, lug'at, chuqurlik va hatto ehtiyotkorlik darajasini qabul qiladi. «Sen senior dasturchisan» va «Sen boshlovchi blogersan» — ikki butunlay boshqa javob beradi, hatto bir xil savolga." },
      { type: "p", text: "Yaxshi rol — uchta elementdan iborat: kasb, tajriba darajasi va ixtisoslashuv. «Sen marketolog» — yomon. «Sen 12 yillik tajribaga ega, B2B SaaS startaplarda ishlagan o'sish marketing maslahatchisi» — a'lo." },
      { type: "h4", text: "Amaliy misol" },
      { type: "ex", text: "Sen Google'da 8 yil ishlagan, hozir freelancer SEO mutaxassisisan. Sening uslubing — sodda, raqamlar bilan asoslangan, har doim aniq amaliy maslahat berasan. Mendan kelgan har qanday savolga shu rolda javob ber." },
      { type: "p", text: "Rolni promptning birinchi qismida bering, keyin vazifani qo'ying. Bir nechta rol birlashtirish ham mumkin: «Sen ham marketolog, ham copywritersan». Lekin oshirib yubormang — 2 ta rol cheklov sifatida yetarli." }
    ]
  },
  {
    id: 4, level: "intermediate",
    title: "Chain-of-Thought: bosqichma-bosqich fikrlash",
    desc: "Modelni murakkab masalani bosqichlarga bo'lib hal qilishga undash texnikasi.",
    minutes: 8,
    body: [
      { type: "p", text: "Chain-of-Thought (CoT) — modeldan o'z fikrlash jarayonini ovoz chiqarib aytishni so'rash. Bu, ayniqsa matematik, mantiqiy va ko'p bosqichli masalalarda, javob aniqligini sezilarli darajada oshiradi. Tadqiqotlar ko'rsatadiki, CoT promptlar oddiy promptlarga qaraganda 20-40% gacha aniqroq natija beradi." },
      { type: "h4", text: "Asosiy fraza" },
      { type: "ex", text: "«Avval bosqichma-bosqich o'ylab ko'r, keyin yakuniy javobni ber.»\nyoki ingliz tilida: «Let's think step by step.»" },
      { type: "p", text: "Bu oddiy ko'rsatma model ichida butun fikrlash zanjirini ochib beradi — taxminlar, hisob-kitoblar, alternativ variantlar va xatolarni tekshirish. Siz nafaqat javobni ko'rasiz, balki uning qanday kelganini ham tushunasiz." },
      { type: "h4", text: "Kengaytirilgan versiya" },
      { type: "p", text: "Murakkab masalalar uchun CoT ni aniqroq strukturalashga arziydi: «1) Muammoning asosiy komponentlarini ajrat. 2) Har bir komponentni alohida hal qil. 3) Yechimlarni birlashtir. 4) Natijani tekshir va o'zingga 2 ta tanqidiy savol ber.»" },
      { type: "p", text: "CoT ayniqsa biznes qarorlari, kod debugging, huquqiy tahlil va strategik rejalashtirishda foydali. Lekin oddiy ijodiy vazifalarda (she'r, slogan) u javobni keraksiz uzaytirishi mumkin." }
    ]
  },
  {
    id: 5, level: "intermediate",
    title: "Few-Shot va One-Shot texnikalari",
    desc: "Modelga 1-3 ta misol berib, kerakli uslub yoki strukturani aniq o'rgatish.",
    minutes: 7,
    body: [
      { type: "p", text: "Few-shot — modelga vazifani bajarish uchun bir nechta misol ko'rsatish. One-shot — bitta misol. Zero-shot — umuman misolsiz. Misollar bilan model sizning kutgan formatingiz, uslubingiz va sifat darajangizni darhol tushunadi — buni hech qanday tushuntirish bera olmaydi." },
      { type: "h4", text: "Few-shot prompt strukturasi" },
      { type: "ex", text: "Vazifa: Mahsulot tavsifini reklama sarlavhasiga aylantir.\n\nMisol 1:\nKirish: Aqlli soat, 7 kun batareya\nChiqish: «Bir martalik zaryadda butun haftangiz»\n\nMisol 2:\nKirish: Ekologik sumka, qayta ishlangan materialdan\nChiqish: «Plastik o'tmishda qoldi»\n\nEndi sen yaratasan:\nKirish: [SIZNING MAHSULOTINGIZ]" },
      { type: "p", text: "E'tibor bering — misollar to'g'ridan-to'g'ri vazifani ko'rsatadi. Model «namuna» orqali o'rganadi va xuddi shu uslubda yangi natija beradi. Bu — har qanday tushuntirishdan kuchliroq." },
      { type: "h4", text: "Qachon ishlatish kerak?" },
      { type: "p", text: "Few-shot ayniqsa ijodiy kontent (sarlavhalar, sloganlar, postlar), tasniflash (sentiment, kategoriya), aniq formatda chiqarish (JSON, jadval) va o'ziga xos uslub kerak bo'lganda foydali. 3-5 ta misol — odatda etarli; ko'p bo'lsa, kontekst oynasini behuda sarflaysiz." }
    ]
  },
  {
    id: 6, level: "intermediate",
    title: "Murakkab vazifalar uchun prompt arxitekturasi",
    desc: "Katta promptlarni strukturali bo'limlarga ajratish va aniq direktivalar berish.",
    minutes: 9,
    body: [
      { type: "p", text: "Murakkab vazifa — bu bir vaqtning o'zida bir nechta talab, format va shartlarni o'z ichiga olgan promptdir. Bunday holatlarda «hammasini bir paragrafda yozish» — eng katta xato. Buning o'rniga promptni aniq bo'limlarga ajratish kerak: KONTEKST, ROL, VAZIFA, FORMAT, CHEKLOVLAR, MISOL." },
      { type: "h4", text: "Universal struktura" },
      { type: "ex", text: "# ROL\nSen — [aniq rol].\n\n# KONTEKST\n[Vaziyat, auditoriya, maqsad]\n\n# VAZIFA\n[Aniq nima qilish kerak]\n\n# FORMAT\n[Javob strukturasi, uzunligi]\n\n# CHEKLOVLAR\n- [Cheklov 1]\n- [Cheklov 2]\n\n# MISOL (ixtiyoriy)\n[Few-shot misol]\n\n# KIRISH\n[Foydalanuvchi inputi]" },
      { type: "p", text: "Bu struktura barcha zamonaviy modellar uchun ishlaydi — Claude markdown sarlavhalarini ayniqsa yaxshi tushunadi, ChatGPT esa XML-uslubdagi teglarni (<role>, <task>) tanish bilan ajratadi. Asosiysi — ajratish va aniqlik." },
      { type: "h4", text: "Direktivalarni kuchaytirish" },
      { type: "p", text: "«Iltimos» — modelga taysir qilmaydi. Lekin «MUHIM», «MAJBURIY», «HECH QACHON» kabi kuchli direktivalar — qilish kerak. Cheklovlarni quyi harfda emas, kapital harflar bilan yozish ham e'tiborni jamlaydi." }
    ]
  },
  {
    id: 7, level: "advanced",
    title: "Turli AI modellar uchun prompt optimallashtirish",
    desc: "ChatGPT, Claude va Gemini bir xil promptga qanday turli javob beradi va qachon qaysi modelni tanlash.",
    minutes: 10,
    body: [
      { type: "p", text: "Har bir model — o'zining «shaxsiyatiga» ega. Bir xil promptni ChatGPT, Claude va Geminiga bersangiz — uchta turli javob olasiz. Mutaxassis darajada ishlash uchun har bir modelning kuchli va zaif tomonlarini bilish va promptingizni shu modelga moslashtirish kerak." },
      { type: "h4", text: "ChatGPT" },
      { type: "p", text: "Tezkor, ko'p tilli, ijodiy. Kreativ vazifalar, brainstorming, marketing kontentida kuchli. Tuzilishi aniq bo'lgan markdown-promptlarni yaxshi tushunadi. Lekin ba'zan o'zining mantiqiy zanjirida noaniqliklarga yo'l qo'yadi — shuning uchun unga «o'zingni tekshir» topshirig'i berish foydali." },
      { type: "h4", text: "Claude" },
      { type: "p", text: "Uzun matn va murakkab analizda eng kuchli. XML-uslubdagi teglarni (<instructions>, <example>) ayniqsa yaxshi ishlaydi. Etika va xavfsizlikka katta e'tibor — ba'zi mavzularda ehtiyotkorroq. Huquqiy, ilmiy va boshqaruv hujjatlarida tanlov №1." },
      { type: "h4", text: "Gemini" },
      { type: "p", text: "Google ekotizimi bilan chuqur integratsiya. Real vaqtdagi ma'lumot, multimodal vazifalar (matn + rasm), va matematik-mantiqiy savollarda kuchli. Strukturalangan formatlarni (jadval, JSON) toza chiqaradi." },
      { type: "p", text: "Maslahat: bitta muhim vazifani 2-3 modelga bering va javoblarni solishtiring. Eng yaxshi javob — odatda bittasi emas, ularning kombinatsiyasi." }
    ]
  },
  {
    id: 8, level: "advanced",
    title: "Prompt Chaining va avtomatlashtirish",
    desc: "Bir necha promptni ketma-ket bog'lab, murakkab ish jarayonlarini avtomatlashtirish.",
    minutes: 11,
    body: [
      { type: "p", text: "Prompt chaining — bitta katta vazifani bir nechta kichik, ketma-ket promptlarga bo'lib, ularning chiqishi keyingisining kirishi bo'lib xizmat qilishi. Bu — har bir bosqichni alohida nazorat qilish, xatolarni erta tutib olish va sifatni keskin oshirish imkonini beradi." },
      { type: "h4", text: "Klassik misol: kontent ishlab chiqarish zanjiri" },
      { type: "ex", text: "1-prompt: Mavzu bo'yicha 10 ta sarlavha taklif qil.\n↓\n2-prompt: Eng yaxshi sarlavhani tanla va asoslan.\n↓\n3-prompt: Tanlangan sarlavha uchun batafsil reja tuz.\n↓\n4-prompt: Rejaga asosan to'liq maqolani yoz.\n↓\n5-prompt: Maqolani SEO va o'qish qulayligi uchun tahrirla." },
      { type: "p", text: "Har bir bosqichda siz natijani ko'rib chiqasiz, kerak bo'lsa tuzatasiz va keyingisiga o'tasiz. Bu — bitta katta «hammasini birga» promptdan ko'ra muqarrar yaxshi ishlaydi, chunki model har bir bosqichda butun e'tiborini bitta vazifaga qaratadi." },
      { type: "h4", text: "Avtomatlashtirish vositalari" },
      { type: "p", text: "Zanjirlarni qo'lda emas, avtomatik bajarish uchun: Make.com, Zapier, n8n, LangChain, va native API integratsiyalari. Ularda har bir bosqich — alohida «modul», va siz butun ish jarayonini bir marotaba qurib, doimiy ravishda ishlatishingiz mumkin." },
      { type: "p", text: "Prompt chaining mahorat darajasidir — bu sizni «AI dan foydalanuvchidan» «AI bilan birga ishlovchi mutaxassisga» aylantiradi. Kichikdan boshlang: 2-3 bosqichlik zanjir bilan tajriba o'tkazing." }
    ]
  }
];

window.LESSONS = LESSONS;

// ============================================================
// BLOG POSTS
// ============================================================
const BLOG_POSTS = [
  {
    id: 1, category: "marketing", featured: true,
    title: "ChatGPT yordamida 1 soatda marketing reja tuzish",
    excerpt: "Mahalliy biznes egasi sifatida butun strategiyani bir kun emas, bir soatda tayyorlash usulini ko'rib chiqamiz. Real misol va shablonlar bilan.",
    author: "Aziz Karimov", date: "12 May 2026", minutes: 8,
    cover: { from: "#a5b4fc", to: "#f9a8d4", glyphs: "📣" },
    body: [
      "Marketing reja — har qanday biznesning yuragi. Lekin haqiqat shundaki, kichik biznes egalarining 70%i marketing rejasiz ishlaydi, sababi — uni tayyorlash haftalab vaqt oladi. ChatGPT bilan bu jarayonni bir soatga qisqartirish mumkin, va natija — kasbiy konsalting darajasida.",
      "Birinchi bosqich — modelga aniq rol va kontekst berish. \"Sen 15 yillik tajribaga ega marketing strategsan, O'zbekistondagi kichik biznes bilan ishlaganmisan. Mening mahsulotim — Toshkentdagi qahvaxona, oylik aylanmasi 80 million so'm, raqobatchilar — Coffee Way va Eshak Coffee.\" Shu darajadagi aniqlik javob sifatini darhol uch barobarga oshiradi.",
      "Ikkinchi bosqich — promptni 5 ta bo'limga ajratish: maqsadli auditoriya (3 ta persona), pozitsiyalash bayonoti, kanallar strategiyasi (har biri uchun ROI baholash bilan), 3 oylik kontent kalendari va KPI tizimi. Har bir bo'limni alohida sorov qiling — bu chain prompting deyiladi va u butun rejani bir promptda so'rashdan ancha yaxshi natija beradi.",
      "Uchinchi bosqich — natijani tahrirlash. AI taklif qilgan har bir g'oyani sizning mahalliy konteksitingizga moslashtiring: Toshkentdagi Instagram trendi Yevropa trendidan farq qiladi, byudjet narxlari boshqacha, raqobat dinamikasi o'ziga xos. Model — yordamchi, lekin yakuniy qaror sizniki.",
      "Natijada — bir soatda professional darajadagi 12 sahifalik marketing strategiya. Bu shablonlar va konsultatsiyalardan kuchli, chunki u aynan sizning biznesingizga moslashtirilgan."
    ]
  },
  {
    id: 2, category: "research", featured: false,
    title: "Claude bilan murakkab hujjatlarni tahlil qilish",
    excerpt: "100+ sahifalik shartnomalar, tadqiqot maqolalari va moliyaviy hisobotlarni tezkor o'qish texnikasi.",
    author: "Madina Yusupova", date: "8 May 2026", minutes: 6,
    cover: { from: "#fde68a", to: "#fca5a5", glyphs: "📄" },
    body: [
      "Claude — uzun matnli hujjatlar uchun yaratilgan eng kuchli model. U 200 ming tokendan ortiq kontekstni hazm qiladi — bu taxminan 500 sahifalik kitobga teng. Bu xususiyatdan to'g'ri foydalanish — har kunlik ish vaqtingizni sezilarli qisqartiradi.",
      "Birinchi qoida — Claude ga hujjatni «o'qib chiq» demang. Aniq vazifalar bering: «Ushbu shartnomada men uchun risk keltirishi mumkin bo'lgan 5 ta band ajrat, ularning aniq matnini ko'chir va har biri uchun nima uchun xavfli ekanligini tushuntir.» Aniqlik — sifat manbai.",
      "Ikkinchi qoida — chiqishni strukturalashga so'rang. JSON, jadval yoki aniq nomli bo'limlar. Mavhum «xulosa» o'rniga: «1) Asosiy g'oyalar (5 ta bullet), 2) Asoslar (qaysi sahifa, qaysi paragraf), 3) Mening pozitsiyam uchun foydalanish mumkin bo'lgan 3 ta argument.»",
      "Uchinchi qoida — Claude ning iqtibos qilish qobiliyatidan foydalaning. Har bir xulosani manba bilan asoslashga buyuring: «Har bir tasdiq uchun aniq paragrafni ko'chir.» Bu sizga keyinchalik tezkor tekshirish imkonini beradi va AI gallyutsinatsiyalaridan himoya qiladi."
    ]
  },
  {
    id: 3, category: "design", featured: false,
    title: "Midjourney: brendingiz uchun vizual kontent",
    excerpt: "Logotipdan tortib reklama bannerigacha — professional dizayner bo'lmasdan ham yuqori sifatli vizuallar.",
    author: "Bobur Rashidov", date: "5 May 2026", minutes: 7,
    cover: { from: "#c4b5fd", to: "#a5f3fc", glyphs: "🎨" },
    body: [
      "Midjourney bilan yaxshi natijaga erishish — bu rasm chizish emas, balki to'g'ri prompt yozish san'atidir. Yangi boshlovchilar odatda «logo qahvaxona uchun» kabi qisqa promptlar yozadi va natijadan hafsalasi pir bo'ladi. Mutaxassislar esa har bir prompt'ga 5 ta element kiritadi: subyekt, uslub, kompozitsiya, yorug'lik va texnik parametrlar.",
      "Brending uchun ishlatishda eng muhim — uslub izchilligi. Bu uchun «style reference» (--sref) parametri yaratilgan — siz bitta tasvirning uslubini saqlab, butun seriya tasvirlar yarata olasiz. Bu — Instagram'dagi yagona vizual tilni saqlash uchun ajoyib vosita.",
      "Logo uchun esa boshqacha yondashuv kerak: «minimalist geometric logo, single color, vector style, isolated on white, balanced negative space». Murakkab fonlarni va realistik effektlarni qo'shmang — bu logoning ko'lamlanish va bosib chiqarish qobiliyatini buzadi.",
      "Va eng muhimi — Midjourney natijasi har doim asl emas. Yakuniy variant uchun siz uni Figma yoki Illustrator'da qayta ishlab chiqishingiz, vektorga aylantirishingiz va brendinggizning yagona uslubiga moslashtirishingiz kerak. AI — bu boshlang'ich nuqta, ish tugashi emas."
    ]
  },
  {
    id: 4, category: "startup", featured: false,
    title: "AI yordamida startap biznes-plan tayyorlash",
    excerpt: "Investorlar uchun ishonchli biznes-rejani tayyorlashning bosqichma-bosqich uslubi.",
    author: "Sardor Toshmatov", date: "2 May 2026", minutes: 9,
    cover: { from: "#86efac", to: "#67e8f9", glyphs: "🚀" },
    body: [
      "Biznes-reja — bu hujjat emas, balki sizning fikrlash mashqlaringizning natijasi. AI ni «menga biznes-reja yoz» deb so'rasangiz — siz noshafqat, ammo o'rtacha hujjat olasiz. Lekin AI'ni qarama-qarshi pozitsiyaga qo'ying — siz haqiqiy farqni ko'rasiz.",
      "Eng yaxshi yondashuv — modeldan «devil's advocate» bo'lishni so'rash. «Mening startap g'oyam: [tafsilot]. Sen tajribali venture capitalist'san. Mening g'oyamdagi 10 ta eng zaif joyni ayt va har biriga real misol bilan asoslan.» Bu — sizning g'oyangizni ko'p oyga oldindan rivojlantiradi.",
      "Ikkinchi bosqich — bozor hajmini hisoblash. TAM / SAM / SOM — har bir investor qadar tushunadigan tushunchalar. AI ga: «O'zbekistondagi onlayn ta'lim bozorining TAM, SAM va SOM ni 2025-yil ma'lumotlari asosida hisobla. Har bir raqamni manbalar bilan asoslan va metodologiyani tushuntir.»",
      "Uchinchi bosqich — birlik iqtisodiyoti (unit economics). Investorlar yutuqlar emas, CAC va LTV ratio'ni ko'rishadi. AI ga sizning mahsulotingiz uchun real ko'rsatkichlarni hisoblashga va sektoringizdagi benchmarklar bilan solishtirishga buyuring.",
      "Va eng muhimi — AI yaratgan biznes-rejani DO'STINGIZ EMAS, DUSHMANINGIZ sifatida tahrir qiling. Har bir taxminga shubha bilan qarang. Bu — sizni nafaqat yaxshi hujjat, balki kuchli founderga aylantiradi."
    ]
  },
  {
    id: 5, category: "dev", featured: false,
    title: "Dasturchilar uchun Copilot: 5 baravar tezroq kod",
    excerpt: "Boilerplate, testlar va refaktoringdan qutuling — diqqatni murakkab masalalarga qaratish.",
    author: "Jasur Akmalov", date: "28 Aprel 2026", minutes: 8,
    cover: { from: "#7dd3fc", to: "#c4b5fd", glyphs: "💻" },
    body: [
      "Copilot va o'xshash AI yordamchilar — dasturchilar uchun klaviatura bilan bog'liq mehnatni 70-80% ga qisqartiradi. Lekin haqiqiy tezlik — kod yozishda emas, balki nima yozish kerakligini hal qilishda. Bu yerda sizning rolingiz o'zgaradi: yozuvchidan rejalashtirivchi va kod-reviewer'ga.",
      "Birinchi qoida — funksiya nomini va doc-string'ni avval yozing. Copilot avtomatik to'g'ri implementatsiyani taklif qiladi. \"// Returns the user's first transaction in the last 30 days, sorted by date\" — bu yaxshi nom yozishdan ko'ra ko'p marotaba kuchliroq signal.",
      "Ikkinchi qoida — testlar uchun foydalaning. Funksiyangizni yozganingizdan keyin: \"// Tests for this function, covering happy path, empty input, null, and boundary cases\". Copilot 5-10 test holatini yaratadi. Siz ularni tekshirib, kerakli joylarni tahrirlaysiz — bu tezroq va sifatliroq.",
      "Uchinchi qoida — refaktoring uchun. Eski, murakkab funksiyani belgilang va sharhda yozing: \"// Refactor this to use early returns, extract helpers, and improve readability\". Natija — toza kod, sizni soatlab fikrlashdan qutqaradi.",
      "Lekin AI ni KO'R-KO'RONA ishonmang. Har bir qabul qilgan kodingizni ko'rib chiqing. AI ba'zan «kelishadigan ko'rinishda noto'g'ri» kod yozadi — bu inson xatolaridan ko'ra xavfliroq. Tekshirish — sizning ishingiz."
    ]
  },
  {
    id: 6, category: "seo", featured: false,
    title: "SEO strategiyasini AI bilan avtomatlashtirish",
    excerpt: "Kalit so'z tadqiqotidan tortib content optimizatsiyasigacha — to'liq AI-asoslangan SEO ish oqimi.",
    author: "Diyora Saidova", date: "25 Aprel 2026", minutes: 7,
    cover: { from: "#fbcfe8", to: "#fde68a", glyphs: "🔎" },
    body: [
      "SEO — bu oyiga 200 soatlik mehnatdan iborat marafon. AI bu marafonni 50 soatga qisqartirish imkonini beradi — bu o'rtacha SEO mutaxassisining kunlik 4-5 soatga ishlash o'rniga 1-2 soat ishlashi degani. Lekin shartlar bor: AI ni to'g'ri ishlatish kerak.",
      "Birinchi bosqich — kalit so'z tadqiqoti. AI ga: \"Mening sayt — Toshkentdagi ingliz tili kurslari. 30 ta long-tail kalit so'zlar bering, har biri uchun: oylik qidiruv hajmi (taxminiy), raqobat darajasi, va kontent g'oyasi.\" Ahrefs yoki Semrush'ni almashtirmaydi, lekin tezkor brainstorming uchun kuchli.",
      "Ikkinchi bosqich — content qisqalik (content brief) yaratish. Har bir maqolangiz uchun: target kalit so'z, LSI kalit so'zlar, H2/H3 strukturasi, ichki link rejasi, FAQ savollari, va meta-tavsif. AI buni 5 minutda qiladi, qo'lda — 1 soatga ketadi.",
      "Uchinchi bosqich — texnik SEO auditi. Sahifangiz HTML ni AI ga ko'rsating va: \"Bu sahifaning texnik SEO muammolarini ayting: title teg, meta description, H1, image alt teglari, internal linking, schema markup.\" Tezkor checklist olasiz.",
      "Va eng muhimi — AI yozgan kontentni hech qachon to'g'ridan-to'g'ri nashr qilmang. Google AI-generated kontentni aniqlay oladi va saralangan mualliflik kontentini afzal ko'radi. AI — sizning brainstorming va draft yordamchingiz, oxirgi nashriyotchi emas."
    ]
  }
];

window.BLOG_POSTS = BLOG_POSTS;
