import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import AnnouncementBar from "./sections/AnnouncementBar";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import QuickLinks from "./sections/QuickLinks";
import FeaturedProperties from "./sections/FeaturedProperties";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";
import OurJourney from "./sections/OurJourney";
import OurAchievements from "./sections/OurAchievements";
import NavigatingExperience from "./sections/NavigatingExperience";
import MeetTheTeam from "./sections/MeetTheTeam";
import ValuedClients from "./sections/ValuedClients";
import PropertiesHero from "./sections/PropertiesHero";
import DiscoverCategories from "./sections/DiscoverCategories";
import ContactForm from "./sections/ContactForm";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import { propertyCategories } from "./data/propertyCategories";
import ServicesHero from "./sections/ServicesHero";
import ServiceCategory from "./sections/ServiceCategory";
import {
  sellingServices,
  managementServices,
  investmentServices,
} from "./data/services";
import ContactHero from "./sections/ContactHero";
import ContactDetailsForm from "./sections/ContactDetailsForm";
import OfficeLocations from "./sections/OfficeLocations";
import ExploreGallery from "./sections/ExploreGallery";

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
  );
}

function AboutPage() {
  const values = [
    {
      image: propertyCategories[0].image,
      title: "Trust",
      description:
        "Trust is the cornerstone of every successful real estate transaction.",
    },
    {
      image: propertyCategories[1].image,
      title: "Excellence",
      description:
        "We set the bar high for ourselves. From the properties we list to the services we provide.",
    },
    {
      image: propertyCategories[2].image,
      title: "Client-Centric",
      description:
        "Your dreams and needs are at the center of our universe. We listen, understand.",
    },
    {
      image: propertyCategories[3].image,
      title: "Our Commitment",
      description:
        "We are dedicated to providing you with the highest level of service, professionalism.",
    },
  ];

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
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary.
            </p>
          </div>

          <div className="bg-[#151517] rounded-3xl p-6 grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title}>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={v.image}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
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
  );
}

function PropertiesPage() {
  return (
    <>
      <PropertiesHero />
      <DiscoverCategories />
      <ContactForm />
      <CTA />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <ServiceCategory
        heading="Unlock Property Value"
        description="Discover the expertise and strategies that help property owners achieve exceptional results."
        services={sellingServices}
        layout="grid-with-featured-right"
        featuredTitle="Unlock the Value of Your Property Today"
        featuredDescription="Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset."
      />

      <ServiceCategory
        heading="Effortless Property Management"
        description="Enjoy the benefits of property ownership while our experts handle the details."
        services={managementServices}
        layout="grid-with-featured-right"
        featuredTitle="Experience Effortless Property Management"
        featuredDescription="Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
      />

      <ServiceCategory
        heading="Smart Investments, Informed Decisions"
        description="Make informed real estate decisions with market intelligence and investment strategies built around your goals."
        services={investmentServices}
        layout="featured-left-with-grid"
        featuredTitle="Unlock Your Investment Potential"
        featuredDescription="Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
      />

      <CTA />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactDetailsForm />
      <OfficeLocations />
      <ExploreGallery />
      <CTA />
    </>
  );
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
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/properties/:id" element={<PropertyDetailPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
