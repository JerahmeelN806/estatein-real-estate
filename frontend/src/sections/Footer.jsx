function Footer() {
  const columns = [
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
    {
      title: "Properties",
      links: ["Portfolio", "Categories"],
    },
    {
      title: "Services",
      links: [
        "Valuation Mastery",
        "Strategic Marketing",
        "Negotiation Wizardry",
        "Closing Success",
        "Property Management",
      ],
    },
    {
      title: "Contact Us",
      links: ["Contact Form", "Our Offices"],
    },
  ];

  const socials = [
    { label: "Facebook", icon: "f" },
    { label: "LinkedIn", icon: "in" },
    { label: "Twitter", icon: "𝕏" },
    { label: "YouTube", icon: "▶" },
  ];

  return (
    <footer className="px-2 pb-6 max-w-7xl mx-auto">
      <div className="bg-[#151517] border border-[#232326] overflow-hidden">
        
        {/* TOP SECTION */}
        <div className="px-3 sm:px-5 pt-5 pb-10">
          
          {/* LOGO */}
          <div className="flex items-center gap-2 pb-4 border-b border-[#252528]">
            <div className="w-7 h-7 bg-[#703BF7] rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-[#151517] rounded-full translate-x-[-2px] translate-y-[-2px]" />
            </div>

            <span className="font-semibold text-base text-white">
              Estatein
            </span>
          </div>

          {/* EMAIL */}
          <div className="mt-1 mb-8 border-b border-[#252528] pb-7">
            <div className="flex items-center border border-[#2a2a2d] rounded-lg px-4 h-10">
              <span className="text-gray-500 mr-2 text-sm">✉</span>

              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-transparent text-[11px] text-gray-300 placeholder-gray-500 outline-none flex-1 min-w-0"
              />

              <button
                type="button"
                className="text-white text-base flex-shrink-0 ml-2"
              >
                ➤
              </button>
            </div>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2">
            
            {/* HOME */}
            <div className="pr-3">
              <h4 className="text-gray-500 text-xs mb-3">
                Home
              </h4>

              <ul className="space-y-2.5">
                {columns[0].links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[11px] text-gray-100 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ABOUT US */}
            <div className="pl-3 border-l border-[#252528]">
              <h4 className="text-gray-500 text-xs mb-3">
                About Us
              </h4>

              <ul className="space-y-2.5">
                {columns[1].links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[11px] text-gray-100 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* PROPERTIES */}
            <div className="pr-3 mt-3 pt-3 border-t border-[#252528]">
              <h4 className="text-gray-500 text-xs mb-3">
                Properties
              </h4>

              <ul className="space-y-2.5">
                {columns[2].links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[11px] text-gray-100 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVICES */}
            <div className="pl-3 mt-3 pt-3 border-l border-t border-[#252528]">
              <h4 className="text-gray-500 text-xs mb-3">
                Services
              </h4>

              <ul className="space-y-2.5">
                {columns[3].links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[11px] text-gray-100 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT US */}
            <div className="pr-3 mt-3 pt-3 border-t border-[#252528]">
              <h4 className="text-gray-500 text-xs mb-3">
                Contact Us
              </h4>

              <ul className="space-y-2.5">
                {columns[4].links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[11px] text-gray-100 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="border-t border-[#252528] px-4 py-6">
          
          {/* SOCIALS */}
          <div className="flex justify-center gap-2.5 mb-5">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="w-11 h-11 rounded-full bg-[#0d0d0f] flex items-center justify-center text-white text-sm hover:bg-[#202024] transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* COPYRIGHT */}
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-[10px] text-gray-400">
              ©2023 Estatein. All Rights Reserved.
            </span>

            <a
              href="#"
              className="text-[10px] text-gray-400 hover:text-white transition-colors"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;