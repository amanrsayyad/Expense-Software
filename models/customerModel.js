const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    customername: {
        type: String,
        required: [true, 'Customer Name Required']
    },
    buisnessname: {
        type: String,
        required: [true, 'Customer Buisness Name Required']
    },
    customermo: {
        type: Number,
        required: [true, 'Customer Mobile Number Required']
    },
});

const customerModel = mongoose.model('customers', customerSchema);

module.exports = customerModel;