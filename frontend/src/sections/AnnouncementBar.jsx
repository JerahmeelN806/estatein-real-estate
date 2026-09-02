import { propertyCategories } from "../data/propertyCategories";

function AnnouncementBar() {
  return (
    <div className="bg-[#151517] text-sm text-center py-2 px-4 relative">
      <span className="text-gray-300">
        <img
          src={propertyCategories[0].image}
          alt=""
          className="inline-block w-5 h-5 rounded-full object-cover mr-2 align-middle"
        />
        Discover Your Dream Property with Estatein{" "}
        <a href="#" className="underline text-white">
          Learn More
        </a>
      </span>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
        ✕
      </button>
    </div>
  );
}

export default AnnouncementBar;
