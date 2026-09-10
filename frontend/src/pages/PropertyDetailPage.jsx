import { Link, useParams } from "react-router-dom";

const properties = [
  {
    id: 1,
    title: "Seaside Serenity Villa",
    type: "Villa",
    city: "Miami",
    price: "$1,250,000",
    bedrooms: 4,
    bathrooms: 3,
    description:
      "A stunning villa offering breathtaking ocean views, spacious interiors, modern finishes, and luxurious living spaces perfect for relaxing and entertaining.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: 2,
    title: "Metropolitan Haven",
    type: "Apartment",
    city: "New York",
    price: "$850,000",
    bedrooms: 3,
    bathrooms: 2,
    description:
      "A modern apartment located in the heart of the city with premium amenities, stylish interiors, and easy access to restaurants, shopping, and entertainment.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: 3,
    title: "Rustic Retreat Cottage",
    type: "House",
    city: "Aspen",
    price: "$650,000",
    bedrooms: 3,
    bathrooms: 2,
    description:
      "A peaceful countryside retreat surrounded by beautiful natural scenery, featuring cozy living spaces and a relaxing atmosphere away from the city.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: 4,
    title: "Modern Luxury Residence",
    type: "House",
    city: "Los Angeles",
    price: "$1,450,000",
    bedrooms: 5,
    bathrooms: 4,
    description:
      "A sophisticated residence featuring contemporary architecture, premium finishes, spacious rooms, and a beautifully designed outdoor area.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: 5,
    title: "Urban Skyline Apartment",
    type: "Apartment",
    city: "Chicago",
    price: "$920,000",
    bedrooms: 3,
    bathrooms: 2,
    description:
      "A stylish city apartment with spectacular skyline views, contemporary interiors, and excellent access to everything the city has to offer.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: 6,
    title: "Elegant Family Villa",
    type: "Villa",
    city: "Orlando",
    price: "$1,100,000",
    bedrooms: 4,
    bathrooms: 3,
    description:
      "A spacious family villa combining comfort, privacy, modern design, beautiful landscaping, and generous living areas.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
  },
];

function PropertyDetailPage() {
  const { id } = useParams();
  const property = properties.find((item) => item.id === Number(id));

  if (!property) {
    return (
      <main className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        <h1 className="text-3xl font-bold mb-3">Property not found</h1>
        <Link to="/properties" className="text-purple-400 hover:text-purple-300">
          Browse available properties
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-16">
      <Link to="/properties" className="inline-block text-sm text-purple-400 hover:text-purple-300 mb-8">
        ← Back to properties
      </Link>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-80 lg:h-full min-h-96 object-cover rounded-3xl"
        />
        <div className="flex flex-col justify-center">
          <p className="text-sm text-purple-400 mb-3">{property.type} · {property.city}</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-5">{property.title}</h1>
          <p className="text-3xl font-semibold mb-7">{property.price}</p>
          <p className="text-gray-400 leading-7 mb-8">{property.description}</p>
          <div className="grid grid-cols-2 border border-[#29292d] rounded-2xl overflow-hidden">
            <div className="p-5 border-r border-[#29292d]">
              <p className="text-sm text-gray-500 mb-1">Bedrooms</p>
              <p className="text-xl font-semibold">{property.bedrooms}</p>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-500 mb-1">Bathrooms</p>
              <p className="text-xl font-semibold">{property.bathrooms}</p>
            </div>
          </div>
          <Link to="/contact" className="mt-8 bg-purple-600 hover:bg-purple-700 transition-colors rounded-full px-6 py-3 text-sm font-medium text-center">
            Enquire about this property
          </Link>
        </div>
      </div>
    </main>
  );
}

export default PropertyDetailPage;
