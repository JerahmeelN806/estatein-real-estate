import { useState } from "react"
import { testimonials } from "../data/testimonials"

function Testimonials() {
  const [index, setIndex] = useState(0)
  const perView = 3
  const total = testimonials.length

  const visible = Array.from({ length: perView }).map(
    (_, offset) => testimonials[(index + offset) % total]
  )

  const goPrev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1))
  const goNext = () => setIndex((i) => (i === total - 1 ? 0 : i + 1))

  return (
    <section className="px-6 md:px-8 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">What Our Clients Say</h2>
          <p className="text-gray-400 text-sm max-w-xl">
            Read the success stories and heartfelt testimonials from our valued clients.
            Discover why they chose Estatein for their real estate needs.
          </p>
        </div>
        <button className="hidden md:block bg-[#151517] px-5 py-2.5 rounded-full text-sm whitespace-nowrap hover:bg-[#1e1e21]">
          View All Testimonials
        </button>
      </div>

      <div className="w-10 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto my-6" />

      <div className="grid md:grid-cols-3 gap-6">
        {visible.map((t) => (
          <div key={t.name} className="bg-[#151517] rounded-2xl p-6">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
            <h3 className="font-semibold mb-2">{t.title}</h3>
            <p className="text-gray-400 text-sm mb-6">{t.quote}</p>
            <div className="flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-xs text-gray-500">{t.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-8">
        <span className="text-xs text-gray-500">
          {String(index + 1).padStart(2, "0")} of {String(total).padStart(2, "0")}
        </span>
        <div className="flex gap-2">
          <button
            onClick={goPrev}
            className="w-9 h-9 rounded-full bg-[#151517] flex items-center justify-center hover:bg-[#1e1e21]"
          >
            ←
          </button>
          <button
            onClick={goNext}
            className="w-9 h-9 rounded-full bg-[#151517] flex items-center justify-center hover:bg-[#1e1e21]"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials