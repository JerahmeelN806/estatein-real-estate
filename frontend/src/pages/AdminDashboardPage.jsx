import { useState } from "react";
import { useNavigate } from "react-router-dom";
import request from "../api/client";
import { useAuth } from "../context/AuthContext";

const initialForm = {
  title: "",
  description: "",
  price: "",
  status: "SALE",
  type: "APARTMENT",
  city: "",
  bedrooms: "",
  bathrooms: "",
  image: "",
};

function AdminDashboardPage() {
  const navigate = useNavigate();
  const { token, logout } = useAuth();
  const [formData, setFormData] = useState(initialForm);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await request("/properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          price: Number(formData.price),
          bedrooms: Number(formData.bedrooms),
          bathrooms: Number(formData.bathrooms),
        }),
      });

      setFormData(initialForm);
      setSuccessMessage("Property added successfully");
    } catch (error) {
      setErrorMessage(
        error.message || "Unable to add property. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputClassName =
    "w-full mt-2 bg-[#0d0d0f] border border-[#232326] rounded-xl px-4 py-3 text-sm outline-none focus:border-purple-600";

  return (
    <main className="max-w-5xl mx-auto px-6 md:px-8 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          type="button"
          onClick={handleLogout}
          className="bg-[#151517] hover:bg-[#1e1e21] rounded-full px-5 py-2.5 text-sm"
        >
          Logout
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-[#151517] rounded-2xl p-6 md:p-8"
      >
        <h2 className="text-xl font-semibold mb-6">Add Property</h2>

        <div className="grid md:grid-cols-2 gap-5">
          <label className="text-sm text-gray-300">
            Title
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={inputClassName}
              required
            />
          </label>

          <label className="text-sm text-gray-300">
            City
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={inputClassName}
              required
            />
          </label>

          <label className="text-sm text-gray-300 md:col-span-2">
            Description
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className={`${inputClassName} resize-y`}
              required
            />
          </label>

          <label className="text-sm text-gray-300">
            Price
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              min="0"
              step="0.01"
              className={inputClassName}
              required
            />
          </label>

          <label className="text-sm text-gray-300">
            Image URL
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className={inputClassName}
              required
            />
          </label>

          <label className="text-sm text-gray-300">
            Status
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className={inputClassName}
            >
              <option value="SALE">SALE</option>
              <option value="RENT">RENT</option>
            </select>
          </label>

          <label className="text-sm text-gray-300">
            Type
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className={inputClassName}
            >
              <option value="APARTMENT">APARTMENT</option>
              <option value="HOUSE">HOUSE</option>
              <option value="VILLA">VILLA</option>
              <option value="LAND">LAND</option>
            </select>
          </label>

          <label className="text-sm text-gray-300">
            Bedrooms
            <input
              type="number"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              min="0"
              step="1"
              className={inputClassName}
              required
            />
          </label>

          <label className="text-sm text-gray-300">
            Bathrooms
            <input
              type="number"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              min="0"
              step="1"
              className={inputClassName}
              required
            />
          </label>
        </div>

        {successMessage && (
          <p className="text-sm text-green-400 mt-5">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-sm text-red-400 mt-5">{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="bg-purple-600 hover:bg-purple-700 transition-colors rounded-full px-6 py-3 text-sm font-medium mt-6"
        >
          {submitting ? "Adding..." : "Add Property"}
        </button>
      </form>
    </main>
  );
}

export default AdminDashboardPage;
