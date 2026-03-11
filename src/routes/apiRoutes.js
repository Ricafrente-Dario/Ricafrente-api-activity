const express = require('express');
const router = express.Router();

const {
    getAllDishes,
    createDish,
    createChef,
    getDishById,
    updateDish,
    deleteDish
} = require('../controllers/dishController')
const { create } = require('../models/dishModel');

router.get('/dishes', getAllDishes);          // GET all dishes

router.post('/dishes', createDish);   

router.post('/chefs', createChef);   

router.get('/dishes/:id', getDishById);      // GET a dish by ID

router.put('/dishes/:id', updateDish);       // UPDATE a dish by ID

router.delete('/dishes/:id', deleteDish);    // DELETE a dish by ID

module.exports = router;