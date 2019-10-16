const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/task-manager-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})

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
      if(value.includes('password')){
        throw new Error('password includes \'password\'')
      }
    }
  }
})

const me = new User({
  name: 'Andrew',
  email: '   gakaASA@gaka.com',
  password: 'password'
})


me.save().then((result) => {
  console.log(result)
}).catch((err) => {
  console.log('Error!', err.errors.password.message)
})