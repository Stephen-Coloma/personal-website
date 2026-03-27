import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { allTechStack } from "@/data/techstack-data";
import TechStackBadge from "@/components/techstack-badge";

export default function TechStackPage() {
    return (
        <div className="px-2 py-4 space-y-2">
            {/* Header */}
            <div className="w-full mb-4 flex justify-between">
                <Button
                    variant="link"
                    asChild
                    className="text-muted-foreground cursor-pointer hover:no-underline hover:text-primary p-0 md:p-2 transition-colors"
                >
                    <a href="/">
                        <MoveLeft /> <span>Back to Home</span>
                    </a>
                </Button>

                <span className="text-muted-foreground">[Showing All Tech Stack]</span>
            </div>

            {/* Tech Stack Categories */}
            <div className="flex flex-col gap-6">
                {allTechStack.map((category) => (
                    <div key={category.label} className="flex flex-col gap-2">
                        <span className="text-muted-foreground uppercase font-bold">
                            {category.label}
                        </span>

                        <div className="ml-4 flex flex-wrap gap-2">
                            {category.items.map((tech) => (
                                <TechStackBadge key={tech} tech={tech} className="text-xs md:text-sm" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Accent text */}
            <div className="pt-8 md:pt-16 pb-8 overflow-hidden select-none">
                <p className="text-[clamp(2.5rem,10vw,5rem)] font-bold leading-none text-muted-foreground/20 whitespace-nowrap">
                    constantly learning
                </p>
            </div>
        </div>
    );
}
