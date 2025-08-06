import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import Logout from "../context/Logout";

const DashboardLayout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdownsOpen, setDropdownsOpen] = useState({
    components: false,
    charts: false,
    maps: false,
    uiFeatures: false,
    formElements: false,
    tables: false,
    pages: false,
    menuLevel1: false,
  });

  const toggleDropdown = (key) => {
    setDropdownsOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-100 flex relative">
      <button
        className="absolute top-4 left-4 z-50 md:hidden bg-cyan-600 text-white p-2 rounded"
        onClick={() => setIsSidebarOpen(true)}
      >
        ☰
      </button>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed md:static top-0 left-0 z-50 w-64 bg-slate-900 text-white p-4 flex flex-col justify-between h-full
        transform transition-transform duration-300
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:h-screen`}
      >
        <div>
          <h1 className="text-2xl font-bold text-cyan-400">
            Dash<span className="text-white">Board</span>
          </h1>

          <nav className="mt-6 space-y-2">
            {user?.role === "admin" && (
              <button
                onClick={() => {
                  navigate("/home/adminpanel");
                  setIsSidebarOpen(false);
                }}
                className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded hover:bg-slate-800 ${
                  isActive("/home/adminpanel") ? "bg-cyan-600" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                  />
                </svg>
                Admin Panel
              </button>
            )}

            <button
              onClick={() => {
                navigate("/home/dashboard");
                setIsSidebarOpen(false);
              }}
              className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded hover:bg-slate-800 ${
                isActive("/home/dashboard") ? "bg-cyan-600" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Dashboard
            </button>

            {Object.entries(dropdownsOpen).map(([key, isOpen]) => (
              <div key={key}>
                <button
                  onClick={() => toggleDropdown(key)}
                  className={`flex justify-between items-center w-full text-left px-4 py-2 rounded hover:bg-slate-800 ${
                    isOpen ? "bg-cyan-600" : ""
                  }`}
                >
                  <span className="capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </span>
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      isOpen ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-4">
          <Logout />
        </div>
      </aside>

      <main
        className={`flex-1 p-6 transition-all duration-300 md:ml-1 ${
          isSidebarOpen ? "overflow-hidden opacity-30 pointer-events-none" : ""
        }`}
      >
        <div className="flex items-center justify-between mb-6 bg-slate-900 p-4 rounded shadow">
          <h2 className="text-xl font-semibold text-white">
            Welcome back {user?.username.toUpperCase()}
          </h2>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm font-medium text-white">
                {user?.username}
              </div>
              
            </div>
            <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center text-lg font-bold uppercase">
              {user?.username?.charAt(0) || "U"}
            </div>
          </div>
        </div>

        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
