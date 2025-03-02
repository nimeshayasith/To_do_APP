const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  todos:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Todo",
    }
],
createdAt:{
    type:Date,
    default:Date.now
},},
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', UserSchema);