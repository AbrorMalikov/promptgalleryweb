/* global React, window */
// ============================================================
// Prompt Gallery — shared components
// ============================================================

const { useState, useEffect, useRef, useCallback, useMemo } = React;

// ---------- Brand mark ----------
function BrandMark() {
  return (
    <div className="brand-mark">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L13.8 8.4 L20 10.2 L13.8 12 L12 18.2 L10.2 12 L4 10.2 L10.2 8.4 Z" fill="#fff" opacity="0.95" />
        <circle cx="19" cy="5" r="1.4" fill="#fff" opacity="0.9" />
        <circle cx="5" cy="19" r="1.1" fill="#fff" opacity="0.75" />
      </svg>
    </div>);

}

// ---------- Navbar ----------
function Navbar({ view, onView }) {
  const links = [
  { id: "home", label: "Bosh sahifa" },
  { id: "school", label: "Prompt School" },
  { id: "blog", label: "Blog" }];

  const containerRef = useRef(null);
  const [pill, setPill] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const active = el.querySelector(`[data-id="${view}"]`);
    if (active) {
      setPill({ left: active.offsetLeft, width: active.offsetWidth });
    }
  }, [view]);

  return (
    <nav className="nav">
      <div className="nav-inner glass" style={{ fontFamily: "Manrope" }}>
        <a className="brand" href="#" onClick={(e) => {e.preventDefault();onView("home");}}>
          <BrandMark />
          <div className="brand-name">Prompt <span>Gallery</span></div>
        </a>
        <div className="nav-links" ref={containerRef}>
          <div className="nav-pill" style={{ left: pill.left, width: pill.width }} />
          {links.map((l) =>
          <button
            key={l.id}
            data-id={l.id}
            className={`nav-link ${view === l.id ? "active" : ""}`}
            onClick={() => onView(l.id)}>
            
              {l.label}
            </button>
          )}
        </div>
      </div>
    </nav>);

}

// ---------- Toast system ----------
function useToast() {
  const [toasts, setToasts] = useState([]);
  const push = useCallback((msg) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((t) => [...t, { id, msg }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2000);
  }, []);
  const ToastHost = () =>
  <div className="toast-host">
      {toasts.map((t) =>
    <div className="toast" key={t.id}>
          <span className="check">✓</span>
          <span>{t.msg}</span>
        </div>
    )}
    </div>;

  return { push, ToastHost };
}

// ---------- Chip ----------
function Chip({ active, onClick, glyph, glyphBg, emoji, label }) {
  return (
    <button
      type="button"
      className={`chip ${active ? "active" : ""}`}
      onClick={onClick}>
      
      {emoji ? <span className="chip-emoji">{emoji}</span> : null}
      {glyph ?
      <span className="chip-glyph" style={{ background: glyphBg }}>{glyph}</span> :
      null}
      <span>{label}</span>
    </button>);

}

// ---------- Prompt card ----------
function PromptCard({ data, index, onCopy }) {
  const [expanded, setExpanded] = useState(false);
  const model = window.MODELS.find((m) => m.id === data.model);
  const cat = window.CATEGORIES.find((c) => c.id === data.category);
  const url = window.modelLaunchUrl(data.model, data.prompt);
  const launchLabel = window.LAUNCH_LABEL[data.model] || "AI'da ochish";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data.prompt);
      onCopy("Prompt nusxalandi!");
    } catch (e) {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = data.prompt;
      document.body.appendChild(ta);
      ta.select();
      try {document.execCommand("copy");} catch (_) {}
      ta.remove();
      onCopy("Prompt nusxalandi!");
    }
  };

  return (
    <article
      className="card glass"
      style={{ animationDelay: `${Math.min(index, 12) * 50}ms` }}>
      
      <div className="card-head">
        <span className="cat-badge" style={{ background: cat.bg, color: cat.fg }}>
          <span aria-hidden>{cat.emoji}</span>
          {cat.name}
        </span>
        <span className="model-badge">
          <span className="model-glyph" style={{ background: model.color }}>{model.glyph}</span>
          {model.name}
        </span>
      </div>
      <h3>{data.title}</h3>
      <p className="desc">{data.desc}</p>
      <div className={`prompt-block ${expanded ? "expanded" : "collapsed"}`}>
        {data.prompt}
      </div>
      <button className="expand-toggle" onClick={() => setExpanded((e) => !e)}>
        {expanded ? "Kamroq ko'rish ↑" : "Ko'proq ko'rish ↓"}
      </button>
      <div className="card-actions">
        <button className="btn btn-ghost" onClick={handleCopy}>
          <span className="icn">📋</span> Nusxalash
        </button>
        <a className="btn btn-primary" href={url} target="_blank" rel="noopener noreferrer">
          <span className="icn">🚀</span> {launchLabel}
        </a>
      </div>
    </article>);

}

