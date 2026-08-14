import type { ReactNode } from "react";
import type { ButtonVariant } from "../../types";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  /** Force new-tab behaviour. Auto-detected for http(s) links when omitted. */
  external?: boolean;
  className?: string;
}

const isHttp = (href: string): boolean => /^https?:\/\//i.test(href);

export default function Button({ href, children, variant = "ghost", external, className }: ButtonProps) {
  const openInNewTab = external ?? isHttp(href);
  const classes = ["btn", `btn--${variant}`, className].filter(Boolean).join(" ");

  return (
    <a
      className={classes}
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
