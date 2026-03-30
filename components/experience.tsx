import { ChevronRight } from "lucide-react"
import { Accordion as AccordionPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"
import { AccordionContent, AccordionItem } from "@/components/ui/accordion"
import TechStackBadge from "./techstack-badge"
import { experiences } from "@/data/experience-data"

export default function Experience() {
  return (
    <section id="experience">
      {/* section title */}
      <div className="w-full mb-4">
        <span className="text-muted-foreground">[Experience]</span>
      </div>

      <div className="relative flex flex-col">
        {/* Vertical connecting line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

        <AccordionPrimitive.Root type="single" collapsible className="flex flex-col">
          {experiences.map((exp, index) => {
            const isLatest = index === 0;

            return (
              <AccordionItem key={exp.id} value={exp.id} className="border-none">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "group flex flex-1 items-center py-2 px-0 text-left outline-none",
                      "hover:no-underline cursor-pointer"
                    )}
                  >
                    {/* Year */}
                    <span 
                      className={cn(
                        "w-16 shrink-0 text-center z-10 bg-background transition-colors duration-200",
                        isLatest ? "text-primary font-bold" : "text-muted-foreground",
                        "group-hover:text-foreground group-hover:font-bold"
                      )}
                    >
                      {exp.year}
                    </span>

                    {/* Pixel on the line */}
                    <div 
                      className={cn(
                        "w-1.5 h-1.5 shrink-0 -ml-[3px] z-10 transition-colors duration-200",
                        isLatest ? "bg-primary" : "bg-muted",
                        "group-hover:bg-foreground"
                      )} 
                    />

                    {/* Title + Company */}
                    <div className="flex flex-col pl-3 text-left flex-1">
                      <span className="font-semibold text-foreground transition-colors duration-200">
                        {exp.title}
                      </span>
                      <span className="text-muted-foreground">
                        {exp.company} • {exp.location}
                      </span>
                    </div>

                    {/* Chevron */}
                    <ChevronRight 
                      className={cn(
                        "w-4 h-4 mr-4 text-muted-foreground shrink-0 transition-all duration-200 group-data-[state=open]:rotate-90",
                        "group-hover:text-foreground"
                      )} 
                    />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>

                <AccordionContent className="pl-18 pr-0 pb-3">
                  <div className="flex flex-col gap-4">
                    <span className="text-muted-foreground leading-relaxed">{exp.description}</span>
                    {exp.techStack && exp.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech) => (
                          <TechStackBadge key={tech} tech={tech} />
                        ))}
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </AccordionPrimitive.Root>
      </div>
    </section>
  )
}