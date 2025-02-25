import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        age: "",
        email: ""
    });

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/users", inputs);
            alert("User added successfully!");
            navigate(`/UserDetails`); // Navigate to user details
        } catch (error) {
            console.error("Error adding user:", error.response?.data || error.message);
            alert(error.response?.data?.message || "Failed to add user.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="card w-96 bg-white shadow-xl p-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Add User</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="label">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={inputs.name}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            placeholder="Enter Name"
                            required
                        />
                    </div>
                    <div>
                        <label className="label">Age</label>
                        <input
                            type="number"
                            name="age"
                            value={inputs.age}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            placeholder="Enter Age"
                            required
                        />
                    </div>
                    <div>
                        <label className="label">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={inputs.email}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            placeholder="Enter Email"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-full">Add User</button>
                </form>
                <button onClick={() => navigate("/")} className="btn btn-secondary mt-4 w-full">
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default AddUser;
