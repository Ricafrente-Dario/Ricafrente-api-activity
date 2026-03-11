// src/routes/apiRoutes.js
const express = require('express');
const router = express.Router();

const {
    getAllDishes,
    createDish,
    createChef,
    getDishById,
    updateDish,
    deleteDish
} = require('../controllers/dishController');

const { protect, authorize } = require('../middleware/authMiddleware');

// Root of /api/v1
router.get('/', (req, res) => res.send('✅ API v1 is working!'));

// Dishes routes
router.get('/dishes', getAllDishes); // Anyone can view
router.get('/dishes/:id', getDishById); // Anyone can view

// Protected routes — only Admins and Managers can modify data
router.post('/dishes', protect, authorize('admin', 'manager'), createDish);
router.put('/dishes/:id', protect, authorize('admin', 'manager'), updateDish);
router.delete('/dishes/:id', protect, authorize('admin', 'manager'), deleteDish);

// Chefs route — also protected
router.post('/chefs', protect, authorize('admin', 'manager'), createChef);

module.exports = router;