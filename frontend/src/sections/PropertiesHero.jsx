import { useState } from "react";

function PropertiesHero() {
  const [searchQuery, setSearchQuery] = useState("");

  const filters = [
    { label: "Location", icon: "📍" },
    { label: "Property Type", icon: "🏠" },
    { label: "Pricing Range", icon: "💰" },
    { label: "Property Size", icon: "📐" },
    { label: "Build Year", icon: "📅" },
  ];

  return (
    <section className="px-6 md:px-8 py-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-2 text-purple-500 text-sm mb-3">
        <span>✦</span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Find Your Dream Property
      </h1>
      <p className="text-gray-400 text-sm max-w-2xl mb-10">
        Welcome to Estatein, where your dream property awaits in every corner of
        our beautiful world. Explore our curated selection of properties, each
        offering a unique story and a chance to redefine your life. With
        categories to suit every dreamer, your journey...
      </p>

      {/* Search Bar */}
      <div className="mb-8 flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search For A Property"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 bg-[#151517] border border-gray-600 rounded-full px-6 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors"
        />
        <button className="bg-purple-600 hover:bg-purple-700 transition-colors px-8 py-3 rounded-full text-sm font-medium whitespace-nowrap flex items-center justify-center gap-2">
          <span>🔍</span>
          <span>Find Property</span>
        </button>
      </div>

      {/* Filter Dropdowns */}
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter.label}
            className="bg-[#151517] border border-gray-600 rounded-full px-4 py-2.5 text-sm text-gray-300 hover:border-purple-600 transition-colors flex items-center gap-2"
          >
            <span>{filter.icon}</span>
            <span>{filter.label}</span>
            <span className="text-xs">▼</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default PropertiesHero;
