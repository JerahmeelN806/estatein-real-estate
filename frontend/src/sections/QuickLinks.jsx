function QuickLinks() {
  const items = [
    { icon: "🏠", label: "Find Your Dream Home" },
    { icon: "💎", label: "Unlock Property Value" },
    { icon: "🏢", label: "Effortless Property Management" },
    { icon: "☀️", label: "Smart Investments, Informed Decisions" },
  ]

  return (
    <section className="px-6 md:px-8 py-6 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="bg-[#151517] rounded-2xl p-5 relative hover:bg-[#1a1a1d] cursor-pointer"
        >
          <span className="absolute top-4 right-4 text-gray-500 text-sm">↗</span>
          <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center mb-6 text-lg">
            {item.icon}
          </div>
          <p className="text-sm">{item.label}</p>
        </div>
      ))}
    </section>
  )
}

export default QuickLinks