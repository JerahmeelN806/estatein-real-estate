import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const links = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Properties", path: "/properties" },
    { label: "Services", path: "/services" },
  ]

  return (
    <nav className="px-6 md:px-8 py-5 relative bg-[#0f0f10] text-white">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-purple-600 rounded-full" />
          <span className="font-semibold text-lg">Estatein</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-2 bg-[#151517] rounded-full px-2 py-2">
          {links.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                location.pathname === item.path
                  ? "bg-[#232326] text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <button className="hidden md:block bg-[#151517] px-5 py-2.5 rounded-full text-sm hover:bg-[#1e1e21] transition-colors">
          Contact Us
        </button>

        {/* Hamburger - mobile only */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 justify-center items-center w-8 h-8 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="absolute left-6 right-6 mt-4 bg-[#151517] rounded-2xl p-4 flex flex-col gap-2 shadow-xl z-50">
          {links.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm transition-colors ${
                location.pathname === item.path
                  ? "bg-[#232326] text-white"
                  : "text-gray-300 hover:bg-[#232326]/50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button className="bg-purple-600 hover:bg-purple-700 transition-colors px-5 py-3 rounded-xl text-sm font-medium mt-2 text-center">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar