import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  kicker: string;
  title: string;
  /** Center the heading + content (used by the contact section). */
  center?: boolean;
  children: ReactNode;
}

export default function Section({ id, kicker, title, center = false, children }: SectionProps) {
  return (
    <section id={id} className="section reveal">
      <div className={`container${center ? " is-center" : ""}`}>
        <p className="section__kicker">{kicker}</p>
        <h2 className="section__title">{title}</h2>
        {children}
      </div>
    </section>
  );
}
