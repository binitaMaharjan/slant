var axios = require('axios');
var Cookies = require('universal-cookie');
const URL = 'https://api.slantreviews.com/v2/users/me';
const cookies = new Cookies();
module.exports = {
    getCurrentUser: function () {
        return axios.get(URL, {
            }).then(function (res) {
            if (res.status != 200) {
                throw new Error(res.data.message)
            } else {
                axios.defaults.headers.common['Authorization'] = cookies.get('access_token');
                return res;
            }
        }, function (res) {
            throw new Error("The email or password is incorrect.");
        });
    }
};
