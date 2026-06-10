// FOOTER — ported from the Lovable SiteFooter: a display-type brand with a
// short descriptor on the left and an uppercase copyright on the right, over a
// hairline rule.
export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p className="site-footer__brand">Alanson Stumler</p>
          <p className="site-footer__sub">
            Personal site, operational data capture &amp; layered agentic
            workflows.
          </p>
        </div>
        <div className="site-footer__copy">
          © {year}, all rights reserved
        </div>
      </div>
    </footer>
  );
}
