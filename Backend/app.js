const express = require('express');
const mongoose = require('mongoose');
const Router = require('./Routes/userRoutes');
require('dotenv').config(); 

const app = express();
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(cors());
app.use('/users',Router);

// Connect to MongoDB (Remove deprecated options)
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to MongoDB ✅");
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT} 🚀`);
    });
})
.catch((err) => console.log("MongoDB Connection Error ❌:", err));
