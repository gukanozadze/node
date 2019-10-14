const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const argv = require('yargs').argv

if (argv.city) {
  
  geocode(argv.city, (error, data) => {
    if (!error) {
      console.log(data)
      forecast(data.lat, data.long)
    } else {
      console.log('error:', error)
    }
  })
} else {
  console.log('Please provide city (node app.js --city="CITY_NAME")')
}


