import { useState } from "react";

function ContactDetailsForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    referral: "",
    message: "",
    agreed: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.agreed) {
      setErrorMessage(
        "Please agree to the Terms of Use and Privacy Policy.",
      );
      return;
    }

    setSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    // Frontend-only demo submission
    await new Promise((resolve) => setTimeout(resolve, 800));

    setSuccessMessage("Message sent successfully.");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      inquiryType: "",
      referral: "",
      message: "",
      agreed: false,
    });

    setSubmitting(false);
  };

  const inputClassName =
    "w-full bg-[#0d0d0f] border border-[#232326] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-purple-600 transition-colors";

  return (
    <section className="px-6 md:px-8 py-12 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-8">
        <div className="flex items-center gap-2 text-purple-500 text-sm mb-4">
          <span>✦</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Let&apos;s Connect
        </h2>

        <p className="text-gray-400 text-sm leading-6">
          We&apos;re excited to connect with you and learn more about your real
          estate goals. Use the form below to get in touch with Estatein.
          Whether you&apos;re a prospective client, partner, or simply curious
          about our services, we&apos;re here to answer your questions and
          provide the assistance you need.
        </p>
      </div>

      <form
        className="border border-[#232326] rounded-3xl p-6 md:p-8"
        onSubmit={handleSubmit}
      >
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          <label className="text-sm text-gray-300">
            First Name
            <input
              name="firstName"
              value={formData.firstName}
              onChange={updateField}
              placeholder="Enter First Name"
              className={`${inputClassName} mt-2`}
              required
            />
          </label>

          <label className="text-sm text-gray-300">
            Last Name
            <input
              name="lastName"
              value={formData.lastName}
              onChange={updateField}
              placeholder="Enter Last Name"
              className={`${inputClassName} mt-2`}
              required
            />
          </label>

          <label className="text-sm text-gray-300">
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={updateField}
              placeholder="Enter your Email"
              className={`${inputClassName} mt-2`}
              required
            />
          </label>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-5">
          <label className="text-sm text-gray-300">
            Phone
            <input
              name="phone"
              value={formData.phone}
              onChange={updateField}
              placeholder="Enter Phone Number"
              className={`${inputClassName} mt-2`}
            />
          </label>

          <label className="text-sm text-gray-300">
            Inquiry Type
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={updateField}
              className={`${inputClassName} mt-2`}
              required
            >
              <option value="">Select Inquiry Type</option>
              <option value="buying">Buying a Property</option>
              <option value="selling">Selling a Property</option>
              <option value="investment">
                Investment Opportunities
              </option>
              <option value="management">Property Management</option>
            </select>
          </label>

          <label className="text-sm text-gray-300">
            How Did You Hear About Us?
            <select
              name="referral"
              value={formData.referral}
              onChange={updateField}
              className={`${inputClassName} mt-2`}
            >
              <option value="">Select</option>
              <option value="search">Search Engine</option>
              <option value="social">Social Media</option>
              <option value="referral">Referral</option>
              <option value="event">Event</option>
            </select>
          </label>
        </div>

        <label className="block text-sm text-gray-300 mb-6">
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={updateField}
            placeholder="Enter your Message here."
            rows="6"
            className={`${inputClassName} mt-2 resize-y`}
            required
          />
        </label>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <label className="flex items-center gap-3 text-sm text-gray-400">
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={updateField}
              className="accent-purple-600 w-4 h-4"
            />

            <span>I agree with Terms of Use and Privacy Policy</span>
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="bg-purple-600 hover:bg-purple-700 transition-colors px-6 py-3 rounded-full text-sm font-medium disabled:opacity-50"
          >
            {submitting ? "Sending..." : "Send Your Message"}
          </button>
        </div>

        {successMessage && (
          <p className="mt-5 text-sm text-green-400">
            {successMessage}
          </p>
        )}

        {errorMessage && (
          <p className="mt-5 text-sm text-red-400">
            {errorMessage}
          </p>
        )}
      </form>
    </section>
  );
}

export default ContactDetailsForm;