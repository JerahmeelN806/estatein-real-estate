import { BrowserRouter, Routes, Route } from "react-router-dom"
import AnnouncementBar from "./sections/AnnouncementBar"
import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import QuickLinks from "./sections/QuickLinks"
import FeaturedProperties from "./sections/FeaturedProperties"
import Testimonials from "./sections/Testimonials"
import FAQ from "./sections/FAQ"
import CTA from "./sections/CTA"
import Footer from "./sections/Footer"
import OurJourney from "./sections/OurJourney"
import OurAchievements from "./sections/OurAchievements"
import NavigatingExperience from "./sections/NavigatingExperience"
import MeetTheTeam from "./sections/MeetTheTeam"
import ValuedClients from "./sections/ValuedClients"

function HomePage() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <FeaturedProperties />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  )
}

function AboutPage() {
  const values = [
    {
      icon: "★",
      title: "Trust",
      description: "Trust is the cornerstone of every successful real estate transaction.",
    },
    {
      icon: "🎓",
      title: "Excellence",
      description: "We set the bar high for ourselves. From the properties we list to the services we provide.",
    },
    {
      icon: "👥",
      title: "Client-Centric",
      description: "Your dreams and needs are at the center of our universe. We listen, understand.",
    },
    {
      icon: "★",
      title: "Our Commitment",
      description: "We are dedicated to providing you with the highest level of service, professionalism.",
    },
  ]

  return (
    <>
      <OurJourney />

      <section className="px-6 md:px-8 py-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-purple-500 text-sm mb-3">
          <span>✦</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-400 text-sm max-w-md">
              Our story is one of continuous growth and evolution. We started as a small team
              with big dreams, determined to create a real estate platform that transcended
              the ordinary.
            </p>
          </div>

          <div className="bg-[#151517] rounded-3xl p-6 grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400">
                    {v.icon}
                  </div>
                  <h3 className="font-semibold">{v.title}</h3>
                </div>
                <p className="text-gray-400 text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OurAchievements />
      <NavigatingExperience />
      <MeetTheTeam />
      <ValuedClients />
      <CTA />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0d0d0f] text-white">
        <AnnouncementBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App