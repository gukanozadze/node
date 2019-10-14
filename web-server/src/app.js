const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const pubilcDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views') 
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup Handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to server
app.use(express.static(pubilcDirPath))


app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Guka'
  })
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'clear',
    location: 'Tbilisi',
  })
})

// 404 page
app.get('*', (req, res) => {
  res.render('404', {errorMessage: '404 not found'})
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})