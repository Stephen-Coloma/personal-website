import ProjectItem from "@/components/project-item";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";

export default function ProjectsPage() {
    const mainProjects = [
    {
      cover: "/images/profile-photo.png",
      title: "Kitakita",
      description: "For the tooltip to not clip at the image boundary, if you want it to escape the image bounds and follow freely across the full card instead, let me know and I can lift the tooltip logic up to the card level.",
      link: "www.setmytime.stephencoloma.com",
      techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Framer Motion"],
      images: ["/images/profile-photo.png", "/images/profile-photo.png", "/images/profile-photo.png", "/images/profile-photo.png","/images/profile-photo.png", "/images/profile-photo.png"],
    },
    {
      cover: "/images/profile-photo.png",
      title: "Project 2",
      description: "For the tooltip to not clip at the image boundary, if you want it to escape the image bounds and follow freely across the full card instead, let me know and I can lift the tooltip logic up to the card level.",
      link: "#",
      techStack: ["React", "Node.js", "MongoDB"],
      images: ["/images/profile-photo.png", "/images/profile-photo.png", "/images/profile-photo.png", "/images/profile-photo.png","/images/profile-photo.png", "/images/profile-photo.png"],
    },
    {
      cover: "/images/profile-photo.png",
      title: "Project 3",
      description: "For the tooltip to not clip at the image boundary, if you want it to escape the image bounds and follow freely across the full card instead, let me know and I can lift the tooltip logic up to the card level.",
      link: "#",
      techStack: ["React", "Node.js", "MongoDB"],
      images: ["/images/profile-photo.png", "/images/profile-photo.png", "/images/profile-photo.png", "/images/profile-photo.png","/images/profile-photo.png", "/images/profile-photo.png"],
    },
    {
      cover: "/images/profile-photo.png",
      title: "Project 4",
      description: "For the tooltip to not clip at the image boundary, if you want it to escape the image bounds and follow freely across the full card instead, let me know and I can lift the tooltip logic up to the card level.",
      link: "#",
      techStack: ["React", "Node.js", "MongoDB"],
      images: ["/images/profile-photo.png", "/images/profile-photo.png", "/images/profile-photo.png", "/images/profile-photo.png","/images/profile-photo.png", "/images/profile-photo.png"],
    },
  ];

    return (
      <div className="px-2 py-4 space-y-2 md:space-y-0">
        <div className="w-full mb-4 flex justify-between">
          <Button
              variant="link"
              asChild
              className={`text-muted-foreground cursor-pointer hover:no-underline hover:text-primary p-0 md:p-2 transition-colors`}
          >
              <a href={`/`}>
                  <MoveLeft /> Back to Home
              </a>
          </Button>

          <span className="text-muted-foreground">[Showing All Projects]</span>
        </div>

        {mainProjects.map((project) => (
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
    )
}