// ---------- Lesson card ----------
function LessonCard({ data, index, onOpen }) {
  const orbColors = [
  "radial-gradient(circle, #c7d2fe, transparent 70%)",
  "radial-gradient(circle, #fbcfe8, transparent 70%)",
  "radial-gradient(circle, #a5f3fc, transparent 70%)",
  "radial-gradient(circle, #fde68a, transparent 70%)",
  "radial-gradient(circle, #ddd6fe, transparent 70%)",
  "radial-gradient(circle, #bbf7d0, transparent 70%)",
  "radial-gradient(circle, #fecaca, transparent 70%)",
  "radial-gradient(circle, #c4b5fd, transparent 70%)"];

  const levelClass = {
    beginner: "level-beginner",
    intermediate: "level-inter",
    advanced: "level-advanced"
  }[data.level];
  const levelLabel = {
    beginner: "Boshlang'ich",
    intermediate: "O'rta",
    advanced: "Ilg'or"
  }[data.level];

  return (
    <article
      className="lesson-card glass"
      style={{ animationName: "cardIn", animationDuration: "0.6s", animationFillMode: "both", animationDelay: `${index * 60}ms`, opacity: 0 }}
      onClick={() => onOpen(data)}>
      
      <div className="lesson-orb" style={{ background: orbColors[index % orbColors.length] }} />
      <div className="lesson-num">{String(data.id).padStart(2, "0")}</div>
      <h3>{data.title}</h3>
      <p>{data.desc}</p>
      <div className="lesson-meta">
        <span className={`level-badge ${levelClass}`}>
          <span className="dot" /> {levelLabel}
        </span>
        <span className="read-time">⏱ {data.minutes} daqiqa o'qish</span>
      </div>
      <button className="btn btn-primary" style={{ marginTop: 4 }}>
        <span className="icn">▶</span> Boshlash
      </button>
    </article>);

}

// ---------- Blog cover (abstract glass placeholder) ----------
function BlogCover({ from, to, glyph }) {
  return (
    <div className="blog-cover" style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}>
      <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id={`gr-${from}-${to}`} cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
            <stop offset="60%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        <rect width="800" height="450" fill={`url(#gr-${from}-${to})`} />
        {/* abstract glass shapes */}
        <circle cx="160" cy="120" r="120" fill="rgba(255,255,255,0.18)" />
        <circle cx="650" cy="320" r="160" fill="rgba(255,255,255,0.15)" />
        <rect x="380" y="80" width="280" height="280" rx="60" fill="rgba(255,255,255,0.08)" transform="rotate(15 520 220)" />
        <ellipse cx="400" cy="380" rx="240" ry="40" fill="rgba(255,255,255,0.12)" />
        {/* Glyph */}
        <text x="400" y="260" textAnchor="middle" fontSize="140" opacity="0.55">{glyph}</text>
      </svg>
    </div>);

}

