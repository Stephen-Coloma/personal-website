"use client"

import * as React from "react"
import { Download, ExternalLink, } from "lucide-react"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "./ui/dialog"
import { Button } from "./ui/button"

interface ResumeViewerProps {
  children: React.ReactNode
}

export default function ResumeViewer({ children }: ResumeViewerProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="w-full h-[90vh] sm:max-w-3xl lg:max-w-5xl p-0 gap-0 overflow-hidden shadow-2xl flex flex-col">
        {/* Premium Header/Toolbar */}
        <DialogHeader className="p-4 gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-2">
              <span className="text-primary font-bold text-xs">PDF</span>
            </div>
            <div>
              <DialogTitle className="text-sm font-semibold tracking-tight">
                stephen_coloma_resume.pdf
              </DialogTitle>
              <p className="text-xs text-muted-foreground font-medium">Last updated: March 2026</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              className="cursor-pointer text-sm font-medium tracking-tighter"
              asChild
            >
              <a href="/stephen_coloma_resume.pdf" target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                Open Original
              </a>
            </Button>
            
            <Button 
              className="cursor-pointer text-sm font-medium tracking-tighter"
              asChild
            >
              <a href="/stephen_coloma_resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download
              </a>
            </Button>
          </div>
        </DialogHeader>

        {/* The Viewer Container */}
        <div className="w-full h-full relative group">          
          <iframe 
            src="/stephen_coloma_resume.pdf#toolbar=0&navpanes=0&scrollbar=0" 
            className="w-full h-full border-none grayscale-[0.1] contrast-[1.05]"
            title="Resume Viewer"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
