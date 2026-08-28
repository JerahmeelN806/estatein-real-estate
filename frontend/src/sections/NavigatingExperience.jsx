function NavigatingExperience() {
  const steps = [
    {
      step: "Step 01",
      title: "Discover a World of Possibilities",
      description: "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location.",
    },
    {
      step: "Step 02",
      title: "Narrowing Down Your Choices",
      description: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
    },
    {
      step: "Step 03",
      title: "Personalized Guidance",
      description: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
    },
    {
      step: "Step 04",
      title: "See It for Yourself",
      description: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
    },
    {
      step: "Step 05",
      title: "Making Informed Decisions",
      description: "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed.",
    },
    {
      step: "Step 06",
      title: "Getting the Best Deal",
      description: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
    },
  ]

  return (
    <section className="px-6 md:px-8 py-12 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 text-purple-500 text-sm mb-3">
        <span>✦</span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mb-3">Navigating the Estatein Experience</h2>
      <p className="text-gray-400 text-sm max-w-xl mb-8">
        At Estatein, we've designed a straightforward process to help you find and
        purchase your dream property with ease. Here's a step-by-step guide to how
        it all works.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((s) => (
          <div
            key={s.step}
            className="relative bg-[#151517] rounded-2xl p-6 pl-7 overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-600" />
            <div className="text-xs text-gray-500 mb-3">{s.step}</div>
            <h3 className="font-semibold mb-3">{s.title}</h3>
            <p className="text-gray-400 text-sm">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NavigatingExperience