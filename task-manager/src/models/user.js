const mongoose = require('mongoose')


const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  age: {
    type: Number,
    default: 0,
    min: [0, 'number is less than 0']
  },
  password: {
    type: String,
    required:true,
    trim:true,
    minlength: [6, 'Password length is less than 6'],
    validate(value){
      if(value.includes('foof')){
        throw new Error('password includes \'foof\'')
      }
    }
  }
})

module.exports = User