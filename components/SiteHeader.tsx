const NAV = [
  { href: "#believe", label: "Believe" },
  { href: "#do", label: "Do" },
  { href: "#background", label: "Background" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        {/* No em-dashes per the brief: this id uses the design's middot
            separator instead of a dash. */}
        <span className="mono site-header__id">AS · Louisville, KY</span>
        <nav className="mono site-header__nav" aria-label="Primary">
          {NAV.map((item) => {
            const active = item.href === "#contact";
            return (
              <a
                key={item.href}
                href={item.href}
                className={active ? "site-header__link is-active" : "site-header__link"}
                aria-current={active ? "true" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
