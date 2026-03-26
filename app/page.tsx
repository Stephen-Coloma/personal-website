import ProfileSection from "@/components/profile-section";
import Socials from "@/components/socials";
import Navigation from "@/components/navigation";

export default function Page() {
  return (
    <main className="px-2 py-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 md:gap-4">

      {/* left side */}
      <section className="flex flex-col h-auto md:h-[calc(100vh-8rem)] md:sticky md:top-4 gap-4">
        {/* Navigation row for mobile (top), centered row for desktop (middle) */}
        <div className="order-1 md:order-2 md:flex-grow flex items-center justify-center md:items-center">
          <Navigation />
        </div>

        {/* Profile split for mobile (2nd), top for desktop (1st) */}
        <div className="order-2 md:order-1">
          <ProfileSection />
        </div>

        {/* Placed in profile section for mobile */}
        <div className="order-3 hidden md:block">
          <Socials />
        </div>
      </section> 

      {/* right side */}
      <section className="col-span-1 md:col-span-3 lg:col-span-4 border-blue-900 border">
        {/* Hero Section */}
        {/* About Section */}
        {/* Experience Section */}
        {/* Projects Section */}
        {/* Tech Stack Section */}
      </section>

    </main>
  )
}
