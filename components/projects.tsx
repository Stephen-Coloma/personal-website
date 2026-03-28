import { Button } from "./ui/button";
import ProjectItem from "./project-item";
import { MoveUpRight } from "lucide-react";
import { featuredProjects } from "@/data/projects-data";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" >
      {/* section title */}
      <div className="w-full mb-4 flex justify-between">
        <span className="text-muted-foreground">[Projects]</span>
        <Button
            variant="link"
            asChild
            className={`text-muted-foreground cursor-pointer hover:no-underline hover:text-primary transition-colors`}
        >
            <Link href={`/projects`}>
              <span>View all</span> <MoveUpRight />
            </Link>
        </Button>
      </div>

      <div className="space-y-2 md:space-y-0">
        {featuredProjects.map((project) => (
          <ProjectItem
            key={project.title}
            cover={project.cover}
            title={project.title}
            description={project.description}
            link={project.link}
            techStack={project.techStack}
            images={project.images}
          />
        ))}
      </div>
    </section>
  );
}