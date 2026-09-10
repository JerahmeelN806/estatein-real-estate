import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const properties = [
  {
    id: 1,
    title: "Seaside Serenity Villa",
    type: "Villa",
    city: "Miami",
    description:
      "A stunning villa offering breathtaking ocean views and luxurious living spaces.",
    fullDescription:
      "A stunning villa offering breathtaking ocean views, spacious interiors, modern finishes, and luxurious living spaces perfect for relaxing and entertaining.",
    price: 1250000,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Metropolitan Haven",
    type: "Apartment",
    city: "New York",
    description:
      "A modern apartment located in the heart of the city with premium amenities.",
    fullDescription:
      "A modern apartment located in the heart of the city with premium amenities, stylish interiors, and easy access to restaurants, shopping, and entertainment.",
    price: 850000,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Rustic Retreat Cottage",
    type: "House",
    city: "Aspen",
    description:
      "A peaceful countryside retreat surrounded by beautiful natural scenery.",
    fullDescription:
      "A peaceful countryside retreat surrounded by beautiful natural scenery, featuring cozy living spaces and a relaxing atmosphere away from the city.",
    price: 650000,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Modern Luxury Residence",
    type: "House",
    city: "Los Angeles",
    description:
      "A sophisticated residence featuring contemporary architecture and premium finishes.",
    fullDescription:
      "A sophisticated residence featuring contemporary architecture, premium finishes, spacious rooms, and a beautifully designed outdoor area.",
    price: 1450000,
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Urban Skyline Apartment",
    type: "Apartment",
    city: "Chicago",
    description:
      "A stylish city apartment with spectacular skyline views.",
    fullDescription:
      "A stylish city apartment with spectacular skyline views, contemporary interiors, and excellent access to everything the city has to offer.",
    price: 920000,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Elegant Family Villa",
    type: "Villa",
    city: "Orlando",
    description:
      "A spacious family villa combining comfort, privacy, and modern design.",
    fullDescription:
      "A spacious family villa combining comfort, privacy, modern design, beautiful landscaping, and generous living areas.",
    price: 1100000,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
];

function DiscoverCategories() {
  const sectionRef = useRef(null);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [expanded, setExpanded] = useState({});

  const perPage = 3;
  const totalPages = Math.ceil(properties.length / perPage);

  const visibleCategories = properties.slice(
    categoryIndex * perPage,
    categoryIndex * perPage + perPage,
  );

  const toggleExpanded = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const goPrev = () => {
    setCategoryIndex((current) =>
      current === 0 ? totalPages - 1 : current - 1,
    );
  };

  const goNext = () => {
    setCategoryIndex((current) =>
      current === totalPages - 1 ? 0 : current + 1,
    );
  };

  useLayoutEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(
      "[data-category-card]",
    );

    if (!cards?.length) return undefined;

    const context = gsap.context(() => {
      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.1,
        },
      );
    }, sectionRef);

    return () => context.revert();
  }, [categoryIndex]);

  return (
    <section
      ref={sectionRef}
      className="px-6 md:px-8 py-12 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className="flex items-center gap-2 text-purple-500 text-sm mb-3">
        <span>✦</span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        Discover a World of Possibilities
      </h2>

      <p className="text-gray-400 text-sm max-w-2xl mb-8">
        Our portfolio of properties is as diverse as your dreams. Explore the
        following categories to find the perfect property that resonates with
        your vision of home.
      </p>

      {/* Property Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {visibleCategories.map((category) => (
          <div
            key={category.id}
            data-category-card
            className="bg-[#151517] rounded-2xl overflow-hidden"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-48 object-cover rounded-2xl rounded-b-none"
            />

            <div className="p-5">
              <p className="text-xs text-gray-500 mb-2">
                {category.type} · {category.city}
              </p>

              <h3 className="text-lg font-semibold mb-3">
                {category.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {expanded[category.id]
                  ? category.fullDescription
                  : category.description}{" "}
                <button
                  type="button"
                  onClick={() => toggleExpanded(category.id)}
                  className="text-white underline"
                >
                  {expanded[category.id] ? "Show Less" : "Read More"}
                </button>
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500">Price</div>

                  <div className="font-semibold">
                    ${category.price.toLocaleString()}
                  </div>
                </div>

                <Link
                  to={`/properties/${category.id}`}
                  className="bg-purple-600 hover:bg-purple-700 transition-colors px-4 py-2.5 rounded-full text-sm whitespace-nowrap"
                >
                  View Property Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">
          {String(categoryIndex + 1).padStart(2, "0")} of{" "}
          {String(totalPages).padStart(2, "0")}
        </span>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={goPrev}
            className="w-9 h-9 rounded-full bg-[#151517] flex items-center justify-center hover:bg-[#1e1e21] transition-colors"
          >
            ←
          </button>

          <button
            type="button"
            onClick={goNext}
            className="w-9 h-9 rounded-full bg-[#151517] flex items-center justify-center hover:bg-[#1e1e21] transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default DiscoverCategories;