import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden">
            {/* Image container */}
            <div className="relative w-full h-40 md:h-72">
                <Image
                    src="/images/profile-photo.png"
                    alt="Footer background"
                    fill
                    className="object-cover object-top"
                    priority
                />

                {/* Fade overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-transparent" />
            </div>

            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 px-2 pb-2 select-none pointer-events-none">
                <span className="text-[clamp(5rem,22vw,12rem)] font-bold leading-none tracking-tighter text-primary whitespace-nowrap">
                    build.
                </span>
            </div>
        </footer>
    );
}