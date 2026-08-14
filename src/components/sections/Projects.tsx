import { site } from "../../config/site";
import Section from "../ui/Section";
import Button from "../ui/Button";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { projects } = site;

  return (
    <Section id="projects" kicker={projects.kicker} title={projects.title}>
      <div className="projects">
        {projects.items.map((project) => (
          <ProjectCard key={project.url} {...project} />
        ))}
      </div>

      <div className="projects__more">
        <Button
          href={projects.moreLink.href}
          variant={projects.moreLink.variant}
          external={projects.moreLink.external}
        >
          {projects.moreLink.label}
        </Button>
      </div>
    </Section>
  );
}
