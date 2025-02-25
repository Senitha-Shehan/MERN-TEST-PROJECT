import React, { useEffect, useState } from "react";
import axios from "axios";

const URL = "http://localhost:5000/users";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    fetchHandler().then((data) => setUsers(data));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${URL}/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedUser(users[index]);
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`${URL}/${id}`, editedUser);
      const updatedUsers = [...users];
      updatedUsers[editIndex] = editedUser;
      setUsers(updatedUsers);
      setEditIndex(null);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">User Details</h1>

      <div className="overflow-x-auto">
        <table className="table w-full border-collapse border border-gray-300 shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Age</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user._id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  
                  {/* Editable Inputs */}
                  {editIndex === index ? (
                    <>
                      <td className="border border-gray-300 px-4 py-2">
                        <input
                          type="text"
                          name="name"
                          value={editedUser.name}
                          onChange={handleChange}
                          className="border px-2 py-1 w-full"
                        />
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <input
                          type="number"
                          name="age"
                          value={editedUser.age}
                          onChange={handleChange}
                          className="border px-2 py-1 w-full"
                        />
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <input
                          type="email"
                          name="email"
                          value={editedUser.email}
                          onChange={handleChange}
                          className="border px-2 py-1 w-full"
                        />
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                      <td className="border border-gray-300 px-4 py-2">{user.age}</td>
                      <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                    </>
                  )}

                  {/* Actions */}
                  <td className="border border-gray-300 px-4 py-2 space-x-2">
                    {editIndex === index ? (
                      <button
                        onClick={() => handleUpdate(user._id)}
                        className="bg-green-500 text-white px-3 py-1 rounded"
                      >
                        Update
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEdit(index)}
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDetails;
