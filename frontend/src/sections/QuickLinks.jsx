import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { propertyCategories } from "../data/propertyCategories"

gsap.registerPlugin(ScrollTrigger)

function QuickLinks() {
  const sectionRef = useRef(null)

  const items = [
    { image: propertyCategories[0].image, label: "Find Your Dream Home" },
    { image: propertyCategories[1].image, label: "Unlock Property Value" },
    {
      image: propertyCategories[2].image,
      label: "Effortless Property Management",
    },
    {
      image: propertyCategories[3].image,
      label: "Smart Investments, Informed Decisions",
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.quick-link-card'),
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="px-6 md:px-8 py-6 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="quick-link-card bg-[#151517] rounded-2xl p-5 relative hover:bg-[#1a1a1d] cursor-pointer"
        >
          <span className="absolute top-4 right-4 text-gray-500 text-sm">
            ↗
          </span>
          <img
            src={item.image}
            alt=""
            className="w-10 h-10 rounded-full object-cover mb-6"
          />
          <p className="text-sm">{item.label}</p>
        </div>
      ))}
    </section>
  )
}

export default QuickLinks