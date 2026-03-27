"use client"

import { useTheme } from "next-themes";

export default function About() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    // matches the space-y-8 from root page.tsx
    <section id="about" className="mt-8 md:mt-0 space-y-8">
      {/* section title */}
      <div className="flex justify-between items-center w-full">
        <span className="text-muted-foreground">[About]</span>
        <div 
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="flex items-center gap-1.5 opacity-50 select-none group cursor-pointer hover:opacity-100 transition-opacity"
        >
            <span className="text-primary">dark mode</span>
            <kbd className="px-1.5 py-0.5 rounded border border-border bg-muted font-mono text-sm font-medium text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">D</kbd>
        </div>
      </div>

      {/* hero title */}
      <div className="select-none">
        <p className="text-[clamp(2.5rem,12vw,5rem)] font-bold leading-none tracking-tighter bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
          Turning ideas into systems.
        </p>
      </div>

      {/* hero description */}
      <div className="flex flex-col gap-4">
          <span className="text-sm text-muted-foreground">Hi, I’m <strong className="text-foreground">Stephen Coloma</strong>. I’m a <strong className="text-foreground">software engineer</strong> driven by curiosity and a passion for building impactful web applications that solve real-world problems.</span>

          <span className="text-sm text-muted-foreground">I specialize in developing <strong className="text-foreground">scalable, full-stack systems</strong> using technologies like <strong className="text-foreground">TypeScript, React, Node.js, and AWS</strong>, with a strong focus on <strong className="text-foreground">backend architecture, APIs, and cloud-based solutions</strong>. I enjoy turning complex ideas into clean, reliable, and efficient systems.</span>

          <span className="text-sm text-muted-foreground">I push myself beyond what I already know because <strong className="px-1 bg-primary text-background underline">growth starts where comfort ends</strong>.</span>
      </div>
    </section>
  );
}