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
    items: ["Node.js", "NestJS", "Express.js", "MySQL", "PostgreSQL", "Amazon DynamoDB", "Redis", "Supabase"],
  },
  {
    label: "DevOps & Cloud",
    items: ["AWS", "Docker", "NGINX", "GitHub Actions", "PlanetScale"],
  },
];

export const allTechStack: TechCategory[] = [
  ...mainTechStack,
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
