import { useState } from "react"
import { clients } from "../data/clients"

function ValuedClients() {
  const [index, setIndex] = useState(0)
  const perView = 2
  const total = clients.length

  const visible = Array.from({ length: perView }).map(
    (_, offset) => clients[(index + offset) % total]
  )

  const goPrev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1))
  const goNext = () => setIndex((i) => (i === total - 1 ? 0 : i + 1))

  return (
    <section className="px-6 md:px-8 py-12 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 text-purple-500 text-sm mb-3">
        <span>✦</span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mb-3">Our Valued Clients</h2>
      <p className="text-gray-400 text-sm max-w-xl mb-8">
        At Estatein, we have had the privilege of working with a diverse range of
        clients across various industries. Here are some of the clients we've had
        the pleasure of serving.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {visible.map((c) => (
          <div key={c.name} className="border border-[#232326] rounded-2xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-xs text-gray-500 mb-1">{c.since}</div>
                <h3 className="font-semibold">{c.name}</h3>
              </div>
              <button className="bg-[#151517] px-4 py-2 rounded-full text-xs whitespace-nowrap hover:bg-[#1e1e21]">
                Visit Website
              </button>
            </div>

            <div className="flex gap-8 mb-4 text-xs">
              <div>
                <div className="text-gray-500 mb-1">Domain</div>
                <div>{c.domain}</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Category</div>
                <div>{c.category}</div>
              </div>
            </div>

            <div className="bg-[#151517] rounded-xl p-4">
              <div className="text-xs text-gray-500 mb-2">What They Said</div>
              <p className="text-sm text-gray-300">{c.quote}</p>
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

export default ValuedClients