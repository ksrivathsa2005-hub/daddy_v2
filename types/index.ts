export interface Brand {
  number: string;
  name: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  title: string;
  metric: string;
  description: string;
  badge: string;
}

export interface BuildStage {
  stage: number;
  title: string;
  subtitle: string;
  deliverables: string[];
}

export interface TeamRole {
  role: string;
  name?: string;
  count?: number;
  stipend: string;
  highlighted?: boolean;
}

export interface Pillar {
  title: string;
  description: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Metric {
  value: number;
  suffix: string;
  label: string;
}

export interface TimelineNode {
  year: string;
  title: string;
  detail: string;
}

export interface ArchLayer {
  label: string;
  items: string[];
}
