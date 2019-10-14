const request = require("request");

const forecast = (lat, long) => {
  const key = "6a1aa1c2f6aaefb5c3a2638488a0e2fb";
  const url = `https://api.darksky.net/forecast/${key}/${lat},${long}`;

  request({ url: url, json: true }, (err, response) => {

    const currently = response.body.currently;

    console.log(`${currently.summary}, Currently ${currently.temperature} degrees out. there is a ${currently.precipProbability} chance of rain`);
  }
  );
};

module.exports = forecast;
