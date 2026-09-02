import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link, useParams } from "react-router-dom";
import { properties } from "../data/properties";

function PropertyDetailPage() {
  const { id } = useParams();
  const pageRef = useRef(null);
  const property = properties.find((item) => item.id === Number(id));
  const [currentIndex, setCurrentIndex] = useState(0);

  useLayoutEffect(() => {
    if (!property) return undefined;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .from("[data-detail-header]", { autoAlpha: 0, y: 24, duration: 0.6 })
        .from(
          "[data-detail-gallery]",
          { autoAlpha: 0, y: 30, duration: 0.7 },
          "-=0.35",
        )
        .from(
          "[data-detail-content]",
          { autoAlpha: 0, y: 24, duration: 0.6 },
          "-=0.35",
        );
    }, pageRef);

    return () => context.revert();
  }, [id, property]);

  if (!property) {
    return (
      <main className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <h1 className="text-3xl font-bold mb-4">Property not found</h1>
        <Link
          to="/properties"
          className="text-purple-400 hover:text-purple-300"
        >
          Back to properties
        </Link>
      </main>
    );
  }

  const gallery = property.gallery;
  const featuredImages = [
    gallery[currentIndex % gallery.length],
    gallery[(currentIndex + 1) % gallery.length],
  ];

  const goPrevious = () =>
    setCurrentIndex((index) => (index === 0 ? gallery.length - 1 : index - 1));
  const goNext = () => setCurrentIndex((index) => (index + 1) % gallery.length);

  return (
    <main
      ref={pageRef}
      className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-16"
    >
      <header
        data-detail-header
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8"
      >
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            {property.title}
          </h1>
          <p className="text-sm text-gray-400">
            <span className="text-purple-400 mr-2">⌖</span>
            {property.city}
          </p>
        </div>
        <div className="md:text-right">
          <p className="text-xs text-gray-500 mb-1">Price</p>
          <p className="text-2xl font-bold">{property.price}</p>
        </div>
      </header>

      <section data-detail-gallery aria-label={`${property.title} gallery`}>
        <div className="flex gap-3 overflow-x-auto pb-4">
          {gallery.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`shrink-0 rounded-xl overflow-hidden border-2 ${
                index === currentIndex
                  ? "border-purple-500"
                  : "border-transparent"
              }`}
              aria-label={`Show gallery image ${index + 1}`}
            >
              <img src={image} alt="" className="w-24 h-16 object-cover" />
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {featuredImages.map((image, index) => (
            <img
              key={`${image}-${index}`}
              src={image}
              alt={`${property.title} view ${index + 1}`}
              className={`${index === 1 ? "hidden md:block" : ""} w-full h-72 md:h-[30rem] object-cover rounded-2xl`}
            />
          ))}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="hidden md:flex items-center gap-2">
            {gallery.map((image, index) => (
              <span
                key={image}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 bg-purple-500"
                    : "w-1.5 bg-gray-600"
                }`}
              />
            ))}
          </div>
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous images"
              className="w-10 h-10 rounded-full bg-[#151517] hover:bg-[#222225] text-lg"
            >
              ←
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next images"
              className="w-10 h-10 rounded-full bg-[#151517] hover:bg-[#222225] text-lg"
            >
              →
            </button>
          </div>
        </div>
      </section>

      <section
        data-detail-content
        className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-14"
      >
        <div>
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p className="text-gray-400 leading-7">{property.fullDescription}</p>
          <div className="grid grid-cols-3 border-y border-[#29292d] mt-8 py-5">
            <div className="border-r border-[#29292d] pr-3">
              <p className="text-xs text-gray-500 mb-2">
                <span className="mr-2">🛏</span>Bedrooms
              </p>
              <p className="font-semibold">{property.beds}</p>
            </div>
            <div className="border-r border-[#29292d] px-3">
              <p className="text-xs text-gray-500 mb-2">
                <span className="mr-2">🛁</span>Bathrooms
              </p>
              <p className="font-semibold">{property.baths}</p>
            </div>
            <div className="pl-3">
              <p className="text-xs text-gray-500 mb-2">
                <span className="mr-2">⌗</span>Area
              </p>
              <p className="font-semibold">{property.area}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Key Features and Amenities
          </h2>
          <ul className="border border-[#29292d] rounded-2xl divide-y divide-[#29292d]">
            {property.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 items-start p-4 text-gray-300"
              >
                <span className="text-purple-400 text-lg leading-5">✦</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default PropertyDetailPage;
