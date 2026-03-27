'use client'

import ProjectItem from "./project-item";

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
        <div className="w-full mb-4 flex justify-between">
          <span className="text-muted-foreground">[Projects]</span>
          <span className="text-muted-foreground">[View all]</span>
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