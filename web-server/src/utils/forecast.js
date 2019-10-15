const request = require("request");

const forecast = (lat, long, callback) => {
  const key = "6a1aa1c2f6aaefb5c3a2638488a0e2fb";
  const url = `https://api.darksky.net/forecast/${key}/${lat},${long}`;

  request({ url: url, json: true }, (error, response) => {

    if(error){
      callback('unable to connect', undefined)
    }else if(response.body.error){
      callback('provide valid lat and long', undefined)
    }else{
      const currently = response.body.currently;

      callback(undefined, {
        summary: currently.summary,
        temperature: currently.temperature
      })
    }
    

  }
  );
};

module.exports = forecast;
