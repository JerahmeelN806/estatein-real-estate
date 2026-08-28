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
        {/* Image - first on mobile, second column on desktop */}
        <div className="relative order-1 md:order-2">
          <img
            src={house}
            alt="House model"
            className="rounded-2xl w-full h-[300px] md:h-[350px] object-cover"
          />
        </div>

        {/* Text content - second on mobile, first column on desktop */}
        <div className="order-2 md:order-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-8 md:mt-0">Our Journey</h1>
          <p className="text-gray-400 text-sm mb-8 max-w-md">
            Our story is one of continuous growth and evolution. We started as a small team
            with big dreams, determined to create a real estate platform that transcended
            the ordinary. Over the years, we've expanded our reach, forged valuable
            partnerships, and gained the trust of countless clients.
          </p>
          <div className="grid grid-cols-2 gap-4 max-w-md">
            <div className="bg-[#151517] rounded-xl p-4">
              <div className="text-xl font-bold">{stats[0][0]}</div>
              <div className="text-xs text-gray-400 mt-1">{stats[0][1]}</div>
            </div>
            <div className="bg-[#151517] rounded-xl p-4">
              <div className="text-xl font-bold">{stats[1][0]}</div>
              <div className="text-xs text-gray-400 mt-1">{stats[1][1]}</div>
            </div>
            <div className="col-span-2 md:col-span-1 bg-[#151517] rounded-xl p-4 text-center md:text-left">
              <div className="text-xl font-bold">{stats[2][0]}</div>
              <div className="text-xs text-gray-400 mt-1">{stats[2][1]}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurJourney