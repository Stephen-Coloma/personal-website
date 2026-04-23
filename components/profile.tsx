'use client'

import Image from "next/image"
import { BadgeCheck, MapPin, Mail, AtSign, Phone, Hash } from "lucide-react"
import { Button } from "@/components/ui/button"
import CalcomEmbed from "./calcom-embed"
import Socials from "./socials"
import Link from "next/link"
import { toast } from "sonner"
import { 
  Tooltip, 
  TooltipContent, 
  TooltipTrigger 
} from "@/components/ui/tooltip"

export default function Profile() {
  // const handleViberClick = () => {
  //   toast.info("Opening Viber...", {
  //     description: "If it doesn't open, ensure Viber is installed.",
  //     duration: 5000,
  //   });
  // };

  return (
    <div className="flex flex-row md:flex-col gap-2 md:gap-1 items-center md:items-start">
      {/* Square Profile Image - Fixed width in mobile, Full Width in desktop */}
      <div className="relative aspect-square w-42 md:w-full shrink-0 overflow-hidden">
        <Image
          src="/images/profile-photo.png"
          alt="Stephen Coloma"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Profile Details - Flex-grow in mobile, Full Width in desktop */}
      <div className="flex-1 flex flex-col gap-1 md:w-full justify-center md:justify-start">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl md:text-lg font-semibold tracking-tighter">Stephen Coloma</h1>
            <BadgeCheck className="h-4 w-4 text-blue-500" strokeWidth={3}/>
          </div>
          <span className="text-sm text-muted-foreground">Full Stack Software Engineer</span>
        </div>

        <div className="flex items-center gap-1 text-muted-foreground">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Baguio City, Philippines</span>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          <AtSign className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">hello@stephencoloma.com</span>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          <Hash className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">(+63) 945 820 2981</span>
        </div>

        {/* Action Buttons */}
        <CalcomEmbed />

        {/* <div className="flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger asChild>              
              <Button variant="secondary" className="w-1/2 cursor-pointer justify-start" asChild onClick={handleViberClick}>
                <Link href="viber://chat?number=%2B639458202981" rel="noopener noreferrer">
                  <div className="relative w-4 h-4 mr-2">
                    <Image src="/images/viber.png" alt="Viber" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority className="object-contain" />
                  </div>
                  <span>Chat</span>
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium">
              <Mail className="h-3 w-3" />
              +63 945 820 2981
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="link" className="w-1/2 cursor-pointer" asChild>
                <Link href="mailto:hello@stephencoloma.com" rel="noopener noreferrer">
                  <span>Email me</span>
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium">
              <Mail className="h-3 w-3" />
              hello@stephencoloma.com
            </TooltipContent>
          </Tooltip>
        </div> */}

        {/* Socials in profile section for mobile */}
        <div className="md:hidden">
          <Socials />
        </div>
      </div>
    </div>
  )
}