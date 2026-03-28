import { Button } from "./ui/button";
import { MoveUpRight } from "lucide-react";
import { mainTechStack } from "@/data/techstack-data";
import TechStackBadge from "./techstack-badge";
import Link from "next/link";

export default function TechStack() {
    return (
      <section id="tech-stack">
        {/* section title */}
        <div className="w-full mb-4 flex justify-between">
          <span className="text-muted-foreground">[Tech Stack]</span>
          <Button
              variant="link"
              asChild
              className="text-muted-foreground cursor-pointer hover:no-underline hover:text-primary transition-colors"
          >
              <Link href="/tech-stack">
                <span>View all</span> <MoveUpRight />
              </Link>
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          {mainTechStack.map((category) => (
            <div key={category.label} className="flex flex-col gap-2">
              {/* Category label */}
              <span className="text-muted-foreground uppercase font-bold">
                {category.label}
              </span>

              {/* Badges */}
              <div className="ml-4 flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <TechStackBadge key={tech} tech={tech} className="text-xs md:text-sm" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}