import { site } from "../../config/site";
import Section from "../ui/Section";

export default function Stack() {
  const { stack } = site;

  return (
    <Section id="stack" kicker={stack.kicker} title={stack.title}>
      <div className="stack">
        {stack.groups.map((group) => (
          <div key={group.title} className="stack__group">
            <h3>{group.title}</h3>
            <ul className="chips">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
