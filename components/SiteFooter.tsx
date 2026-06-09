export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <p className="mono">© {year} Alanson Stumler</p>
      </div>
    </footer>
  );
}
