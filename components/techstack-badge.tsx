import { cn } from "@/lib/utils";

interface TechStackBadgeProps {
    tech: string;
    className?: string;
}

export default function TechStackBadge({ tech, className }: TechStackBadgeProps) {
    return (
        <span
            className={cn(
                "px-1 py-0.5 md:px-2 md:py-1 text-[10px] md:text-xs font-medium bg-muted text-muted-foreground border border-border",
                className
            )}
        >
            {tech}
        </span>
    );
}
