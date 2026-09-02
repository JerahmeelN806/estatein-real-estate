import { useState } from "react";
import { Link } from "react-router-dom";
import { properties as allProperties } from "../data/properties";

function FeaturedProperties() {
  const [page, setPage] = useState(0);
  const [expanded, setExpanded] = useState({});
  const perPage = 3;
  const totalPages = Math.ceil(allProperties.length / perPage);

  const visibleProperties = allProperties.slice(
    page * perPage,
    page * perPage + perPage,
  );

  const toggleExpanded = (title) => {
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const goPrev = () => setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  const goNext = () => setPage((p) => (p === totalPages - 1 ? 0 : p + 1));

  return (
    <section className="px-6 md:px-8 py-12 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 text-purple-500 text-sm mb-3">
        <span>✦</span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Featured Properties
        </h2>
        <p className="text-gray-400 text-sm max-w-xl">
          Explore our handpicked selection of featured properties. Each listing
          offers a glimpse into exceptional homes and investments available
          through Estatein. Click "View Details" for more information.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {visibleProperties.map((p) => (
          <div
            key={p.title}
            className="bg-[#151517] rounded-2xl overflow-hidden"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold mb-1">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-4">
                {expanded[p.title] ? p.fullDescription : p.description}{" "}
                <button
                  onClick={() => toggleExpanded(p.title)}
                  className="text-white underline"
                >
                  {expanded[p.title] ? "Show Less" : "Read More"}
                </button>
              </p>

              <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-300">
                <span className="bg-[#0d0d0f] px-3 py-1.5 rounded-full flex items-center gap-1">
                  🛏 {p.beds}-Bedroom
                </span>
                <span className="bg-[#0d0d0f] px-3 py-1.5 rounded-full flex items-center gap-1">
                  🛁 {p.baths}-Bathroom
                </span>
                <span className="bg-[#0d0d0f] px-3 py-1.5 rounded-full flex items-center gap-1">
                  🏠 {p.type}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500">Price</div>
                  <div className="font-semibold">{p.price}</div>
                </div>
                <Link
                  to={`/properties/${p.id}`}
                  className="bg-purple-600 px-4 py-2.5 rounded-full text-sm hover:bg-purple-700"
                >
                  View Property Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button className="w-full md:hidden bg-[#151517] px-5 py-3 rounded-full text-sm hover:bg-[#1e1e21] mb-4">
          View All Properties
        </button>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">
            {String(page + 1).padStart(2, "0")} of{" "}
            {String(totalPages).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            <button
              onClick={goPrev}
              className="w-9 h-9 rounded-full bg-[#151517] flex items-center justify-center hover:bg-[#1e1e21]"
            >
              ←
            </button>
            <button
              onClick={goNext}
              className="w-9 h-9 rounded-full bg-[#151517] flex items-center justify-center hover:bg-[#1e1e21]"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;
