import Image from "next/image"
import { BadgeCheck, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import CalcomEmbed from "./calcom-embed"
import Socials from "./socials"

export default function ProfileSection() {
  return (
    <div className="flex flex-row md:flex-col gap-4 md:gap-1">
      {/* Square Profile Image - 1/2 in mobile, Full Width in desktop */}
      <div className="relative aspect-square w-1/2 md:w-full overflow-hidden">
        <Image
          src="/images/profile-photo.png"
          alt="Stephen Coloma"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Profile Details - 1/2 in mobile, Full Width in desktop */}
      <div className="flex flex-col gap-2 w-1/2 md:w-full justify-center md:justify-start">
        <div className="flex items-center gap-2 text-foreground">
          <h1 className="text-xl md:text-lg font-semibold tracking-tighter">Stephen Coloma</h1>
          <BadgeCheck className="h-4 w-4 text-blue-500" />
        </div>

        <div className="flex items-center gap-1 text-muted-foreground">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span>Baguio City, Philippines</span>
        </div>

        {/* Action Buttons */}
        <CalcomEmbed />

        <div className="flex items-center gap-1">
          <Button variant="secondary" className="w-1/2 cursor-pointer justify-start" asChild>
            <a href="viber://chat?number=%2B639458202981" rel="noopener noreferrer">
              <div className="relative w-4 h-4 mr-2">
                <Image src="/images/viber.png" alt="Viber" fill className="object-contain" />
              </div>
              <span>Chat</span>
            </a>
          </Button>

          <Button variant="link" className="w-1/2 cursor-pointer" asChild>
            <a href="mailto:hello@stephencoloma.com" rel="noopener noreferrer">
              <span>Email me</span>
            </a>
          </Button>
        </div>

        {/* Socials in profile section for mobile */}
        <div className="md:hidden">
          <Socials />
        </div>
      </div>
    </div>
  )
}