import house from '../assets/images/house.png'

function OurJourney() {
  const stats = [
    ["200+", "Happy Customers"],
    ["10k+", "Properties For Clients"],
    ["16+", "Years of Experience"],
  ]

  return (
    <section className="px-6 md:px-8 py-12 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 text-purple-500 text-sm mb-3">
        <span>✦</span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h1>
          <p className="text-gray-400 text-sm mb-8 max-w-md">
            Our story is one of continuous growth and evolution. We started as a small team
            with big dreams, determined to create a real estate platform that transcended
            the ordinary. Over the years, we've expanded our reach, forged valuable
            partnerships, and gained the trust of countless clients.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-md">
            {stats.map(([num, label]) => (
              <div key={label} className="bg-[#151517] rounded-xl p-4">
                <div className="text-xl font-bold">{num}</div>
                <div className="text-xs text-gray-400 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src={house}
            alt="House model"
            className="rounded-2xl w-full h-[350px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default OurJourney