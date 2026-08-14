import { useState } from "react";
import { site } from "../../config/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav" id="top">
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" onClick={close}>
          <span className="nav__brand-lead">{site.brand.lead}</span> {site.brand.name}
        </a>

        <nav className={`nav__links${open ? " open" : ""}`}>
          {site.nav.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a className="nav__cta" href={site.cvUrl} target="_blank" rel="noopener noreferrer" onClick={close}>
            Descargar CV
          </a>
        </nav>

        <button
          className={`nav__toggle${open ? " open" : ""}`}
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
