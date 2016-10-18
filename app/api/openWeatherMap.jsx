var axios = require('axios');

const OPEN_WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=3916693f6ef8886ac1950a497856a35e&units=metric';

module.exports= {
  getTemp : function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
    
        if(res.data.cod && res.data.message) {
          throw new Error(res.data.message)
        } else {
          return res.data.main.temp;
        }
    }, function(res){
        throw new Error(res.data.message)
    });
  }
}
