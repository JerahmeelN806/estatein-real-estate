import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import request from "../api/client";

function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await request("/auth/reset-password", {
        method: "POST",
        body: JSON.stringify({
          token: searchParams.get("token"),
          password,
        }),
      });
      navigate("/admin/login", {
        state: { message: "Password reset successfully" },
      });
    } catch (requestError) {
      setError(requestError.message || "Unable to reset password.");
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
        <h1 className="text-2xl font-bold mb-6">Set New Password</h1>
        <label className="block text-sm text-gray-300 mb-5">
          New Password
          <input
            type="password"
            minLength="8"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full mt-2 bg-[#0d0d0f] border border-[#232326] rounded-xl px-4 py-3 text-sm outline-none focus:border-purple-600"
            required
          />
        </label>
        {error && <p className="text-sm text-red-400 mb-4">{error}</p>}
        <button
          type="submit"
          disabled={loading || !searchParams.get("token")}
          className="w-full bg-purple-600 hover:bg-purple-700 transition-colors rounded-full py-3 text-sm font-medium"
        >
          {loading ? "Saving..." : "Reset Password"}
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

export default ResetPasswordPage;
