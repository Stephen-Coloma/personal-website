"use client"

import { MoveUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navigation() {
    const [activeSection, setActiveSection] = useState("about");

    // highlights the section that is currently in view
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px",
            threshold: 0,
        };

        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        // Observe all sections that have IDs matching our navigation
        const sectionIds = ["about", "experience", "projects", "tech-stack"];
        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const navItems = [
        { id: "about", label: "about" },
        { id: "experience", label: "experience" },
        { id: "projects", label: "projects" },
        { id: "tech-stack", label: "tech stack" },
    ];

    return (
        <div className="flex flex-row md:flex-col items-center md:items-end justify-center md:justify-end gap-2 md:gap-0 w-full">
            {navItems.map((item) => (
                <Button
                    key={item.id}
                    variant="link"
                    asChild
                    className={`${
                        activeSection === item.id ? "text-foreground" : "text-muted-foreground"
                    } cursor-pointer hover:no-underline hover:text-primary p-0 md:p-2 transition-colors`}
                >
                    <Link href={`#${item.id}`}>
                        <span>{item.label}</span> 
                        <MoveUpRight />
                    </Link>
                </Button>
            ))}
        </div>
    );
}