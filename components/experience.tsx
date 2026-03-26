"use client"

import { ChevronRight } from "lucide-react"
import { Accordion as AccordionPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"
import { AccordionContent, AccordionItem } from "@/components/ui/accordion"

const experiences = [
  {
    id: "item-1",
    year: "2026",
    title: "BS Computer Science",
    company: "Saint Louis University",
    description:
      "Pursuing a degree in Computer Science with a focus on software engineering and algorithms. Engaged in research, hackathons, and leadership roles within the university's tech community.",
  },
  {
    id: "item-2",
    year: "2025",
    title: "Full Stack Developer Intern",
    company: "Old.St Labs",
    description:
      "Worked on scalable web applications for enterprise clients. Contributed to backend API design, frontend feature development, and cloud infrastructure. Collaborated closely with senior engineers to ship production-ready features.",
  },
  {
    id: "item-3",
    year: "2025",
    title: "Web Developer",
    company: "SLU IT Committee",
    description:
      "Built and maintained the university's internal web systems. Implemented new features based on stakeholder requirements and ensured consistent uptime. Collaborated with the team to modernize legacy systems.",
  },
  {
    id: "item-4",
    year: "2024",
    title: "IT Help Desk",
    company: "SLU IT Committee",
    description:
      "Provided technical support to faculty and students across campus. Diagnosed hardware and software issues and coordinated resolutions. Gained hands-on experience in network troubleshooting and system administration.",
  },
  {
    id: "item-5",
    year: "2022",
    title: "Hello World",
    company: "Where it all began",
    description:
      "Wrote the first lines of code and never looked back. Started with basic programming concepts and quickly developed a passion for building things on the web. This curiosity laid the foundation for everything that followed.",
  },
]

export default function Experience() {
  return (
    <>
      <div className="w-full mb-4">
        <span className="text-muted-foreground">[Experience]</span>
      </div>

      <div className="relative flex flex-col">
        {/* Vertical connecting line */}
        <div className="absolute left-10 top-0 bottom-0 w-px bg-border" />

        <AccordionPrimitive.Root type="single" collapsible className="flex flex-col">
          {experiences.map((exp) => (
            <AccordionItem key={exp.id} value={exp.id} className="border-none">
              {/* Custom trigger with ChevronRight that rotates on open */}
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger
                  className={cn(
                    "group flex flex-1 items-center py-3 px-0 text-left outline-none",
                    "hover:no-underline cursor-pointer"
                  )}
                >
                  {/* Year */}
                  <span className="w-20 shrink-0 text-right text-muted-foreground pr-4 z-10 bg-background">
                    {exp.year}
                  </span>

                  {/* Dot on the line */}
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground shrink-0 -ml-[3px] z-10" />

                  {/* Title + Company */}
                  <div className="flex flex-col pl-3 text-left flex-1">
                    <span className="font-semibold text-foreground">{exp.title}</span>
                    <span className="text-muted-foreground">{exp.company}</span>
                  </div>

                  {/* Chevron: rotates right → down on open */}
                  <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-90" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>

              <AccordionContent className="pl-24 pr-0 pb-3">
                <span className="text-muted-foreground leading-relaxed">{exp.description}</span>
              </AccordionContent>
            </AccordionItem>
          ))}
        </AccordionPrimitive.Root>
      </div>
    </>
  )
}