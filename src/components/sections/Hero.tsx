import { site } from "../../config/site";
import ButtonGroup from "../ui/ButtonGroup";

export default function Hero() {
  const { hero } = site;

  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__eyebrow">{hero.eyebrow}</p>
          <h1 className="hero__name">{hero.name}</h1>
          <h2 className="hero__role">
            <span className="grad">{hero.role}</span>
          </h2>
          <p className="hero__mono">{hero.mono}</p>
          <p className="hero__lead">{hero.lead}</p>
          <ButtonGroup links={hero.ctas} className="hero__actions" />
        </div>

        <div className="hero__photo">
          <img src={hero.photo} alt={hero.photoAlt} />
        </div>
      </div>
    </section>
  );
}
