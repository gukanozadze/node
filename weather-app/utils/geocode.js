const request = require('request')


const geocode = (city, callback) => {
  const TOKEN = 'pk.eyJ1IjoiZ3VrYW5vemFkemUiLCJhIjoiY2sxcXQxanYyMDBpODNibjM5bHN2YzJodiJ9.TkVR0ITKwdRNbtLf09uT5Q'
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(city)}.json/?access_token=${TOKEN}`

  request({ url: url, json: true }, (error, response) => {
    const features = response.body.features[0]

    callback(error, {
      lat: features.center[1],
      long: features.center[0],
      location: features.place_name
    })

  })
}

module.exports = geocode