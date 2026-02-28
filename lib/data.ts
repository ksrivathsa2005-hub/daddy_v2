import type {
  Brand,
  CaseStudy,
  BuildStage,
  TeamRole,
  Pillar,
  NavLink,
  Metric,
  TimelineNode,
  ArchLayer,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Vision", href: "#vision" },
  { label: "Platform", href: "#platform" },
  { label: "Execution", href: "#execution" },
  { label: "Build Plan", href: "#build-plan" },
  { label: "Team", href: "#team" },
  { label: "Capital", href: "#capital" },
];

export const heroMetrics: Metric[] = [
  { value: 6, suffix: "", label: "Brands" },
  { value: 13, suffix: "", label: "Kitchens Year 1" },
  { value: 34, suffix: "+", label: "Kitchens Year 2" },
  { value: 3, suffix: "", label: "Months to Launch" },
];

export const brands: Brand[] = [
  {
    number: "01",
    name: "Bites Kitchen",
    description: "Quick bites, snacks & appetizers",
    icon: "🍿",
  },
  {
    number: "02",
    name: "Treat Kitchen",
    description: "Juices, shakes & desserts",
    icon: "🥤",
  },
  {
    number: "03",
    name: "Diet Kitchen",
    description: "Smoothies, salads & healthy bowls",
    icon: "🥗",
  },
  {
    number: "04",
    name: "Bowls Kitchen",
    description: "Signature rice bowls",
    icon: "🍚",
  },
  {
    number: "05",
    name: "Weekend Kitchen",
    description: "Kerala delicacies (Thu–Sun)",
    icon: "🍛",
  },
  {
    number: "06",
    name: "Indian Kitchen",
    description: "Traditional Indian cuisine",
    icon: "🍲",
  },
];

export const expansionTimeline: TimelineNode[] = [
  {
    year: "Year 1",
    title: "UK + India",
    detail: "13 kitchens across two countries, 6 brands operational",
  },
  {
    year: "Year 2",
    title: "Scale to 34 Kitchens",
    detail: "Multi-city expansion, full platform maturity",
  },
  {
    year: "Year 3",
    title: "Gulf, AU, US, Canada",
    detail: "Global footprint, franchise-ready infrastructure",
  },
];

export const archLayers: ArchLayer[] = [
  {
    label: "Interface Layer",
    items: ["Customer App", "Kitchen Dashboard", "Admin Panel"],
  },
  {
    label: "API Gateway",
    items: ["Auth", "Orders", "Payments", "Loyalty", "Analytics"],
  },
  {
    label: "Data Layer",
    items: ["PostgreSQL", "Redis", "AWS RDS", "S3"],
  },
  {
    label: "Infrastructure",
    items: ["AWS", "Docker", "CI/CD"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Apoorv Merch Platform",
    metric: "2000+ Users · ₹4L+ Revenue",
    description: "Full-stack e-commerce platform with payment integration and analytics dashboard",
    badge: "Revenue Proven",
  },
  {
    title: "Agri Receipts",
    metric: "Multi-Branch Workflows",
    description: "Multi-branch admin system for agricultural receipt management",
    badge: "Enterprise Scale",
  },
  {
    title: "Karunai",
    metric: "Govt. of Kerala",
    description: "Government collaboration platform for public welfare services",
    badge: "Govt. Credibility",
  },
  {
    title: "Nalashaa IT",
    metric: "Enterprise Leadership",
    description: "Enterprise application development and team leadership at scale",
    badge: "Corporate Grade",
  },
];

export const buildStages: BuildStage[] = [
  {
    stage: 1,
    title: "Foundation",
    subtitle: "Month 1",
    deliverables: [
      "Multi-tenant architecture",
      "Auth & user management",
      "Database schema design",
      "CI/CD pipeline setup",
    ],
  },
  {
    stage: 2,
    title: "Commerce",
    subtitle: "Month 2",
    deliverables: [
      "Order management system",
      "Payment gateway integration",
      "Kitchen dashboard",
      "Real-time order tracking",
    ],
  },
  {
    stage: 3,
    title: "Scale & Investor Ready",
    subtitle: "Month 3",
    deliverables: [
      "Analytics dashboard",
      "Investor reporting module",
      "Multi-country deployment",
      "Performance optimization",
    ],
  },
];

export const teamRoles: TeamRole[] = [
  {
    role: "Tech Lead",
    name: "Srivathsa",
    stipend: "Leading Architecture & Execution",
    highlighted: true,
  },
  {
    role: "Frontend Developers",
    count: 2,
    stipend: "₹18K–25K / month",
  },
  {
    role: "Backend Developers",
    count: 2,
    stipend: "₹18K–25K / month",
  },
];

export const pillars: Pillar[] = [
  {
    title: "Multi-Tenant",
    description: "One codebase. Infinite kitchens. Zero duplication.",
    icon: "⚡",
  },
  {
    title: "Multi-Country",
    description: "Currency, language, and compliance — built in from day one.",
    icon: "🌍",
  },
  {
    title: "Revenue-Tested",
    description: "Not a prototype. Shipped products with real revenue.",
    icon: "💰",
  },
  {
    title: "Govt Credibility",
    description: "Government of Kerala collaboration on record.",
    icon: "🏛️",
  },
  {
    title: "Structured Execution",
    description: "90-day sprints. Milestones. Measurable outcomes.",
    icon: "📐",
  },
  {
    title: "Investor Lens",
    description: "VC analytics, reporting, and metrics — native to the platform.",
    icon: "📊",
  },
];

export const capitalBreakdown = [
  {
    title: "4 Interns",
    description: "Stipend-based engineering talent",
    icon: "👥",
  },
  {
    title: "AWS Infrastructure",
    description: "Production-grade cloud setup",
    icon: "☁️",
  },
  {
    title: "Tools & Services",
    description: "CI/CD, monitoring, analytics",
    icon: "🛠️",
  },
];

export const capitalHighlights = [
  "48-Hour New Kitchen Deployment",
  "UK + India Simultaneous Launch",
  "VC Analytics Built-In",
];
