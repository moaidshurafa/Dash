import React from "react";
import { useAuth } from "../context/AuthContext";
import DataTable from "react-data-table-component";

const AdminPanel = () => {
  const { user, staticUsers } = useAuth();

  if (!user || user.role !== "admin") {
    return (
      <div className="text-red-500 text-center mt-10 text-xl">
        Access Denied: Admins Only
      </div>
    );
  }

  const adminUsers = staticUsers.filter((u) => u.role === "admin");

  const columns = [
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Role",
      selector: (row) => row.role,
      sortable: true,
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <DataTable
        columns={columns}
        data={adminUsers}
        pagination
        highlightOnHover
        striped
      />
    </div>
  );
};

export default AdminPanel;
