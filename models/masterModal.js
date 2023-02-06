const mongoose = require('mongoose');

const masterSchema = new mongoose.Schema(
  {  
    userid: {
      type: String,
      required: true
    },
    mastername: {
      type: String,
      required: [true, 'mastername is required'],
    },
    masterbank: {
      type: String,
      required: [true, 'masterbank is required'],
    },
    masteraccount: {
      type: String,
      required: [true, 'masteraccount is required'],
    },
  },
  { timestamps: true }
);

const masterModal = mongoose.model('masters', masterSchema);

module.exports = masterModal;
