const masterModal = require('../models/masterModal');

const getAllMasters = async (req, res) => {
    try {
        const masters = await masterModal.find({ userid: req.body.userid });
        res.status(200).json(masters);
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

const createMasters = async (req, res) => {
    try {
        const newMaster = new masterModal(req.body);
        await newMaster.save();
        res.status(201).send('Master Created')
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

module.exports = { getAllMasters, createMasters }