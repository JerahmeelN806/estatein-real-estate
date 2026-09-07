function ExploreGallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000&q=85",
      alt: "Estatein office workspace",
      className: "md:col-span-2 md:row-span-2 min-h-64 md:min-h-96",
    },
    {
      src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=85",
      alt: "Team collaborating in an office",
      className: "min-h-48",
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=85",
      alt: "Business meeting",
      className: "min-h-48",
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=85",
      alt: "Colleagues working together",
      className: "min-h-48",
    },
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=85",
      alt: "Team discussion",
      className: "min-h-48",
    },
  ];

  return (
    <section className="px-6 md:px-8 py-12 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 text-purple-500 text-sm mb-4">
        <span>✦</span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
        <div className="bg-[#1b1724] border border-purple-500/20 rounded-2xl p-6 md:p-8 min-h-64 flex flex-col justify-end">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Explore Estatein&apos;s World
          </h2>
          <p className="text-gray-300 text-sm leading-6">
            Step inside the world of Estatein, where professionalism meets
            warmth, and expertise meets passion. Our gallery offers a glimpse
            into our team and workspaces, inviting you to get to know us better.
          </p>
        </div>

        {images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className={`${image.className} w-full h-full object-cover rounded-2xl`}
          />
        ))}
      </div>
    </section>
  );
}

export default ExploreGallery;
