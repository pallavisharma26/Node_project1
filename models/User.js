const mongoose = require('mongoose');
const dotenv = require('dotenv');

const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      
    },
    
    email: {
      type: String,
      required: true,
      unique:true,
      match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    
    },
    
      password: {
      type: String,
      required: true,
      select:false

    }
    
    
  });
  
  const User = mongoose.model('User', UserSchema);
  
  module.exports = User;

