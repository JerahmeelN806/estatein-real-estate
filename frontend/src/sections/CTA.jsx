function CTA() {
  return (
    <section className="px-6 md:px-8 py-12 max-w-7xl mx-auto">
      <div className="bg-[#151517] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Start Your Real Estate Journey Today
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl">
            Your dream property is just a click away. Whether you're looking for a new home,
            a strategic investment, or expert real estate advice, Estatein is here to assist
            you every step of the way. Take the first step towards your real estate goals
            and explore our available properties or get in touch with our team for
            personalized assistance.
          </p>
        </div>
        <button className="bg-purple-600 px-6 py-3 rounded-full text-sm whitespace-nowrap hover:bg-purple-700 w-full md:w-auto">
          Explore Properties
        </button>
      </div>
    </section>
  )
}

export default CTA