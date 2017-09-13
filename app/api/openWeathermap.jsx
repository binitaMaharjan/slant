var axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=e907bf2b30114e638ad2c9e4d7c85a8d&units=imperial';

module.exports ={
    getTemp:function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }else{
                return res.data.main.temp;
            }

        },function (res) {
            throw new Error(res.data.message);
        });
    }
}