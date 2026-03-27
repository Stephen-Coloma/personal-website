import { MoveUpRight } from "lucide-react";
import ProjectItem from "./project-item";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Projects() {
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
    <div id="projects" >
        <div className="w-full mb-1 flex justify-between">
          <span className="text-muted-foreground">[Projects]</span>

          <Button
              variant="link"
              asChild
              className={`text-muted-foreground cursor-pointer hover:no-underline hover:text-primary transition-colors`}
          >
              <a href={`/projects`}>
                <span>View all</span> <MoveUpRight />
              </a>
          </Button>
        </div>

    <div className="space-y-2 md:space-y-0">
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
    </div>
  );
}