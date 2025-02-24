const express = require('express');
const { getUsers, createUser, deleteUser } = require('../Controllers/userController');

const router = express.Router();

router.get('/', getUsers); // Get all users
router.post('/', createUser); // Create a new user
router.delete('/:id', deleteUser); // Delete user by ID

module.exports = router;
