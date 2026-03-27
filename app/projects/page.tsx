import ProjectItem from "@/components/project-item";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { featuredProjects } from "@/data/projects-data"
import { otherProjects } from "@/data/projects-data"

export default function ProjectsPage() {
  const allProjects = [...featuredProjects, ...otherProjects]

  return (
    <div className="px-2 py-4 space-y-2 md:space-y-0">
      <div className="w-full mb-4 flex justify-between">
        <Button
            variant="link"
            asChild
            className={`text-muted-foreground cursor-pointer hover:no-underline hover:text-primary p-0 md:p-2 transition-colors`}
        >
            <a href={`/`}>
                <MoveLeft /> <span>Back to Home</span>
            </a>
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
        <p className="text-[clamp(2.5rem,10vw,5rem)] font-bold leading-none text-muted-foreground/20 whitespace-nowrap">
          building cool stuff
        </p>
      </div>
    </div>
  )
}