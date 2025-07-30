import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await axios.get("http://localhost:5000/api/users/all", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(res.data);
      } catch (err) {
        const msg = err.response?.data?.message || "Failed to fetch users.";
        setError(msg);
      }
    };

    fetchUsers();
  }, []);

  return (
  <div className="bg-white shadow-md rounded-lg p-4">

    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Registered Users</h2>
      {error && <p className="text-red-500">{error}</p>}
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Username</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="text-center">
              <td className="p-2 border">{user.id}</td>
              <td className="p-2 border">{user.username}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border capitalize">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
 
</div>

    </div>
  );
};

export default UserList;
