const express = require('express');
const { createMasters, getAllMasters } = require('../controllers/masterController')

// Router Object
const router = express.Router();

// Router
// POST || CREATE TRANSACTION
router.post('/create-master', createMasters)

// POST || GET MASTERS
router.post('/get-masters', getAllMasters)


module.exports = router;
