"use client"

import { useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogPortal, DialogTitle } from "@/components/ui/dialog";
import { Dialog as DialogPrimitive } from "radix-ui";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ImageLightboxProps {
    images: string[];
    title: string;
    activeIndex: number;
    open: boolean;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

export default function ImageLightbox({
    images,
    title,
    activeIndex,
    open,
    onClose,
    onNext,
    onPrev,
}: ImageLightboxProps) {
    // Keyboard navigation
    useEffect(() => {
        if (!open) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") onPrev();
            if (e.key === "ArrowRight") onNext();
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [open, onPrev, onNext, onClose]);

    return (
        <Dialog open={open} onOpenChange={(val) => !val && onClose()}>
            <DialogPortal>
                {/* Full-screen backdrop */}
                <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />

                {/* Content: covers full screen, clicking the bg area closes */}
                <DialogPrimitive.Content
                    aria-describedby={undefined}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center outline-none cursor-default"
                    onClick={onClose}
                >
                    <VisuallyHidden asChild>
                        <DialogTitle>{title} image viewer</DialogTitle>
                    </VisuallyHidden>

                    {/* Close button */}
                    <button
                        onClick={(e) => { e.stopPropagation(); onClose(); }}
                        className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors cursor-pointer"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Counter */}
                    <span
                        className="absolute top-4 left-1/2 -translate-x-1/2 text-white/50 text-[11px] font-medium"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {activeIndex + 1} / {images.length}
                    </span>

                    {/* Image */}
                    <div
                        className="relative w-[90vw] max-w-4xl aspect-video"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={images[activeIndex]}
                            alt={`${title} ${activeIndex + 1}`}
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Hint text */}
                    <span
                        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30"
                        onClick={(e) => e.stopPropagation()}
                    >
                        ← → to navigate &nbsp;·&nbsp; esc to close
                    </span>

                    {/* Prev button */}
                    <button
                        onClick={(e) => { e.stopPropagation(); onPrev(); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors cursor-pointer"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Next button */}
                    <button
                        onClick={(e) => { e.stopPropagation(); onNext(); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors cursor-pointer"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </DialogPrimitive.Content>
            </DialogPortal>
        </Dialog>
    );
}
