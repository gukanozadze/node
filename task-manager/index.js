const express = require('express')

const app = express()

const port = process.env.PORT || 3000

// Automatically parses incoming json to object
app.use(express.json())

app.post('/users', (req, res) => {
  console.log(req.body)
  res.send('Testing Perfect')
})

app.listen(port, () => {
  console.log(`server is up on port ${port}`)
})