import type { Project } from "../../types";

export default function ProjectCard({ name, description, tag, url }: Project) {
  return (
    <a className="card" href={url} target="_blank" rel="noopener noreferrer">
      <div className="card__top">
        <span className="card__tag">{tag}</span>
        <span className="card__arrow" aria-hidden="true">
          ↗
        </span>
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
    </a>
  );
}
