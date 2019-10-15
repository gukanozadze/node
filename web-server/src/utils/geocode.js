const request = require('request')


const geocode = (city, callback) => {
  const TOKEN = 'pk.eyJ1IjoiZ3VrYW5vemFkemUiLCJhIjoiY2sxcXQxanYyMDBpODNibjM5bHN2YzJodiJ9.TkVR0ITKwdRNbtLf09uT5Q'
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(city)}.json/?access_token=pk.eyJ1IjoiZ3VrYW5vemFkemUiLCJhIjoiY2sxcXQxanYyMDBpODNibjM5bHN2YzJodiJ9.TkVR0ITKwdRNbtLf09uT5Q`
  // https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(city)}.json/?acc
  request({ url: url, json: true }, (error, response, body) => {

    console.log(response.body.error)
    console.log(error)
    
    if(error){
      callback('Unable to connect to server', undefined)
    }else if(!body.features[0]){
      callback('Unable to fetch location (Please provide valid search term)', undefined)
    }else{
      callback(undefined, {
        lat: body.features[0].center[1],
        long: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
   

  })
}

module.exports = geocode