// ---------- Blog card ----------
function BlogCard({ post, featured, index, onOpen }) {
  const cat = window.CATEGORIES.find((c) => c.id === post.category);
  const initial = post.author.split(" ").map((s) => s[0]).join("").slice(0, 2);
  const avatarBg = `linear-gradient(135deg, ${post.cover.from}, ${post.cover.to})`;

  return (
    <article
      className={`blog-card glass ${featured ? "featured" : ""}`}
      style={{ animationName: "cardIn", animationDuration: "0.6s", animationFillMode: "both", animationDelay: `${index * 70}ms`, opacity: 0 }}
      onClick={() => onOpen(post)}>
      
      <BlogCover from={post.cover.from} to={post.cover.to} glyph={post.cover.glyphs} />
      <div className="blog-meta-bar">
        <span className="blog-tag">{cat.emoji} {cat.name}</span>
      </div>
      <div className="blog-body">
        <h3>{post.title}</h3>
        <p className="blog-excerpt">{post.excerpt}</p>
        <div className="blog-foot">
          <span className="author-line">
            <span className="author-avatar" style={{ background: avatarBg }}>{initial}</span>
            <span>{post.author}</span>
          </span>
          <span>{post.date} · {post.minutes} daq</span>
        </div>
        <button className="btn btn-ghost" style={{ alignSelf: "flex-start", flex: "0 0 auto", marginTop: 4 }}>
          O'qish →
        </button>
      </div>
    </article>);

}

// ---------- Modal ----------
function Modal({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {if (e.key === "Escape") onClose();};
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Yopish">×</button>
        {children}
      </div>
    </div>);

}

// ---------- Footer (site-wide) ----------
function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          {/* Brand column */}
          <div className="footer-col footer-brand-col">
            <a className="brand" href="#" onClick={(e) => e.preventDefault()}>
              <BrandMark />
              <div className="brand-name">Prompt <span>Gallery</span></div>
            </a>
            <p className="footer-tagline">
              O'zbekistondagi birinchi AI promptlar kutubxonasi. ChatGPT, Claude, Gemini va boshqa modellar uchun tayyor, sinab ko'rilgan promptlar.
            </p>
            <div className="footer-social">
              <a href="https://t.me/abrorbekmalikov" target="_blank" rel="noopener noreferrer" className="social-link" title="Telegram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
            </div>
          </div>

          {/* Sahifalar */}
          <div className="footer-col">
            <h4 className="footer-col-title">Sahifalar</h4>
            <ul className="footer-links">
              <li><a href="#">Bosh sahifa</a></li>
              <li><a href="#">Prompt School</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          {/* Prompt sohalari */}
          <div className="footer-col">
            <h4 className="footer-col-title">Prompt sohalari</h4>
            <ul className="footer-links">
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Dasturlash</a></li>
              <li><a href="#">SEO</a></li>
              <li><a href="#">Biznes</a></li>
              <li><a href="#">Dizayn</a></li>
              <li><a href="#">Kontent yozish</a></li>
            </ul>
          </div>

          {/* AI modellar */}
          <div className="footer-col">
            <h4 className="footer-col-title">AI modellar</h4>
            <ul className="footer-links">
              <li><a href="#">ChatGPT</a></li>
              <li><a href="#">Claude</a></li>
              <li><a href="#">Gemini</a></li>
              <li><a href="#">Midjourney</a></li>
              <li><a href="#">Copilot</a></li>
              <li><a href="#">Perplexity</a></li>
            </ul>
          </div>

          {/* Aloqa */}
          <div className="footer-col">
            <h4 className="footer-col-title">Aloqa</h4>
            <ul className="footer-links">
              <li>
                <a href="tel:+998977838253">
                  <span className="footer-icon">📞</span> +998 97 783 82 53
                </a>
              </li>
              <li>
                <a href="https://t.me/abrorbekmalikov" target="_blank" rel="noopener noreferrer">
                  <span className="footer-icon">✈️</span> Telegram orqali aloqa
                </a>
              </li>
            </ul>
            <a href="#" className="btn btn-cta footer-cta">
              <span className="icn">💬</span> Murojaat uchun
            </a>
          </div>
        </div>

        {/* Pastki qism */}
        <div className="footer-bottom">
          <div className="footer-copy">
            © 2026 Prompt Gallery · Mehr bilan O'zbekistonda tayyorlandi
          </div>
          <div className="footer-powered">
            Powered by{" "}
            <a href="https://seo-first.uz" target="_blank" rel="noopener noreferrer">
              SEO First
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  BrandMark, Navbar, useToast, Chip,
  PromptCard, LessonCard, BlogCover, BlogCard, Modal, Footer
});
