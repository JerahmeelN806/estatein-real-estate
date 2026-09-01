import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    propertyType: "",
    bathrooms: "",
    bedrooms: "",
    budget: "",
    preferredContact: "phone",
    message: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleContactMethod = (method) => {
    setFormData((prev) => ({
      ...prev,
      preferredContact: method,
    }));
  };

  return (
    <section className="px-6 md:px-8 py-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-2 text-purple-500 text-sm mb-3">
        <span>✦</span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        Let's Make it Happen
      </h2>
      <p className="text-gray-400 text-sm max-w-2xl mb-8">
        Ready to take the first step toward your dream property? Fill out the
        form below, and our real estate wizards will work their magic to find
        your perfect match. Don't wait, let's embark on this exciting journey
        together
      </p>

      {/* Form Panel */}
      <div className="border border-[#232326] rounded-3xl p-6 md:p-8">
        <form className="space-y-6">
          {/* Row 1: First Name, Last Name, Email, Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-[#0d0d0f] border border-gray-600 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-600 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-[#0d0d0f] border border-gray-600 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-600 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#0d0d0f] border border-gray-600 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-600 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#0d0d0f] border border-gray-600 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-600 transition-colors"
              />
            </div>
          </div>

          {/* Row 2: Location, Property Type, Bathrooms, Bedrooms */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-2">
                Preferred Location
              </label>
              <div className="relative">
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-[#0d0d0f] border border-gray-600 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-600 transition-colors appearance-none"
                >
                  <option value="">Select Location</option>
                  <option value="coastal">Coastal</option>
                  <option value="urban">Urban</option>
                  <option value="countryside">Countryside</option>
                  <option value="mountain">Mountain</option>
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none">
                  ▼
                </span>
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-2">
                Property Type
              </label>
              <div className="relative">
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full bg-[#0d0d0f] border border-gray-600 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-600 transition-colors appearance-none"
                >
                  <option value="">Select Property Type</option>
                  <option value="villa">Villa</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="loft">Loft</option>
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none">
                  ▼
                </span>
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-2">
                No. of Bathrooms
              </label>
              <div className="relative">
                <select
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleChange}
                  className="w-full bg-[#0d0d0f] border border-gray-600 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-600 transition-colors appearance-none"
                >
                  <option value="">Select no. of Bathrooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4+</option>
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none">
                  ▼
                </span>
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-2">
                No. of Bedrooms
              </label>
              <div className="relative">
                <select
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  className="w-full bg-[#0d0d0f] border border-gray-600 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-600 transition-colors appearance-none"
                >
                  <option value="">Select no. of Bedrooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4+</option>
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none">
                  ▼
                </span>
              </div>
            </div>
          </div>

          {/* Row 3: Budget + Preferred Contact Method */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-2">Budget</label>
              <div className="relative">
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-[#0d0d0f] border border-gray-600 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-600 transition-colors appearance-none"
                >
                  <option value="">Select Budget</option>
                  <option value="under-300k">Under $300K</option>
                  <option value="300k-500k">$300K - $500K</option>
                  <option value="500k-1m">$500K - $1M</option>
                  <option value="over-1m">Over $1M</option>
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none">
                  ▼
                </span>
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-2">
                Preferred Contact Method
              </label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => handleContactMethod("phone")}
                  className={`flex-1 flex items-center justify-between px-4 py-3 rounded-full text-sm transition-colors ${
                    formData.preferredContact === "phone"
                      ? "bg-purple-600 border border-purple-600 text-white"
                      : "bg-[#0d0d0f] border border-gray-600 text-gray-300 hover:border-purple-600"
                  }`}
                >
                  <span>☎️ Phone</span>
                  <span
                    className={`w-3 h-3 rounded-full border-2 ${
                      formData.preferredContact === "phone"
                        ? "bg-white border-white"
                        : "border-gray-600"
                    }`}
                  />
                </button>

                <button
                  type="button"
                  onClick={() => handleContactMethod("email")}
                  className={`flex-1 flex items-center justify-between px-4 py-3 rounded-full text-sm transition-colors ${
                    formData.preferredContact === "email"
                      ? "bg-purple-600 border border-purple-600 text-white"
                      : "bg-[#0d0d0f] border border-gray-600 text-gray-300 hover:border-purple-600"
                  }`}
                >
                  <span>✉️ Email</span>
                  <span
                    className={`w-3 h-3 rounded-full border-2 ${
                      formData.preferredContact === "email"
                        ? "bg-white border-white"
                        : "border-gray-600"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Row 4: Message */}
          <div>
            <label className="block text-xs text-gray-500 mb-2">Message</label>
            <textarea
              name="message"
              placeholder="Enter your Message here."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full bg-[#0d0d0f] border border-gray-600 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-600 transition-colors resize-none"
            />
          </div>

          {/* Checkbox + Submit Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <label className="flex items-center gap-3 text-sm text-gray-300">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="w-4 h-4 bg-[#0d0d0f] border border-gray-600 rounded accent-purple-600 cursor-pointer"
              />
              I agree with Terms of Use and Privacy Policy
            </label>

            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 transition-colors px-8 py-3 rounded-full text-sm font-medium whitespace-nowrap"
            >
              Send Your Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
