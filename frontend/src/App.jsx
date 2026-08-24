import AnnouncementBar from "./sections/AnnouncementBar"
import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import FeaturedProperties from "./sections/FeaturedProperties"
import QuickLinks from "./sections/QuickLinks"
import Testimonials from "./sections/Testimonials"
import FAQ from "./sections/FAQ"
import CTA from "./sections/CTA"
import Footer from "./sections/Footer"

function App() {
  return (
    <div className="min-h-screen bg-[#0d0d0f] text-white">
      <AnnouncementBar />
      <Navbar />
      <Hero />
         <QuickLinks/>
      <FeaturedProperties />
      <Testimonials/>
      <FAQ />
      <CTA/>
       <Footer/>
    </div>
  )
}

export default App