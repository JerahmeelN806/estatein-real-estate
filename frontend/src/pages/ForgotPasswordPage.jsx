import { useState } from "react";
import { Link } from "react-router-dom";
import request from "../api/client";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");

    try {
      const data = await request("/auth/forgot-password", {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      setMessage(data.message);
    } catch (requestError) {
      setError(requestError.message || "Unable to request a reset link.");
    }
  };

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-16">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#151517] rounded-2xl p-6 md:p-8"
      >
        <h1 className="text-2xl font-bold mb-3">Forgot Password</h1>
        <p className="text-sm text-gray-400 mb-6">
          Enter your admin email to request a password reset link.
        </p>
        <label className="block text-sm text-gray-300 mb-5">
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full mt-2 bg-[#0d0d0f] border border-[#232326] rounded-xl px-4 py-3 text-sm outline-none focus:border-purple-600"
            required
          />
        </label>
        {message && <p className="text-sm text-green-400 mb-4">{message}</p>}
        {error && <p className="text-sm text-red-400 mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 transition-colors rounded-full py-3 text-sm font-medium"
        >
          Request Reset Link
        </button>
        <Link
          to="/admin/login"
          className="block text-sm text-gray-400 hover:text-white mt-5 text-center"
        >
          Back to login
        </Link>
      </form>
    </main>
  );
}

export default ForgotPasswordPage;
