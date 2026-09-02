import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { propertyCategories } from "../data/propertyCategories";

function DiscoverCategories() {
  const sectionRef = useRef(null);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [expanded, setExpanded] = useState({});
  const perPage = 3;
  const totalPages = Math.ceil(propertyCategories.length / perPage);

  const visibleCategories = propertyCategories.slice(
    categoryIndex * perPage,
    categoryIndex * perPage + perPage,
  );

  const toggleExpanded = (title) => {
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const goPrev = () =>
    setCategoryIndex((p) => (p === 0 ? totalPages - 1 : p - 1));
  const goNext = () =>
    setCategoryIndex((p) => (p === totalPages - 1 ? 0 : p + 1));

  useLayoutEffect(() => {
    const cards = sectionRef.current?.querySelectorAll("[data-category-card]");

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
    <section ref={sectionRef} className="px-6 md:px-8 py-12 max-w-7xl mx-auto">
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

      {/* Category Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {visibleCategories.map((category) => (
          <div
            key={category.title}
            data-category-card
            className="bg-[#151517] rounded-2xl overflow-hidden"
          >
            {/* Image */}
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-48 object-cover rounded-2xl rounded-b-none"
            />

            {/* Content */}
            <div className="p-5">
              {/* Tag */}
              <p className="text-xs text-gray-500 mb-2">{category.tag}</p>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3">{category.title}</h3>

              {/* Description with Read More toggle */}
              <p className="text-gray-400 text-sm mb-4">
                {expanded[category.title]
                  ? category.fullDescription
                  : category.description}{" "}
                <button
                  onClick={() => toggleExpanded(category.title)}
                  className="text-white underline"
                >
                  {expanded[category.title] ? "Show Less" : "Read More"}
                </button>
              </p>

              {/* Price and Button */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500">Price</div>
                  <div className="font-semibold">{category.price}</div>
                </div>
                <Link
                  to="/properties"
                  className="bg-purple-600 hover:bg-purple-700 transition-colors px-4 py-2.5 rounded-full text-sm whitespace-nowrap"
                >
                  View Property Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">
          {String(categoryIndex + 1).padStart(2, "0")} of{" "}
          {String(totalPages).padStart(2, "0")}
        </span>
        <div className="flex gap-2">
          <button
            onClick={goPrev}
            className="w-9 h-9 rounded-full bg-[#151517] flex items-center justify-center hover:bg-[#1e1e21] transition-colors"
          >
            ←
          </button>
          <button
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
