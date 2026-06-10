export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {year} Alanson Stumler</p>
      </div>
    </footer>
  );
}
