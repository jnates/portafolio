/** Shared, app-wide type definitions. */

export type ButtonVariant = "primary" | "ghost";

export interface CtaLink {
  label: string;
  href: string;
  variant?: ButtonVariant;
  /** Force open in a new tab. Auto-detected for http(s) links when omitted. */
  external?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface StackItem {
  name: string;
  /** Devicon CSS class, e.g. "devicon-go-plain colored". Optional. */
  icon?: string;
}

export interface StackGroup {
  title: string;
  items: readonly StackItem[];
}

export interface Project {
  name: string;
  description: string;
  tag: string;
  url: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface SiteConfig {
  brand: {
    lead: string;
    name: string;
  };
  meta: {
    fullName: string;
    role: string;
    location: string;
  };
  cvUrl: string;
  nav: readonly NavLink[];
  hero: {
    badge: string;
    eyebrow: string;
    name: string;
    roles: readonly string[];
    mono: string;
    lead: string;
    photo: string;
    photoAlt: string;
    ctas: readonly CtaLink[];
  };
  about: {
    kicker: string;
    title: string;
    paragraphs: readonly string[];
    facts: readonly Fact[];
  };
  stack: {
    kicker: string;
    title: string;
    groups: readonly StackGroup[];
  };
  projects: {
    kicker: string;
    title: string;
    items: readonly Project[];
    moreLink: CtaLink;
  };
  contact: {
    kicker: string;
    title: string;
    lead: string;
    ctas: readonly CtaLink[];
  };
  footer: {
    note: string;
  };
}
