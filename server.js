const express = require('express');
const connectDB = require('./config/db');
const tripRoutes = require('./routes/tripRoutes');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use('/api', tripRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
