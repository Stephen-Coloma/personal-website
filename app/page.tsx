import ProfileSection from "@/components/profile-section";
import Socials from "@/components/socials";

export default function Page() {
  return (
    <main className="px-2 py-4 grid grid-cols-1 md:grid-cols-5 md:gap-4">
      {/* left side */}
      <section className="flex flex-col h-auto md:h-[calc(100vh-10rem)] md:sticky md:top-4">
        <ProfileSection />

        {/* <div className="flex-grow flex items-center justify-center">
          
        </div> */}

        <Socials />
      </section>

      {/* right side */}
      <section className="col-span-1 md:col-span-4 border-blue-900 border">
        {/* Hero Section */}
        {/* About Section */}
        {/* Experience Section */}
        {/* Projects Section */}
        {/* Tech Stack Section */}
      </section>
    </main>
  )
}
