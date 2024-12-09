import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';

const AdminTable = () => {
  const [admins, setAdmins] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  ]);

  const [newAdmin, setNewAdmin] = useState({ name: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAdmin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add new admin to the list
  const handleAddAdmin = () => {
    if (newAdmin.name && newAdmin.email) {
      const newId = admins.length ? admins[admins.length - 1].id + 1 : 1;
      setAdmins([
        ...admins,
        { id: newId, name: newAdmin.name, email: newAdmin.email },
      ]);
      setNewAdmin({ name: '', email: '' }); // Clear input fields
    } else {
      alert('Please provide a name and email.');
    }
  };

  // Delete admin from the list
  const handleDeleteAdmin = (id) => {
    setAdmins(admins.filter((admin) => admin.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Admin List</h2>

      {/* Admin table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id}>
                <td className="px-6 py-4 text-sm text-gray-900">{admin.id}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{admin.name}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{admin.email}</td>
                <td className="px-6 py-4 text-sm text-red-600">
                  <button
                    onClick={() => handleDeleteAdmin(admin.id)}
                    className="hover:text-red-800"
                  >
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add new admin form */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700">Add New Admin</h3>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            value={newAdmin.name}
            onChange={handleInputChange}
            className="mt-2 p-2 w-full sm:w-1/2 md:w-1/3 border rounded-md focus:outline-none"
            placeholder="Enter admin name"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={newAdmin.email}
            onChange={handleInputChange}
            className="mt-2 p-2 w-full sm:w-1/2 md:w-1/3 border rounded-md focus:outline-none"
            placeholder="Enter admin email"
          />
        </div>
        <div className="mt-4">
          <button
            onClick={handleAddAdmin}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminTable;
