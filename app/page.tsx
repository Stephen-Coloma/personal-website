import ProfileSection from "@/components/profile-section";
import Socials from "@/components/socials";
import Navigation from "@/components/navigation";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";

export default function Page() {
  return (
    <>
      {/* Mobile sticky nav bar — hidden on desktop */}
      <div className="md:hidden sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border px-4 py-2">
        <Navigation />
      </div>

      <main className="px-2 py-4 grid grid-cols-1 md:grid-cols-4 md:gap-4">

      {/* left side */}
      <section className="flex flex-col h-auto md:h-[calc(100vh-8rem)] md:sticky md:top-4 gap-4">

        <ProfileSection />
        
        {/* Navigation — hidden on mobile (handled by sticky bar above), visible on desktop */}
        <div className="hidden md:flex md:flex-grow items-center justify-center md:items-center">
          <Navigation />
        </div>

        {/* Placed in profile section for mobile -handled by profile section component */}
        <div className="hidden md:block">
          <Socials />
        </div>
      </section> 

      {/* right side */}
      <section className="col-span-1 md:col-span-3 space-y-8">
        <About />
        <Experience />
        <Projects />
        {/* todo: Hero Section */}
        {/* todo: Tech Stack Section */}
        {/* todo: footer section */}
      </section>

    </main>
    </>
  )
}
