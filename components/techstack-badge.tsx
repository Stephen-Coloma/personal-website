export default function TechStackBadge({ tech }: { tech: string }) {
    return (
        <span
            className="px-2 py-1 text-[10px] font-medium bg-muted text-muted-foreground border border-border"
        >
            {tech}
        </span>
    );
}