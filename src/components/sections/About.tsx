import { site } from "../../config/site";
import Section from "../ui/Section";

export default function About() {
  const { about } = site;

  return (
    <Section id="about" kicker={about.kicker} title={about.title}>
      <div className="about">
        <div className="about__body">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <ul className="about__facts">
          {about.facts.map((fact) => (
            <li key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
