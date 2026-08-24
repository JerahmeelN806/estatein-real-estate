import images1 from '../assets/images/Image1.png'

function Hero() {
  const stats = [
    ["200+", "Happy Customers"],
    ["10k+", "Properties For Clients"],
    ["16+", "Years of Experience"],
  ]

  return (
    <section className="px-6 md:px-8 py-8 md:py-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      {/* Image - first on mobile, second column on desktop */}
      <div className="relative flex justify-center md:justify-end order-1 md:order-2">
        <div className="relative w-full max-w-md">
          <img
            src={images1}
            alt="Building"
            className="rounded-2xl w-full object-cover h-[300px] md:h-[420px]"
          />
          <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 w-20 h-20 md:w-24 md:h-24 bg-black/80 backdrop-blur rounded-full flex items-center justify-center border border-white/20">
            <span className="text-xl md:text-2xl">↗</span>
          </div>
        </div>
      </div>

      {/* Text content - second on mobile, first column on desktop */}
      <div className="order-2 md:order-1">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 mt-10 md:mt-0">
          Discover Your Dream Property with Estatein
        </h1>
        <p className="text-gray-400 mb-8 max-w-md text-sm md:text-base">
          Your journey to finding the perfect property begins here. Explore our
          listings to find the home that matches your dreams.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <button className="border border-gray-600 px-6 py-3 rounded-full text-sm hover:bg-[#151517] w-full md:w-auto">
            Learn More
          </button>
          <button className="bg-purple-600 px-6 py-3 rounded-full text-sm hover:bg-purple-700 w-full md:w-auto">
            Browse Properties
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-md">
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
    </section>
  )
}

export default Hero