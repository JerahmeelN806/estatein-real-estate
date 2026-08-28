function OurAchievements() {
  const achievements = [
    {
      title: "3+ Years of Excellence",
      description: "With over 3 years in the industry, we've amassed a wealth of knowledge and experience.",
    },
    {
      title: "Happy Clients",
      description: "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
    },
    {
      title: "Industry Recognition",
      description: "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
    },
  ]

  return (
    <section className="px-6 md:px-8 py-12 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 text-purple-500 text-sm mb-3">
        <span>✦</span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mb-3">Our Achievements</h2>
      <p className="text-gray-400 text-sm max-w-xl mb-8">
        Our story is one of continuous growth and evolution. We started as a small team
        with big dreams, determined to create a real estate platform that transcended
        the ordinary.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map((a) => (
          <div
            key={a.title}
            className="border border-[#232326] rounded-2xl p-6"
          >
            <h3 className="font-semibold mb-3">{a.title}</h3>
            <p className="text-gray-400 text-sm">{a.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurAchievements