const mongoose = require('mongoose');

// Define the schema for your MongoDB collection
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: false,
      },
      country: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: false,
      },
      desc: {
        type: String,
        required: false,
      },
      isSeller: {
        type: Boolean,
        default:false
      },
    },{
      timestamps:true
    });
    

// Create a model using the schema
const User = mongoose.model('User', userSchema);

module.exports = User; // Export the model to use in other parts of your application
