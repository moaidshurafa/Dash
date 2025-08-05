import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import Logout from "../context/Logout";

const DashboardLayout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    if (location.pathname === "/home") {
      navigate("/home/dashboard");
    }
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className="w-64 bg-slate-900 text-white p-4 flex flex-col justify-between h-screen">
        <div>
          <h1 className="text-2xl font-bold text-cyan-400">
            Dash<span className="text-white">Board</span>
          </h1>

          <nav className="mt-6 space-y-2">
            {user?.role === "admin" && (
              <button
                onClick={() => navigate("/home/adminpanel")}
                className={`block w-full text-left px-4 py-2 rounded hover:bg-slate-800 ${
                  isActive("/home/adminpanel") ? "bg-cyan-600" : ""
                }`}
              >
                Admin Panel
              </button>
            )}

            <button
              onClick={() => navigate("/home/dashboard")}
              className={`block w-full text-left px-4 py-2 rounded hover:bg-slate-800 ${
                isActive("/home/dashboard") ? "bg-cyan-600" : ""
              }`}
            >
              Dashboard
            </button>
            {/* i want here button dropdown */}
          </nav>
        </div>

        <div className="mt-4">
          <Logout />
        </div>
      </aside>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
