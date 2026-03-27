"use client"

import { useState } from "react";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import TechStackBadge from "./techstack-badge";
import ImageLightbox from "./image-lightbox";

interface ProjectItemProps {
    cover: string;
    title: string;
    description: string;
    link: string;
    techStack: string[];
    images?: string[];
}

const MAX_VISIBLE = 3;

export default function ProjectItem({ cover, title, description, link, techStack, images }: ProjectItemProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const hasImages = images && images.length > 0;
    const visibleImages = images?.slice(0, MAX_VISIBLE) ?? [];
    const extraCount = (images?.length ?? 0) - MAX_VISIBLE;

    const prev = () => setActiveIndex((i) => (i - 1 + (images?.length ?? 1)) % (images?.length ?? 1));
    const next = () => setActiveIndex((i) => (i + 1) % (images?.length ?? 1));

    const openAt = (i: number) => {
        setActiveIndex(i);
        setLightboxOpen(true);
    };

    return (
        <>
            <div className="group flex flex-row gap-4 px-3 py-3 transition-colors duration-200 hover:bg-muted/50">
                {/* Left: Cover Image */}
                <div className="relative shrink-0 w-30 h-30 overflow-hidden">
                    <Image src={cover} alt={title} fill className="object-cover" />
                </div>

                {/* Right: Info */}
                <div className="flex flex-col">
                    {/* Title + Link */}
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <span className="font-semibold text-foreground text-base">{title}</span>
                        <MoveUpRight className="w-3 h-3" />
                    </a>

                    <span className="text-muted-foreground line-clamp-2">{description}</span>

                    {/* {techStack.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-1">
                            {techStack.map((tech) => (
                                <TechStackBadge key={tech} tech={tech} />
                            ))}
                        </div>
                    )} */}

                    {/* Screenshot thumbnails */}
                    {hasImages && (
                        <div className="flex gap-2 mt-2">
                            {visibleImages.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => openAt(i)}
                                    className="relative w-16 h-10 overflow-hidden border border-border shrink-0 hover:opacity-80 transition-opacity cursor-pointer"
                                >
                                    <Image src={img} alt={`${title} screenshot ${i + 1}`} fill className="object-cover" />

                                    {/* +N overflow hint on last visible thumbnail */}
                                    {i === MAX_VISIBLE - 1 && extraCount > 0 && (
                                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                            <span className="text-white text-[10px] font-semibold">+{extraCount}</span>
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Lightbox */}
            {hasImages && (
                <ImageLightbox
                    images={images}
                    title={title}
                    activeIndex={activeIndex}
                    open={lightboxOpen}
                    onClose={() => setLightboxOpen(false)}
                    onNext={next}
                    onPrev={prev}
                />
            )}
        </>
    );
}