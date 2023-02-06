const transactionModel = require('../models/transactionModel');
const moment = require('moment');

const getAllTransaction = async (req, res) => {
    try {
        const { frequency, selectedDate, category, mastername } = req.body;
        const masters = await transactionModel.find({
            ...(frequency !== "custom"
                ? {
                    date: {
                        $gt: moment().subtract(Number(frequency), "d").toDate(),
                    },
                }
                : {
                    date: {
                        $gte: selectedDate[0],
                        $lte: selectedDate[1],
                    },
                }),
            userid: req.body.userid,
            ...(category !== "All" && { category }),
            ...(mastername !== "All" && { mastername })
        });
        res.status(200).json(masters);
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

const createTransaction = async (req, res) => {
    try {
        const newMaster = new transactionModel(req.body);
        await newMaster.save();
        res.status(201).send('Master Created')
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

module.exports = { getAllTransaction, createTransaction }