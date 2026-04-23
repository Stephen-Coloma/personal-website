"use client"

import { useState } from "react";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import TechStackBadge from "./techstack-badge";
import ImageLightbox from "./image-lightbox";
import { Tooltip, TooltipContent } from "./ui/tooltip";
import { TooltipTrigger } from "./ui/tooltip";

interface ProjectItemProps {
    cover: string;
    title: string;
    description: string;
    link: string;
    techStack: string[];
    images: string[];
}

const MAX_VISIBLE = 3;

export default function ProjectItem({ cover, title, description, link, techStack, images }: ProjectItemProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const allImages = [cover, ...images];

    const previewImages = images?.slice(0, MAX_VISIBLE) ?? [];
    const extraCount = (images?.length ?? 0) - MAX_VISIBLE;

    const prev = () => setActiveIndex((i) => (i - 1 + (allImages?.length ?? 1)) % (allImages?.length ?? 1));
    const next = () => setActiveIndex((i) => (i + 1) % (allImages?.length ?? 1));

    const openAt = (i: number) => {
        setActiveIndex(i);
        setLightboxOpen(true);
    };

    return (
        <div className="space-y-2 p-2 md:p-3 transition-colors duration-200 bg-muted/50 md:bg-background hover:bg-muted/50">
            <div className="group flex flex-row gap-2">
                {/* Left: Cover Image */}
                <div 
                    className="relative shrink-0 w-29  h-29 md:w-34 md:h-34 overflow-hidden cursor-pointer"
                    onClick={() =>{
                        if(images.length > 0){
                            openAt(0);
                        }
                    }}
                >
                    <Image 
                        src={cover} 
                        alt={title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                        className="object-cover" 
                        priority
                    />
                </div>

                {/* Right: Info */}
                <div className="flex flex-col gap-1">
                    {/* Title + Link */}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex w-fit items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <span className="font-semibold text-foreground text-base">{title} </span>
                                <MoveUpRight className="w-3 h-3" />
                            </a>
                        </TooltipTrigger>
                        <TooltipContent className="px-3 py-1.5 text-sm font-medium">
                            visit {link}
                        </TooltipContent>
                    </Tooltip>

                    <span className="text-muted-foreground line-clamp-3">{description}</span>

                    {/* Screenshot thumbnails */}
                    <div className="flex gap-2">
                        {previewImages.map((img, i) => (
                            <button
                                key={i}
                                // +1 because the first image is the cover
                                onClick={() => openAt(i + 1)}
                                className="relative md:w-16 md:h-8 w-10 h-6 overflow-hidden border border-border shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
                            >
                                <Image src={img} alt={`${title} screenshot ${i + 1}`} priority fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />

                                {/* +N overflow hint on last visible thumbnail */}
                                {i === MAX_VISIBLE - 1 && extraCount > 0 && (
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                        <span className="text-white text-[10px] font-semibold">+{extraCount}</span>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {techStack.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                        <TechStackBadge key={tech} tech={tech} />
                    ))}
                </div>
            )}

            {/* Lightbox */}
            <ImageLightbox
                images={allImages}
                title={title}
                activeIndex={activeIndex}
                open={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                onNext={next}
                onPrev={prev}
            />
        </div>
    );
}