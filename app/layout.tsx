import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip"
import { ThemeProvider } from "@/components/theme-provider"

const geistHeading = Geist({subsets:['latin'],variable:'--font-heading'});

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://stephencoloma.com"),
  title: {
    default: "Stephen Coloma - SWE",
    template: "%s | Stephen Coloma",
  },
  description:
    "Software engineer specifically building impactful web applications that solve real-world problems. Specialized in TypeScript, React, Node.js, and AWS.",
  keywords: [
    "Stephen Coloma",
    "Saint Louis University",
    "SLU",
    "Software Engineer",
    "Full Stack Developer",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "AWS",
    "Systems Engineer",
  ],
  authors: [{ name: "Stephen Coloma" }],
  creator: "Stephen Coloma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stephencoloma.com",
    title: "Stephen Coloma - SWE",
    description:
      "Software engineer specifically building impactful web applications that solve real-world problems. Specialized in TypeScript, React, Node.js, and AWS.",
    siteName: "Stephen Coloma Portfolio",
    images: [
      {
        url: "/images/banner.svg",
        width: 1200,
        height: 630,
        alt: "Stephen Coloma - SWE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stephen Coloma - SWE",
    description:
      "Software engineer specifically building impactful web applications that solve real-world problems. Specialized in TypeScript, React, Node.js, and AWS.",
    images: ["/images/banner.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable, geistHeading.variable, "scroll-smooth")}
    >
      <body className="antialiased">
        <ThemeProvider>
          <TooltipProvider>
            <div className="max-w-3xl mx-auto">
              {children}
            </div>
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
