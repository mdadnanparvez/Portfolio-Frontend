import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/auth/check-auth`,
          { withCredentials: true }
        );

        if (res.data.success) {
          localStorage.setItem("portfolio_admin", "true");
          setAuthorized(true);
        } else {
          localStorage.removeItem("portfolio_admin");
          setAuthorized(false);
        }
      } catch (error) {
        localStorage.removeItem("portfolio_admin");
        setAuthorized(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950">
        <p className="text-slate-600 dark:text-slate-300">Checking access...</p>
      </div>
    );
  }

  return authorized ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;