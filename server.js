// server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const cors = require('cors');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || '/api/v1';

// Test root route
app.get('/', (req, res) => res.send('Server is running!'));

// CONNECT ROUTES
const apiRoutes = require('./src/routes/apiRoutes');
const authRoutes = require('./src/routes/authRoutes');

app.use(BASE_URI, apiRoutes);
app.use('/api/v1/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Base URI: http://localhost:${PORT}${BASE_URI}`);
});