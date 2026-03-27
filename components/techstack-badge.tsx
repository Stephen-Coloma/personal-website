export default function TechStackBadge({ tech }: { tech: string }) {
    return (
        <span
            className="px-1 py-0.5 md:px-2 md:py-1 text-[10px] font-medium bg-muted text-muted-foreground border border-border"
        >
            {tech}
        </span>
    );
}
