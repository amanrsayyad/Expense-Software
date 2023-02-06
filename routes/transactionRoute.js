const express = require('express');
const { getAllTransaction, createTransaction } = require('../controllers/transactionCtrl');

// Router Object
const router = express.Router();

// Router
// POST || CREATE TRANSACTION
router.post('/create-transaction', createTransaction);

// POST || GET TRANSACTION
router.post('/get-transaction', getAllTransaction);

module.exports = router;