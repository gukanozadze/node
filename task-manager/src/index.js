const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

// Automatically parses incoming json to object
app.use(express.json())

app.get('/users', (req, res) => {
  
  User.findOne(req.body).then(result => {
    console.log(result)
    res.status(200).send(result)

  }).catch(err => {
    console.log(err)
    res.status(400).send(err)

  })
})

app.post('/users', (req, res) => {
  const user = new User(req.body)

  user.save().then((result) =>{ 
    console.log(result)
    res.send(user)
  }).catch(err => {
    console.log(err)
  })
})

app.post('/task', (req, res) => {
  const task = new Task(req.body)

  task.save().then(result => {
    console.log(result)
    res.status(201).send(task)
  }).catch(err => {
    res.status(400).send(err)
    console.log('ERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERRORERROR')
  })
})

app.get('/task', (req, res) => {

  Task.find(req.body).then(tasks => {
    if(!tasks){
      return res.status(404).send()
    }

    res.status(201).send(tasks)
  }).catch(err => {
    res.status(400).send(err)
  })
})

app.listen(port, () => {
  console.log(`server is up on port ${port}`)
})