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
    items: ["Node.js", "NestJS", "AWS SDK", "PostgreSQL", "Amazon DynamoDB", "Redis", "Supabase", "Google Gemini", "Claude", "ChatGPT", "Cursor", "Antigravity"],
  },
  {
    label: "DevOps & Cloud",
    items: ["AWS", "Docker", "Localstack", "NGINX", "GitHub Actions"],
  },
];

export const allTechStack: TechCategory[] = [
  {
    label: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Vite", "Tailwind CSS", "Zustand", "TanStack Query", "TanStack Form", "Axios", "ShadCN UI", "Framer Motion"],
  },
  {
    label: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "AWS SDK", "MySQL", "PostgreSQL", "Prisma", "Amazon DynamoDB", "Redis", "Supabase", "JWT", "Microservices"],
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
