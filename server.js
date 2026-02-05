
require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const cors = require('cors');
const app = express();
connectDB();


app.use(cors());
app.use(express.json());

// Environment variables
const PORT = process.env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || '/api/v1';

// CONNECT ROUTES
const apiRoutes = require('./src/routes/apiRoutes'); // make sure this path is correct
app.use(process.env.BASE_URI, apiRoutes);                            

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Base URI: http://localhost:${PORT}${BASE_URI}`);
});

