import { MoveUpRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Navigation() {
    return (
        <div className="flex flex-col w-full items-end">
            <Button variant="link" className="text-muted-foreground cursor-pointer text-sm font-medium tracking-tighter hover:no-underline hover:text-primary">about <MoveUpRight /></Button>
            <Button variant="link" className="text-muted-foreground cursor-pointer text-sm font-medium tracking-tighter hover:no-underline hover:text-primary">experience <MoveUpRight /></Button>
            <Button variant="link" className="text-muted-foreground cursor-pointer text-sm font-medium tracking-tighter hover:no-underline hover:text-primary">projects <MoveUpRight /></Button>
            <Button variant="link" className="text-muted-foreground cursor-pointer text-sm font-medium tracking-tighter hover:no-underline hover:text-primary">tech stack <MoveUpRight /></Button>
        </div>
    )
}