import { useState } from "react"
import { faqs } from "../data/faqs"

function FAQ() {
  const [index, setIndex] = useState(0)
  const [expanded, setExpanded] = useState({})
  const perView = 3
  const total = faqs.length

  const visible = Array.from({ length: perView }).map(
    (_, offset) => faqs[(index + offset) % total]
  )

  const toggleExpanded = (question) => {
    setExpanded((prev) => ({ ...prev, [question]: !prev[question] }))
  }

  const goPrev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1))
  const goNext = () => setIndex((i) => (i === total - 1 ? 0 : i + 1))

  return (
    <section className="px-6 md:px-8 py-12 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 text-purple-500 text-sm mb-3">
        <span>✦</span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
      </div>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-sm max-w-xl">
            Find answers to common questions about Estatein's services, property listings,
            and the real estate process. We're here to provide clarity and assist you every
            step of the way.
          </p>
        </div>
        <button className="hidden md:block bg-[#151517] px-5 py-2.5 rounded-full text-sm whitespace-nowrap hover:bg-[#1e1e21]">
          View All FAQ's
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {visible.map((f) => (
          <div key={f.question} className="bg-[#151517] rounded-2xl p-6 flex flex-col">
            <h3 className="font-semibold mb-3">{f.question}</h3>
            <p className="text-gray-400 text-sm mb-6 flex-1">
              {expanded[f.question] ? f.fullAnswer : f.answer}
            </p>
            <button
              onClick={() => toggleExpanded(f.question)}
              className="border border-gray-700 px-4 py-2 rounded-full text-sm w-fit hover:bg-[#1e1e21]"
            >
              {expanded[f.question] ? "Show Less" : "Read More"}
            </button>
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
            className="w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center hover:bg-purple-700"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQