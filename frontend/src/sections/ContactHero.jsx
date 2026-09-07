function ContactHero() {
  const contactCards = [
    { icon: "@", label: "info@estatein.com" },
    { icon: "☎", label: "+1 (123) 456-7890" },
    { icon: "⌖", label: "Main Headquarters" },
    {
      icon: "✦",
      label: "Social Profiles",
      links: ["Instagram", "LinkedIn", "Facebook"],
    },
  ];

  return (
    <section className="px-6 md:px-8 py-12 md:py-16 max-w-7xl mx-auto">
      <div className="max-w-4xl mb-10">
        <div className="flex items-center gap-2 text-purple-500 text-sm mb-4">
          <span>✦</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Get in Touch with Estatein
        </h1>
        <p className="text-gray-400 leading-7">
          Welcome to Estatein&apos;s Contact Us page. We&apos;re here to assist
          you with any inquiries, requests, or feedback you may have. Whether
          you&apos;re looking to buy or sell property, explore investment
          opportunities, or simply want to connect, we&apos;re just a message
          away. Reach out to us, and let&apos;s start a conversation.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {contactCards.map((card) => (
          <div
            key={card.label}
            className="bg-[#151517] rounded-2xl p-5 relative min-h-40"
          >
            <span className="absolute top-4 right-4 text-gray-500 text-sm">
              ↗
            </span>
            <div className="w-11 h-11 rounded-full bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 text-lg mb-6">
              {card.icon}
            </div>
            <p className="text-sm text-gray-200 mb-2">{card.label}</p>
            {card.links && (
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {card.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-xs text-gray-400 hover:text-white underline"
                  >
                    {link}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContactHero;
