/* global React, window */
// ============================================================
// Prompt Gallery — pages
// ============================================================

const { useState, useMemo } = React;

// ============================================================
// Page 1: HOME (Gallery)
// ============================================================
function HomePage({ toast }) {
  const [model, setModel] = useState("all");
  const [cat, setCat] = useState("all");

  const filtered = useMemo(() => {
    return window.PROMPTS.filter(p =>
      (model === "all" || p.model === model) &&
      (cat === "all" || p.category === cat)
    );
  }, [model, cat]);

  return (
    <div className="page">
      <section className="hero">
        <div className="eyebrow">
          O'zbekistondagi keng AI promptlar to'plami
        </div>
        <h1>Prompt gallery - promptlar kutubxonasi</h1>
        <p className="sub">
          ChatGPT, Claude, Gemini va boshqa AI modellar uchun sinab ko'rilgan, professional
          promptlar. Tanlang, nusxalang va bir bosishda ishga tushiring.
        </p>
      </section>

      <div className="shell">
        <div className="filters">
          {/* Models filter */}
          <div className="filter-row glass-soft">
            <span className="filter-label">Model</span>
            <div className="chips-scroll">
              {window.MODELS.map(m => (
                <window.Chip
                  key={m.id}
                  active={model === m.id}
                  onClick={() => setModel(m.id)}
                  glyph={m.glyph}
                  glyphBg={m.color}
                  label={m.name}
                />
              ))}
            </div>
          </div>
          {/* Categories filter */}
          <div className="filter-row glass-soft">
            <span className="filter-label">Soha</span>
            <div className="chips-scroll">
              {window.CATEGORIES.map(c => (
                <window.Chip
                  key={c.id}
                  active={cat === c.id}
                  onClick={() => setCat(c.id)}
                  emoji={c.emoji}
                  label={c.name}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="section-head" style={{ marginTop: 32 }}>
          <h2 style={{ fontSize: "clamp(22px, 2.4vw, 28px)" }}>
            {filtered.length} ta prompt topildi
          </h2>
          <div className="stats">Bir bosishda nusxalang va AI da sinab ko'ring</div>
        </div>

        {filtered.length === 0 ? (
          <div className="empty-state glass" style={{ padding: 60, borderRadius: 20, marginTop: 22 }}>
            Tanlangan filtr bo'yicha promptlar topilmadi.
          </div>
        ) : (
          <div className="grid">
            {filtered.map((p, i) => (
              <window.PromptCard
                key={`${p.id}-${model}-${cat}`}
                data={p}
                index={i}
                onCopy={toast}
              />
            ))}
          </div>
        )}

        {/* SEO block */}
        <section className="seo-block glass">
          <h2>Prompt Gallery — O'zbekistondagi keng prompt kutubxonasi</h2>
          <div className="seo-cols">
            <p>
              <strong>Prompt Gallery</strong> — bu sun'iy intellekt bilan ishlashni soddalashtirgan
              o'zbek tilidagi birinchi yirik platformasidir. Bizning maqsadimiz — har bir tadbirkor,
              dasturchi, marketolog va talaba uchun ChatGPT, Claude, Gemini va boshqa zamonaviy
              AI vositalarini samarali ishlatishga yordam berish. To'plamimizdagi har bir prompt
              soha mutaxassislari tomonidan sinab ko'rilgan va real natija beradigan formada
              tayyorlangan.
            </p>
            <p>
              AI promptlar — bu bugungi zamonning eng kuchli ish vositalaridan biri. To'g'ri
              tuzilgan prompt yordamida marketing strategiyasini bir soatda yaratish, murakkab
              hujjatlarni daqiqalarda tahlil qilish va yuzlab soatlik ishni avtomatlashtirish
              mumkin. O'zbekistondagi kichik va o'rta biznes uchun bu — global raqobat darajasiga
              chiqishning eng tez yo'lidir. ChatGPT o'zbek tilini yaxshi tushunadi, lekin
              haqiqiy natija sifati siz beradigan promptning aniqligiga bog'liq.
            </p>
            <p>
              Strukturali promptlardan foydalanish — vaqtni tejaydi, sifatni oshiradi va AI dan
              olinadigan natijani prognozli qiladi. Har bir kategoriya — marketing, dasturlash,
              dizayn, SEO, biznes va boshqalar — uchun bizda mutaxassis darajasidagi promptlar
              mavjud. Ular doimiy yangilanadi va o'zbek bozorining haqiqiy ehtiyojlariga moslangan.
            </p>
            <p>
              Prompt Gallery shuningdek o'qitish platformasini ham taklif etadi: <strong>Prompt
              School</strong> bo'limida siz prompt engineering asoslaridan ilg'or texnikalargacha
              barchasini o'rganishingiz mumkin. <strong>Blog</strong> bo'limida esa AI dan
              foydalanishning real hayotdagi misollari, biznes case-lar va amaliy maslahatlar
              kutmoqda. Sun'iy intellekt, AI vositalar va prompt to'plamlari — barchasi bir
              platformada.
            </p>
          </div>
        </section>
      </div>

      <window.Footer />
    </div>
  );
}

// ============================================================
// Page 2: PROMPT SCHOOL
// ============================================================
function SchoolPage() {
  const [active, setActive] = useState(null);

  const levelLabel = {
    beginner: "Boshlang'ich",
    intermediate: "O'rta",
    advanced: "Ilg'or",
  };

  return (
    <div className="page">
      <section className="school-hero">
        <div className="eyebrow">
          Bepul o'quv markazi
        </div>
        <h1>Prompt School</h1>
        <p>AI bilan professional darajada muloqot qilishni o'rganing — boshlang'ichdan ilg'orgacha.</p>
      </section>

      <div className="shell">
        <div className="lesson-grid">
          {window.LESSONS.map((l, i) => (
            <window.LessonCard key={l.id} data={l} index={i} onOpen={setActive} />
          ))}
        </div>
      </div>

      <window.Modal open={!!active} onClose={() => setActive(null)}>
        {active && (
          <>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 14 }}>
              <span className={`level-badge level-${active.level === "intermediate" ? "inter" : active.level}`}>
                <span className="dot" /> {levelLabel[active.level]}
              </span>
              <span className="read-time">⏱ {active.minutes} daqiqa o'qish</span>
            </div>
            <h2>{active.title}</h2>
            <p className="modal-meta">Dars №{String(active.id).padStart(2, "0")} · Prompt School</p>
            <div className="modal-body">
              {active.body.map((b, i) => {
                if (b.type === "p")  return <p key={i}>{b.text}</p>;
                if (b.type === "h4") return <h4 key={i}>{b.text}</h4>;
                if (b.type === "ex") return <div key={i} className="example">{b.text}</div>;
                return null;
              })}
            </div>
          </>
        )}
      </window.Modal>

     <window.Footer />
    </div>
  );
}

// ============================================================
// Page 3: BLOG
// ============================================================
function BlogPage() {
  const [active, setActive] = useState(null);
  const posts = window.BLOG_POSTS;
  const featured = posts.find(p => p.featured);
  const rest = posts.filter(p => !p.featured);

  return (
    <div className="page">
      <section className="blog-hero">
        <div className="eyebrow">
          Real hayotdan misollar
        </div>
        <h1>Blog</h1>
        <p>AI dan foydalanishning haqiqiy hayotdagi misollari, case study'lar va amaliy maslahatlar.</p>
      </section>

      <div className="shell">
        {featured && (
          <div className="blog-featured">
            <window.BlogCard post={featured} featured index={0} onOpen={setActive} />
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              {rest.slice(0, 2).map((p, i) => (
                <window.BlogCard key={p.id} post={p} index={i + 1} onOpen={setActive} />
              ))}
            </div>
          </div>
        )}

        <div className="blog-grid">
          {rest.slice(2).map((p, i) => (
            <window.BlogCard key={p.id} post={p} index={i + 3} onOpen={setActive} />
          ))}
        </div>
      </div>

      <window.Modal open={!!active} onClose={() => setActive(null)}>
        {active && (
          <>
            <div style={{ marginBottom: 18, marginLeft: -38, marginRight: -38, marginTop: -36 }}>
              <window.BlogCover from={active.cover.from} to={active.cover.to} glyph={active.cover.glyphs} />
            </div>
            <h2>{active.title}</h2>
            <p className="modal-meta">
              {active.author} · {active.date} · {active.minutes} daqiqa o'qish
            </p>
            <div className="modal-body">
              {active.body.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </>
        )}
      </window.Modal>

      <window.Footer />
    </div>
  );
}

Object.assign(window, { HomePage, SchoolPage, BlogPage });
