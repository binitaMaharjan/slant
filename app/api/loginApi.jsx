var axios = require('axios');
const LOGIN_URL = 'https://api.slantreviews.com/v2/auth/login';

/*module.exports ={a
    getLoggedIn:function (email, password) {
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
}*/


module.exports = {
    getLoggedIn: function (email, password) {
        return axios.post(LOGIN_URL, {
            email: email,
            password: password
        }).then(function (res) {
            console.log(res.data);
            if (res.status === 200) {
                axios.defaults.headers.common['Authorization'] = res.data.access_token;
                return res.data.access_token;

            } else {
                //axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
                throw new Error(res.data.message)

            }
        }, function (res) {
            throw new Error("The email or password is incorrect.");
        });
    }
}

/*
axios.post(LOGIN_URL, {
    firstName: 'Fred',
    lastName: 'Flintstone'
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });*/
