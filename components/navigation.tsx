import { MoveUpRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Navigation() {
    return (
        <div className="flex flex-row md:flex-col items-center md:items-end justify-center md:justify-end gap-2 md:gap-0 w-full">
            <Button variant="link" className="text-muted-foreground cursor-pointer text-sm hover:no-underline hover:text-primary p-0 md:p-2">about <MoveUpRight /></Button>
            <Button variant="link" className="text-muted-foreground cursor-pointer text-sm hover:no-underline hover:text-primary p-0 md:p-2">experience <MoveUpRight /></Button>
            <Button variant="link" className="text-muted-foreground cursor-pointer text-sm hover:no-underline hover:text-primary p-0 md:p-2">projects <MoveUpRight /></Button>
            <Button variant="link" className="text-muted-foreground cursor-pointer text-sm hover:no-underline hover:text-primary p-0 md:p-2">tech stack <MoveUpRight /></Button>
        </div>
    )
}