import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getProperties } from "../api/properties";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FeaturedProperties() {
  const [allProperties, setAllProperties] = useState([]);
  const [page, setPage] = useState(0);
  const [expanded, setExpanded] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const perPage = 3;
  const totalPages = Math.ceil(allProperties.length / perPage);

  const headingRef = useRef(null);
  const gridRef = useRef(null);
  const autoPlayRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  useEffect(() => {
    let active = true;

    async function loadProperties() {
      try {
        setLoading(true);
        setError("");
        const fetchedProperties = await getProperties();

        if (active) {
          setAllProperties(fetchedProperties);
        }
      } catch {
        if (active) {
          setError(
            "We couldn't load the featured properties right now. Please try again.",
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadProperties();

    return () => {
      active = false;
    };
  }, []);

  // Heading fade-in on scroll, once
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  // Cards slide in horizontally + images reveal, replays every time the page changes
  useEffect(() => {
    if (loading || error || !gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current.querySelectorAll(".property-card"),
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
        }
      );

      gridRef.current.querySelectorAll(".property-image-wrap").forEach((wrap) => {
        const img = wrap.querySelector("img");
        gsap.fromTo(
          wrap,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1,
            ease: "power3.inOut",
          }
        );
        gsap.fromTo(
          img,
          { scale: 1.2 },
          {
            scale: 1,
            duration: 1.3,
            ease: "power2.out",
          }
        );
      });
    }, gridRef);

    return () => ctx.revert();
  }, [page, loading, error, allProperties]);

  // Auto-play: advance to next page every 5 seconds, unless paused
  useEffect(() => {
    if (loading || error || totalPages <= 1 || isPaused) return;

    autoPlayRef.current = setInterval(() => {
      setPage((p) => (p === totalPages - 1 ? 0 : p + 1));
    }, 5000);

    return () => clearInterval(autoPlayRef.current);
  }, [loading, error, totalPages, isPaused]);

  const pauseThenResume = () => {
    setIsPaused(true);
    clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => setIsPaused(false), 8000);
  };

  useEffect(() => {
    return () => clearTimeout(resumeTimeoutRef.current);
  }, []);

  const visibleProperties = allProperties.slice(
    page * perPage,
    page * perPage + perPage,
  );

  const toggleExpanded = (title) => {
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const goPrev = () => {
    setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
    pauseThenResume();
  };
  const goNext = () => {
    setPage((p) => (p === totalPages - 1 ? 0 : p + 1));
    pauseThenResume();
  };

  return (
    <section
      className="px-6 md:px-8 py-12 max-w-7xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex items-center gap-2 text-purple-500 text-sm mb-3">
        <span>✦</span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
      </div>

      <div ref={headingRef} className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Featured Properties
        </h2>
        <p className="text-gray-400 text-sm max-w-xl">
          Explore our handpicked selection of featured properties. Each listing
          offers a glimpse into exceptional homes and investments available
          through Estatein. Click "View Details" for more information.
        </p>
      </div>

      <div ref={gridRef} className="grid md:grid-cols-3 gap-6">
        {loading && <p className="text-gray-400 text-sm">Loading...</p>}

        {!loading && error && (
          <p className="text-gray-400 text-sm md:col-span-3">{error}</p>
        )}

        {!loading &&
          !error &&
          visibleProperties.map((p) => (
            <div
              key={p.id || p.title}
              className="property-card bg-[#151517] rounded-2xl overflow-hidden"
            >
              <div className="property-image-wrap overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {expanded[p.title]
                    ? p.fullDescription || p.description
                    : p.description}{" "}
                  <button
                    onClick={() => toggleExpanded(p.title)}
                    className="text-white underline"
                  >
                    {expanded[p.title] ? "Show Less" : "Read More"}
                  </button>
                </p>

                <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-300">
                  <span className="bg-[#0d0d0f] px-3 py-1.5 rounded-full flex items-center gap-1">
                    <img
                      src={p.image}
                      alt=""
                      className="w-4 h-4 rounded-full object-cover"
                    />
                    {p.bedrooms ?? p.beds}-Bedroom
                  </span>
                  <span className="bg-[#0d0d0f] px-3 py-1.5 rounded-full flex items-center gap-1">
                    <img
                      src={p.gallery?.[1] || p.image}
                      alt=""
                      className="w-4 h-4 rounded-full object-cover"
                    />
                    {p.bathrooms ?? p.baths}-Bathroom
                  </span>
                  <span className="bg-[#0d0d0f] px-3 py-1.5 rounded-full flex items-center gap-1">
                    <img
                      src={p.gallery?.[2] || p.image}
                      alt=""
                      className="w-4 h-4 rounded-full object-cover"
                    />
                    {p.type}
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
            {String(Math.min(page + 1, Math.max(totalPages, 1))).padStart(
              2,
              "0",
            )}{" "}
            of {String(Math.max(totalPages, 1)).padStart(2, "0")}
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