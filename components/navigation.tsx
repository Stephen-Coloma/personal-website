import { MoveUpRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Navigation() {
    return (
        <div className="flex flex-row md:flex-col items-center md:items-end justify-center md:justify-end gap-2 md:gap-0 w-full">
            <Button variant="link" asChild className="text-muted-foreground cursor-pointer text-sm hover:no-underline hover:text-primary p-0 md:p-2">
                <a href="#about">about <MoveUpRight /></a>
            </Button>
            <Button variant="link" asChild className="text-muted-foreground cursor-pointer text-sm hover:no-underline hover:text-primary p-0 md:p-2">
                <a href="#experience">experience <MoveUpRight /></a>
            </Button>
            <Button variant="link" asChild className="text-muted-foreground cursor-pointer text-sm hover:no-underline hover:text-primary p-0 md:p-2">
                <a href="#projects">projects <MoveUpRight /></a>
            </Button>
            <Button variant="link" asChild className="text-muted-foreground cursor-pointer text-sm hover:no-underline hover:text-primary p-0 md:p-2">
                <a href="#tech-stack">tech stack <MoveUpRight /></a>
            </Button>
        </div>
    )
}