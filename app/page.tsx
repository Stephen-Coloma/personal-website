import ProfileSection from "@/components/profile-section";

export default function Page() {
  return (
    <main className="px-2 py-4 grid grid-cols-1 md:grid-cols-5 md:gap-4">
      {/* left side */}
      <section className="h-auto md:h-screen md:sticky md:top-0">
        <ProfileSection />
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
