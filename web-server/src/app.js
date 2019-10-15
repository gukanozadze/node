const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
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
  if (!req.query.address) {
    return res.send({
      error: 'You must provide a address',
    })
  }

  geocode(req.query.address, (error, { lat, long, location } = {}) => {
    if (error) {
      return res.send({ error })
    }

    forecast(lat, long, (error, forecastData) => {
      if (error) {
        return res.send({ error: error })
      }

      res.send({
        location: location,
        forecast: forecastData.summary,
        temperature: forecastData.temperature,
        address: req.query.address
      })
    })

  })
})

// app.get('/products', (req, res) => {
//   if (!req.query.search) {
//     return res.send({
//       error: 'You must provide a search term',
//     })
//   }

//   res.send({
//     products: [],
//   })
// })


// 404 page
app.get('*', (req, res) => {
  res.render('404', { errorMessage: '404 not found' })
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`)
})