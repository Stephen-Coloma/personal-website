import ProjectItem from "@/components/project-item";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { featuredProjects } from "@/data/projects-data"
import { otherProjects } from "@/data/projects-data"
import Link from "next/link";

export default function ProjectsPage() {
  const allProjects = [...featuredProjects, ...otherProjects]

  return (
    <div className="animate-enter-up px-2 py-4 space-y-2 md:space-y-2">
      <div className="w-full mb-4 flex justify-between">
        <Button
            variant="link"
            asChild
            className={`text-muted-foreground cursor-pointer hover:no-underline hover:text-primary p-0 md:p-2 transition-colors`}
        >
            <Link href={`/`}>
                <MoveLeft /> <span>Back to Home</span>
            </Link>
        </Button>

        <span className="text-muted-foreground">[Showing All Projects]</span>
      </div>

      {allProjects.map((project) => (
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

      {/* Accent text */}
      <div className="pt-8 md:pt-16 pb-8 overflow-hidden select-none">
        <p className="text-[clamp(2.5rem,10vw,5rem)] font-bold leading-none text-muted-foreground dark:text-muted tracking-tighter whitespace-nowrap">
          building cool stuff
        </p>
      </div>
    </div>
  )
}