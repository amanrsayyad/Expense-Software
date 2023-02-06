const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: [true, 'Amount Is Required']
    },
    category: {
        type: String,
        required: [true, 'Category Is Required']
    },
    mastername: {
        type: String,
        required: [true, 'Master Name Is Required']
    },
    description: {
        type: String,
        required: [true, 'Description Is Required']
    },
    date: {
        type: Date,
        required: [true, "data is required"],
    }
}, { timestamps: true });

const transactionModel = mongoose.model('transaction', transactionSchema);

module.exports = transactionModel;