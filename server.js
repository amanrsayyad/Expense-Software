const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDb = require('./config/connectDb');
const path = require('path');

// Config dot env file
dotenv.config();

// database connection
connectDb();

// Rest Object
const app = express();

// middelwares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// routes
// user route
app.use('/api/v1/users', require('./routes/userRoute'))

// master route
app.use('/api/v1/masters', require('./routes/masterRoute'))

// transactiob route
app.use('/api/v1/transaction', require('./routes/transactionRoute'));

// customer route
app.use('/api/v1/customers', require('./routes/customerRoute'));

// Static Files
app.use(express.static(path.join(__dirname, './Client/build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './Client/build/index.html'));
})

// PORT
const PORT = 8080 || process.env.PORT;

// listen
app.listen(PORT, () => {
  console.log(`SERVER STARTED ON ${PORT}`);
});
