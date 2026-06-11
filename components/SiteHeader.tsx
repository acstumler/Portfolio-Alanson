const NAV = [
  { href: "#believe", label: "Why now" },
  { href: "#do", label: "Offering" },
  { href: "#background", label: "Experience" },
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#hero" className="site-header__brand">
          Alanson Stumler<span> · Co-Founder</span>
        </a>
        <nav className="site-header__nav" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="site-header__link">
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="site-header__cta">
          Start a conversation
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
