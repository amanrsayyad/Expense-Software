const customerModel = require('../models/customerModel');

const getAllCustomers = async (req, res) => {
    try {
        const customer = await customerModel.find({ userid: req.body.userid });
        res.status(200).json(customer);
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

const createCustomers = async (req, res) => {
    try {
        const newCustomer = new customerModel(req.body);
        await newCustomer.save();
        res.status(201).send('Master Created')
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

module.exports = { getAllCustomers, createCustomers }