const express = require('express');
const { getUsers, createUser, deleteUser, getUserById, updateUser} = require('../Controllers/userController');
const router = express.Router();

router.get('/', getUsers); // Get all users
router.post('/', createUser); // Create a new user
router.delete('/:id', deleteUser); // Delete user by ID
router.get('/:id', getUserById);
router.put('/:id', updateUser);


module.exports = router;
