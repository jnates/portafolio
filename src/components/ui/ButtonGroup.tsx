import type { CtaLink } from "../../types";
import Button from "./Button";

interface ButtonGroupProps {
  links: readonly CtaLink[];
  className?: string;
}

export default function ButtonGroup({ links, className }: ButtonGroupProps) {
  return (
    <div className={className}>
      {links.map((link) => (
        <Button key={link.label} href={link.href} variant={link.variant} external={link.external}>
          {link.label}
        </Button>
      ))}
    </div>
  );
}
