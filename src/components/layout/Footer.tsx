import { site } from "../../config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {site.meta.fullName}
        </p>
        <p className="footer__loc">{site.footer.note}</p>
      </div>
    </footer>
  );
}
