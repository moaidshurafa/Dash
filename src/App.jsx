import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./context/Login";
import Logout from "./context/Logout";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import AdminPanel from "./components/AdminPanel";
import DashboardLayout from "./components/DashboardLayout";
import { Navigate } from "react-router-dom";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute roles={["admin"]}>
                <AdminPanel />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute roles={["user", "admin"]}>
                <About />
              </ProtectedRoute>
            }
          />

          <Route
            path="home"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route
              path="dashboard"
              element={
                <ProtectedRoute roles={["admin", "user"]}>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="adminpanel"
              element={
                <ProtectedRoute roles={["admin"]}>
                  <AdminPanel />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path="/" element={<Navigate to="/home/dashboard" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
