const User = require('../Model/userModel');

// @desc Get all users
// @route GET /api/users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// @desc Create a new user
// @route POST /api/users
exports.createUser = async (req, res) => {
    try {
        const { name, age, email } = req.body;

        // Check if user already exists
        let userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "User already exists" });

        // Create new user
        const user = new User({ name, age, email });
        await user.save();

        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// @desc Delete a user
// @route DELETE /api/users/:id
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// @desc Get user by ID
// @route GET /api/users/:id
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// @desc Update user by ID
// @route PUT /api/users/:id
exports.updateUser = async (req, res) => {
    try {
        const { name, age, email } = req.body;

        // Find and update user
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { name, age, email },
            { new: true, runValidators: true }
        );

        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json({ message: "User updated successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
