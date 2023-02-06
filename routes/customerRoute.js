const express = require('express');
const { getAllCustomers, createCustomers } = require('../controllers/customerCtrl');

// Router Object
const router = express.Router();

// Router
// POST || CREATE CUSTOMER
router.post('/create-customer', createCustomers)

// Router
// POST || GET CUSTOMER
router.post('/get-customer', getAllCustomers)

module.exports = router;