import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { animate, motion, useMotionValue, useReducedMotion } from "framer-motion";

const properties = [
  {
    id: 1,
    title: "Seaside Serenity Villa",
    description:
      "A stunning villa offering breathtaking ocean views and luxurious living spaces.",
    fullDescription:
      "A stunning villa offering breathtaking ocean views, spacious interiors, modern finishes, and luxurious living spaces perfect for relaxing and entertaining.",
    price: "$1,250,000",
    type: "Villa",
    city: "Miami",
    bedrooms: 4,
    bathrooms: 3,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Metropolitan Haven",
    description:
      "A modern apartment located in the heart of the city with premium amenities.",
    fullDescription:
      "A modern apartment located in the heart of the city with premium amenities, stylish interiors, and easy access to restaurants, shopping, and entertainment.",
    price: "$850,000",
    type: "Apartment",
    city: "New York",
    bedrooms: 3,
    bathrooms: 2,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Rustic Retreat Cottage",
    description:
      "A peaceful countryside retreat surrounded by beautiful natural scenery.",
    fullDescription:
      "A peaceful countryside retreat surrounded by beautiful natural scenery, featuring cozy living spaces and a relaxing atmosphere away from the city.",
    price: "$650,000",
    type: "House",
    city: "Aspen",
    bedrooms: 3,
    bathrooms: 2,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Modern Luxury Residence",
    description:
      "A sophisticated residence featuring contemporary architecture and premium finishes.",
    fullDescription:
      "A sophisticated residence featuring contemporary architecture, premium finishes, spacious rooms, and a beautifully designed outdoor area.",
    price: "$1,450,000",
    type: "House",
    city: "Los Angeles",
    bedrooms: 5,
    bathrooms: 4,
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Urban Skyline Apartment",
    description:
      "A stylish city apartment with spectacular skyline views.",
    fullDescription:
      "A stylish city apartment with spectacular skyline views, contemporary interiors, and excellent access to everything the city has to offer.",
    price: "$920,000",
    type: "Apartment",
    city: "Chicago",
    bedrooms: 3,
    bathrooms: 2,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Elegant Family Villa",
    description:
      "A spacious family villa combining comfort, privacy, and modern design.",
    fullDescription:
      "A spacious family villa combining comfort, privacy, modern design, beautiful landscaping, and generous living areas.",
    price: "$1,100,000",
    type: "Villa",
    city: "Orlando",
    bedrooms: 4,
    bathrooms: 3,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
];

function FeaturedProperties() {
  const [expanded, setExpanded] = useState({});
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || shouldReduceMotion) return undefined;

    const startAnimation = () => {
      const distance = track.scrollWidth / 2;
      if (!distance) return;

      animationRef.current?.stop();
      x.set(0);
      animationRef.current = animate(x, -distance, {
        duration: Math.max(distance / 42, 20),
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      });

    };

    startAnimation();
    const resizeObserver = new ResizeObserver(startAnimation);
    resizeObserver.observe(track);

    return () => {
      resizeObserver.disconnect();
      animationRef.current?.stop();
    };
  }, [shouldReduceMotion, x]);

  useEffect(() => {
    if (isPaused) {
      animationRef.current?.pause();
    } else {
      animationRef.current?.play();
    }
  }, [isPaused]);

  const toggleExpanded = (id) => {
    setExpanded((previous) => ({
      ...previous,
      [id]: !previous[id],
    }));
  };


  return (
    <section
      className={`py-12 ${shouldReduceMotion ? "overflow-x-auto" : "overflow-hidden"}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="px-6 md:px-8 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 text-purple-500 text-sm mb-3">
        <span>✦</span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
      </div>

      <motion.div
        className="mb-8"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Featured Properties
        </h2>

        <p className="text-gray-400 text-sm max-w-xl">
          Explore our handpicked selection of featured properties. Each
          listing offers a glimpse into exceptional homes and investments
          available through Estatein. Click "View Details" for more
          information.
        </p>
      </motion.div>

      </div>

      <motion.div
        ref={trackRef}
        className="flex gap-6 w-max px-6 md:px-8"
        style={{ x }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: shouldReduceMotion ? 0 : 0.12,
            },
          },
        }}
      >
        {(shouldReduceMotion ? properties : [...properties, ...properties]).map((property, index) => (
          <motion.article
            key={`${index}-${property.id}`}
            className="w-[min(86vw,23rem)] shrink-0 bg-[#151517] rounded-2xl overflow-hidden"
            variants={{
              hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            whileHover={shouldReduceMotion ? undefined : { y: -6 }}
          >
            <div className="overflow-hidden">
              <motion.img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
                initial={shouldReduceMotion ? false : { scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
            </div>

            <div className="p-5">
              <h3 className="font-semibold mb-1">{property.title}</h3>

              <p className="text-gray-400 text-sm mb-4">
                {expanded[property.id]
                  ? property.fullDescription
                  : property.description}{" "}
                <button
                  type="button"
                  onClick={() => toggleExpanded(property.id)}
                  className="text-white underline"
                >
                  {expanded[property.id] ? "Show Less" : "Read More"}
                </button>
              </p>

              <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-300">
                <span className="bg-[#0d0d0f] px-3 py-1.5 rounded-full">
                  🛏️ {property.bedrooms}-Bedroom
                </span>

                <span className="bg-[#0d0d0f] px-3 py-1.5 rounded-full">
                  🛁 {property.bathrooms}-Bathroom
                </span>

                <span className="bg-[#0d0d0f] px-3 py-1.5 rounded-full">
                  🏠 {property.type}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500">Price</div>
                  <div className="font-semibold">{property.price}</div>
                </div>

                <Link
                  to={`/properties/${property.id}`}
                  className="bg-purple-600 px-4 py-2.5 rounded-full text-sm hover:bg-purple-700"
                >
                  View Property Details
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <div className="hidden">
        <button className="w-full md:hidden bg-[#151517] px-5 py-3 rounded-full text-sm hover:bg-[#1e1e21] mb-4">
          View All Properties
        </button>

        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">
            Continuous carousel
          </span>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => {}}
              className="w-9 h-9 rounded-full bg-[#151517] flex items-center justify-center hover:bg-[#1e1e21]"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => {}}
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
