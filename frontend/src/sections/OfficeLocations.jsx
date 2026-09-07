import { useState } from "react";
import { offices } from "../data/offices";

function OfficeLocations() {
  const [activeTab, setActiveTab] = useState("all");
  const tabs = [
    { label: "All", value: "all" },
    { label: "Regional", value: "regional" },
    { label: "International", value: "international" },
  ];

  const visibleOffices =
    activeTab === "all"
      ? offices
      : offices.filter((office) => office.category === activeTab);

  return (
    <section className="px-6 md:px-8 py-12 max-w-7xl mx-auto">
      <div className="max-w-4xl mb-8">
        <div className="flex items-center gap-2 text-purple-500 text-sm mb-4">
          <span>✦</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Discover Our Office Locations
        </h2>
        <p className="text-gray-400 text-sm leading-6">
          Estatein is here to serve you across multiple locations. Whether
          you&apos;re looking to meet our team, discuss real estate
          opportunities, or simply drop by for a chat, we have offices
          conveniently located to serve your needs. Explore the categories to
          find the Estatein office nearest to you
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setActiveTab(tab.value)}
            className={`px-5 py-2.5 rounded-full text-sm transition-colors ${
              activeTab === tab.value
                ? "bg-purple-600 text-white"
                : "bg-[#151517] text-gray-400 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {visibleOffices.map((office) => (
          <article
            key={`${office.city}-${office.category}`}
            className="bg-[#151517] border border-[#232326] rounded-2xl p-6"
          >
            <p className="text-sm text-gray-500 mb-3">{office.label}</p>
            <h3 className="text-xl font-bold mb-3">{office.address}</h3>
            <p className="text-gray-400 text-sm leading-6 mb-6">
              {office.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-6 text-xs text-gray-300">
              <span className="bg-[#0d0d0f] rounded-full px-3 py-2">
                @ {office.email}
              </span>
              <span className="bg-[#0d0d0f] rounded-full px-3 py-2">
                ☎ {office.phone}
              </span>
              <span className="bg-[#0d0d0f] rounded-full px-3 py-2">
                ⌖ {office.city}
              </span>
            </div>

            <button
              type="button"
              className="w-full bg-purple-600 hover:bg-purple-700 transition-colors rounded-full py-3 text-sm font-medium"
            >
              Get Direction
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default OfficeLocations;
