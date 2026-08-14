import { useRef } from "react";
import type { PointerEvent } from "react";
import type { Project } from "../../types";

const MAX_TILT = 7;

export default function ProjectCard({ name, description, tag, url }: Project) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (event: PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${(-py * MAX_TILT).toFixed(2)}deg) rotateY(${(
      px * MAX_TILT
    ).toFixed(2)}deg) translateY(-4px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <a
      ref={ref}
      className="card"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
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
