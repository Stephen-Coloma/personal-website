import Image from "next/image"
import { BadgeCheck, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import CalcomEmbed from "./calcom-embed"

export default function ProfileSection() {
  return (
    <div className="flex flex-col gap-1">
      {/* Square Profile Image - Full Width of the left side */}
      <div className="relative aspect-square w-full overflow-hidden bg-muted group">
        <Image
          src="/images/profile-photo.png"
          alt="Stephen Coloma"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Profile Details with Spacing */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1 text-foreground">
          <h1 className="text-lg font-semibold tracking-tighter">Stephen Coloma</h1>
          <BadgeCheck className="h-4 w-4 text-blue-500" />
        </div>

        <div className="flex items-center gap-1">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-muted-foreground tracking-tighter">Baguio City, Philippines</span>
        </div>

        {/* Action Buttons */}
        <CalcomEmbed />

        <div className="flex items-center">
          <Button variant="secondary" className="w-1/2 cursor-pointer justify-start">
            <div className="relative w-4 h-4 mr-2">
              <Image src="/images/vibers.png" alt="Chat" fill className="object-contain" />
            </div>
            <span className="text-sm font-medium tracking-tighter">Chat</span>
          </Button>

          <Button variant="link" className="w-1/2 cursor-pointer">
            <span className="text-sm font-medium tracking-tighter">Email me</span>
          </Button>
        </div>
      </div>
    </div>
  )
}