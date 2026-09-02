function Footer() {
  const currentYear = new Date().getFullYear();
  const mainColumns = [
    {
      title: "Home",
      links: [
        "Hero Section",
        "Features",
        "Properties",
        "Testimonials",
        "FAQ's",
      ],
    },
    {
      title: "About Us",
      links: [
        "Our Story",
        "Our Works",
        "How It Works",
        "Our Team",
        "Our Clients",
      ],
    },
  ];

  const services = {
    title: "Services",
    links: [
      "Valuation Mastery",
      "Strategic Marketing",
      "Negotiation Wizardry",
      "Closing Success",
      "Property Management",
    ],
  };

  const properties = {
    title: "Properties",
    links: ["Portfolio", "Categories"],
  };

  const contact = {
    title: "Contact Us",
    links: ["Contact Form", "Our Offices"],
  };

  const socials = [
    { label: "Facebook", image: "https://cdn.simpleicons.org/facebook/ffffff" },
    {
      label: "LinkedIn",
      image: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linkedin.svg",
    },
    { label: "Twitter", image: "https://cdn.simpleicons.org/x/ffffff" },
    { label: "YouTube", image: "https://cdn.simpleicons.org/youtube/ffffff" },
  ];

  return (
    <footer className="px-4 md:px-8 pb-6 md:pb-10 max-w-7xl mx-auto">
      <div className="bg-[#151517] rounded-3xl overflow-hidden">
        <div className="px-6 md:px-10 py-8 md:py-10">
          <div className="mb-8 md:mb-0 md:hidden">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-6 bg-purple-600 rounded-full" />
              <span className="font-semibold text-lg">Estatein</span>
            </div>
            <div className="flex items-center bg-[#0d0d0f] rounded-full pl-4 pr-1.5 py-1.5">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-transparent text-sm text-gray-300 placeholder-gray-500 outline-none flex-1"
              />
              <button className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                ➤
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-7 gap-x-4 gap-y-8">
            <div className="hidden md:block md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-purple-600 rounded-full" />
                <span className="font-semibold text-lg">Estatein</span>
              </div>
              <div className="flex items-center bg-[#0d0d0f] rounded-full pl-4 pr-1.5 py-1.5 max-w-xs">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="bg-transparent text-sm text-gray-300 placeholder-gray-500 outline-none flex-1"
                />
                <button className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  ➤
                </button>
              </div>
            </div>

            {mainColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-gray-500 text-sm mb-4 whitespace-nowrap">
                  {col.title}
                </h4>
                <ul className="space-y-3 list-none">
                  {col.links.map((link) => (
                    <li key={link} className="list-none">
                      <a
                        href="#"
                        className="text-sm text-gray-100 hover:text-white whitespace-nowrap"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Properties + Contact Us stacked in one column */}
            <div>
              <h4 className="text-gray-500 text-sm mb-4 whitespace-nowrap">
                {properties.title}
              </h4>
              <ul className="space-y-3 list-none mb-8">
                {properties.links.map((link) => (
                  <li key={link} className="list-none">
                    <a
                      href="#"
                      className="text-sm text-gray-100 hover:text-white whitespace-nowrap"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

              <h4 className="text-gray-500 text-sm mb-4 whitespace-nowrap">
                {contact.title}
              </h4>
              <ul className="space-y-3 list-none">
                {contact.links.map((link) => (
                  <li key={link} className="list-none">
                    <a
                      href="#"
                      className="text-sm text-gray-100 hover:text-white whitespace-nowrap"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-gray-500 text-sm mb-4 whitespace-nowrap">
                {services.title}
              </h4>
              <ul className="space-y-3 list-none">
                {services.links.map((link) => (
                  <li key={link} className="list-none">
                    <a
                      href="#"
                      className="text-sm text-gray-100 hover:text-white whitespace-nowrap"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#232326]">
          <div className="px-6 md:px-10 py-6 flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div className="flex gap-3 order-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-[#0d0d0f] flex items-center justify-center text-sm hover:bg-[#1a1a1d]"
                >
                  <img
                    src={s.image}
                    alt=""
                    className="w-4 h-4 object-contain brightness-0 invert"
                  />
                </a>
              ))}
            </div>
            <div className="flex flex-col items-center gap-1 md:flex-row md:gap-6 text-sm text-gray-400 text-center order-2 md:order-none">
              <span>@{currentYear} Estatein. All Rights Reserved.</span>
              <a href="#" className="hover:text-white">
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
