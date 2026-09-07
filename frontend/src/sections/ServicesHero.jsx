import { propertyCategories } from "../data/propertyCategories";

function ServicesHero() {
  const serviceLinks = [
    { label: "Find Your Dream Home", image: propertyCategories[0].image },
    { label: "Unlock Property Value", image: propertyCategories[1].image },
    {
      label: "Effortless Property Management",
      image: propertyCategories[2].image,
    },
    {
      label: "Smart Investments, Informed Decisions",
      image: propertyCategories[3].image,
    },
  ];

  return (
    <section className="px-6 md:px-8 py-12 md:py-16 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-purple-500 text-sm mb-4">
          <span>✦</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Elevate Your Real Estate Experience
        </h1>
        <p className="text-gray-400 leading-7">
          Welcome to Estatein, where your real estate operations meet expert
          guidance. Explore our comprehensive range of services, each designed
          to cater to your unique needs and dreams.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {serviceLinks.map((service) => (
          <div
            key={service.label}
            className="bg-[#151517] rounded-2xl p-5 relative hover:bg-[#1a1a1d] transition-colors"
          >
            <span className="absolute top-4 right-4 text-gray-500 text-sm">
              ↗
            </span>
            <img
              src={service.image}
              alt=""
              className="w-11 h-11 rounded-full object-cover mb-6 ring-2 ring-purple-600/40"
            />
            <p className="text-sm leading-6">{service.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesHero;
