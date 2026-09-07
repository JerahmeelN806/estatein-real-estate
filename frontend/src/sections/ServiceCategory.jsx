function ServiceCard({ service }) {
  return (
    <article className="bg-[#151517] rounded-2xl p-6">
      <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400 text-lg mb-5">
        {service.icon}
      </div>
      <h3 className="font-semibold mb-3">{service.title}</h3>
      <p className="text-gray-400 text-sm leading-6">{service.description}</p>
    </article>
  );
}

function FeaturedService({ title, description, featuredButtonText }) {
  return (
    <article className="relative overflow-hidden bg-[#1b1724] border border-purple-500/20 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full">
      <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full border border-purple-500/10" />
      <div className="absolute right-8 top-8 w-24 h-24 rounded-full border border-purple-500/10" />
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-purple-600/30 flex items-center justify-center text-purple-300 text-lg mb-5">
          ✦
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-300 text-sm leading-6">{description}</p>
      </div>
      <button className="relative mt-8 self-start bg-purple-600 hover:bg-purple-700 transition-colors px-5 py-3 rounded-full text-sm">
        {featuredButtonText}
      </button>
    </article>
  );
}

function ServiceCategory({
  heading,
  description,
  services,
  featuredTitle,
  featuredDescription,
  featuredButtonText = "Learn More",
  layout = "grid-with-featured-right",
}) {
  const isFeaturedLeft = layout === "featured-left-with-grid";

  return (
    <section className="px-6 md:px-8 py-12 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-8">
        <div className="flex items-center gap-2 text-purple-500 text-sm mb-4">
          <span>✦</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{heading}</h2>
        <p className="text-gray-400 text-sm leading-6">{description}</p>
      </div>

      {isFeaturedLeft ? (
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:row-span-2">
            <FeaturedService
              title={featuredTitle}
              description={featuredDescription}
              featuredButtonText={featuredButtonText}
            />
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
          <div className="md:col-span-2">
            <FeaturedService
              title={featuredTitle}
              description={featuredDescription}
              featuredButtonText={featuredButtonText}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default ServiceCategory;
