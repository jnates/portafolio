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
                <li key={item.name} className="chip">
                  {item.icon ? (
                    <i className={item.icon} aria-hidden="true" />
                  ) : (
                    <span className="chip__dot" aria-hidden="true">
                      {item.name.charAt(0)}
                    </span>
                  )}
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
