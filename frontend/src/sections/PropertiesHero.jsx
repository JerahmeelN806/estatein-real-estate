import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { propertyCategories } from "../data/propertyCategories";

function PropertiesHero() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("city") || "",
  );
  const [openFilter, setOpenFilter] = useState(null);

  const filters = [
    {
      label: "Location",
      key: "city",
      image: propertyCategories[0].image,
      options: ["Malibu", "New York", "Seattle", "Portland", "Miami"],
    },
    {
      label: "Property Type",
      key: "type",
      image: propertyCategories[1].image,
      options: ["APARTMENT", "HOUSE", "VILLA", "LAND"],
    },
    {
      label: "Pricing Range",
      key: "priceRange",
      image: propertyCategories[2].image,
      options: ["Under $500K", "$500K - $1M", "Over $1M"],
    },
    {
      label: "Property Size",
      key: "bedrooms",
      image: propertyCategories[3].image,
      options: [
        "1 bedroom",
        "2 bedrooms",
        "3 bedrooms",
        "4 bedrooms",
        "5 bedrooms",
      ],
    },
    {
      label: "Build Year",
      key: "status",
      image: propertyCategories[4].image,
      options: ["SALE", "RENT"],
    },
  ];

  const handleSearch = (event) => {
    event.preventDefault();
    const nextParams = new URLSearchParams(searchParams);

    if (searchQuery.trim()) nextParams.set("city", searchQuery.trim());
    else nextParams.delete("city");

    setSearchParams(nextParams);
  };

  const handleFilterChange = (filter, option) => {
    const nextParams = new URLSearchParams(searchParams);

    if (filter.key === "priceRange") {
      nextParams.delete("minPrice");
      nextParams.delete("maxPrice");
      if (option === "Under $500K") nextParams.set("maxPrice", "500000");
      if (option === "$500K - $1M") {
        nextParams.set("minPrice", "500000");
        nextParams.set("maxPrice", "1000000");
      }
      if (option === "Over $1M") nextParams.set("minPrice", "1000000");
    } else {
      const value = filter.key === "bedrooms" ? option.split(" ")[0] : option;
      nextParams.set(filter.key, value);
    }

    setSearchParams(nextParams);
    setOpenFilter(null);
  };

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
      <form
        className="mb-8 flex flex-col sm:flex-row gap-3"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          placeholder="Search For A Property"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 bg-[#151517] border border-gray-600 rounded-full px-6 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-600 transition-colors"
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 transition-colors px-8 py-3 rounded-full text-sm font-medium whitespace-nowrap flex items-center justify-center gap-2"
        >
          <img
            src={propertyCategories[0].image}
            alt=""
            className="w-5 h-5 rounded-full object-cover"
          />
          <span>Find Property</span>
        </button>
      </form>

      {/* Filter Dropdowns */}
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <div key={filter.label} className="relative">
            <button
              type="button"
              onClick={() =>
                setOpenFilter((current) =>
                  current === filter.key ? null : filter.key,
                )
              }
              className="bg-[#151517] border border-gray-600 rounded-full px-4 py-2.5 text-sm text-gray-300 hover:border-purple-600 transition-colors flex items-center gap-2"
            >
              <img
                src={filter.image}
                alt=""
                className="w-5 h-5 rounded-full object-cover"
              />
              <span>{filter.label}</span>
              <span className="text-xs">▼</span>
            </button>
            {openFilter === filter.key && (
              <div className="absolute left-0 top-full mt-2 min-w-full w-44 bg-[#151517] border border-gray-600 rounded-xl p-2 z-20 shadow-xl">
                {filter.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleFilterChange(filter, option)}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-[#232326] hover:text-white"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default PropertiesHero;
