import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaEye,
  FaEyeSlash,
  FaLock,
  FaEnvelope,
  FaArrowLeft,
  FaShieldAlt,
} from "react-icons/fa";
import Navbar from "../components/layout/Navbar";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "admin_email") {
      setFormData((prev) => ({
        ...prev,
        email: value,
      }));
      return;
    }

    if (name === "admin_password") {
      setFormData((prev) => ({
        ...prev,
        password: value,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Email and password are required.");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          email: formData.email,
          password: formData.password,
        },
        { withCredentials: true }
      );

      if (res.data.success) {
        localStorage.setItem("portfolio_admin", "true");
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err?.response?.data?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />

      <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-10 pt-28 sm:px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[-80px] top-[120px] h-72 w-72 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-700/10" />
          <div className="absolute bottom-[-80px] right-[-40px] h-80 w-80 rounded-full bg-slate-300/40 blur-3xl dark:bg-slate-700/20" />
          <div className="absolute left-1/2 top-1/4 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-200/20 blur-3xl dark:bg-cyan-500/10" />
        </div>

        <div className="relative grid w-full max-w-6xl overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/80 shadow-[0_20px_80px_rgba(15,23,42,0.10)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70 md:grid-cols-2">
          <div className="relative hidden overflow-hidden bg-[linear-gradient(135deg,#020617_0%,#0f172a_45%,#1e3a8a_100%)] p-12 text-white md:flex">
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
                  <FaShieldAlt className="text-[11px]" />
                  Secure Admin Panel
                </div>

                <h1 className="max-w-md text-5xl font-bold leading-tight">
                  Sign in to manage your portfolio professionally
                </h1>

                <p className="mt-6 max-w-lg text-base leading-8 text-slate-300">
                  Update projects, skills, experience, services, and contact
                  details from one clean and premium admin dashboard.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur-md">
                <p className="text-sm leading-7 text-slate-300">
                  Single-admin access only. Modern, minimal, and professional
                  login experience for your portfolio.
                </p>
              </div>
            </div>

            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />
          </div>

          <div className="flex items-center justify-center p-6 sm:p-8 md:p-14">
            <div className="w-full max-w-md">
              <button
                onClick={() => navigate("/")}
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white"
              >
                <FaArrowLeft size={12} />
                Back to Home
              </button>

              <div className="mb-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700 dark:text-blue-400">
                  Welcome Back
                </p>

                <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Admin Login
                </h2>

                <p className="mt-3 text-base leading-7 text-slate-500 dark:text-slate-400">
                  Enter your admin credentials to continue to the dashboard.
                </p>
              </div>

              <form onSubmit={handleLogin} autoComplete="off" className="space-y-5">
                <input
                  type="text"
                  name="fake_username"
                  autoComplete="username"
                  className="hidden"
                  tabIndex={-1}
                />
                <input
                  type="password"
                  name="fake_password"
                  autoComplete="current-password"
                  className="hidden"
                  tabIndex={-1}
                />

                <div>
                  <label
                    htmlFor="admin_email"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Email Address
                  </label>

                  <div className="group flex items-center rounded-2xl border border-slate-200 bg-white px-4 shadow-sm transition duration-300 focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:focus-within:border-blue-500 dark:focus-within:ring-blue-500/10">
                    <FaEnvelope className="shrink-0 text-slate-400 transition group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400" />

                    <input
                      id="admin_email"
                      type="text"
                      name="admin_email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your admin email"
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck={false}
                      className="w-full bg-transparent px-3 py-4 text-[15px] text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="admin_password"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Password
                  </label>

                  <div className="group flex items-center rounded-2xl border border-slate-200 bg-white px-4 shadow-sm transition duration-300 focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:focus-within:border-blue-500 dark:focus-within:ring-blue-500/10">
                    <FaLock className="shrink-0 text-slate-400 transition group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400" />

                    <input
                      id="admin_password"
                      type={showPassword ? "text" : "password"}
                      name="admin_password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      autoComplete="new-password"
                      spellCheck={false}
                      className="w-full bg-transparent px-3 py-4 text-[15px] text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="shrink-0 text-slate-400 transition hover:text-slate-700 dark:hover:text-slate-200"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-400">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-[linear-gradient(135deg,#0f172a_0%,#1e3a8a_100%)] px-6 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(30,58,138,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(30,58,138,0.35)] disabled:cursor-not-allowed disabled:opacity-70 dark:bg-[linear-gradient(135deg,#ffffff_0%,#cbd5e1_100%)] dark:text-slate-950"
                >
                  {loading ? "Signing In..." : "Sign In"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;