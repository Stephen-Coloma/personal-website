export type TechCategory = {
  label: string;
  items: string[];
};

export const mainTechStack: TechCategory[] = [
  {
    label: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Vite", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "NestJS", "MySQL", "PostgreSQL", "Prisma", "Amazon DynamoDB", "Redis", "Supabase"],
  },
  {
    label: "DevOps & Cloud",
    items: ["AWS", "Docker", "Localstack", "NGINX", "GitHub Actions"],
  },
];

export const allTechStack: TechCategory[] = [
  {
    label: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Vite", "Tailwind CSS", "ShadCN UI", "Framer Motion"],
  },
  {
    label: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "MySQL", "PostgreSQL", "Prisma", "Amazon DynamoDB", "Redis", "Supabase"],
  },
  {
    label: "DevOps & Cloud",
    items: ["AWS", "Docker", "Localstack", "NGINX", "GitHub Actions", "PlanetScale"],
  },
  {
    label: "AI",
    items: ["ChatGPT", "Google Gemini", "Claude", "Cursor", "Antigravity"],
  },
  {
    label: "Developer Tools",
    items: ["Git", "GitHub", "Postman", "Linux", "Jest", "Playwright", "Swagger", "MCP"],
  },
  {
    label: "Productivity Tools",
    items: ["ClickUp", "Discord", "Clockify", "Trello", "Slack", "Microsoft Teams"],
  },
];
