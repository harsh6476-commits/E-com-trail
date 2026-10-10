const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
    type: String,
    required: [true, "Please provide a name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"]
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6
  },
  phone: {
    type:Number,
    required:[true,"Please provide a phone number"]
  },
  role:{
    type:String,
    
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true 
});

const Users = mongoose.model('Userschema',Users)

module.exports = Users