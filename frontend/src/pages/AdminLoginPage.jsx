import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AdminLoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await login(email, password);

      if (!["ADMIN", "AGENT"].includes(data.user.role)) {
        logout();
        setError("Invalid email or password");
        return;
      }

      navigate("/admin");
    } catch {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-16">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#151517] rounded-2xl p-6 md:p-8"
      >
        <h1 className="text-2xl font-bold mb-6">Admin Login</h1>

        <label className="block text-sm text-gray-300 mb-4">
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full mt-2 bg-[#0d0d0f] border border-[#232326] rounded-xl px-4 py-3 text-sm outline-none focus:border-purple-600"
            required
          />
        </label>

        <label className="block text-sm text-gray-300 mb-5">
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full mt-2 bg-[#0d0d0f] border border-[#232326] rounded-xl px-4 py-3 text-sm outline-none focus:border-purple-600"
            required
          />
        </label>

        {error && <p className="text-sm text-red-400 mb-4">{error}</p>}

        {location.state?.message && (
          <p className="text-sm text-green-400 mb-4">
            {location.state.message}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 transition-colors rounded-full py-3 text-sm font-medium"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <Link
          to="/admin/forgot-password"
          className="block text-sm text-gray-400 hover:text-white mt-5 text-center"
        >
          Forgot password?
        </Link>
      </form>
    </main>
  );
}

export default AdminLoginPage;
