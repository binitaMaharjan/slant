var axios = require('axios');
const URL = 'https://api.slantreviews.com/v2/users/me';


module.exports = {
    getCurrentUser: function () {
        return axios.get(URL, {
            }).then(function (res) {
            if (res.status != 200) {
                throw new Error(res.data.message)
            } else {
                axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
            }
        }, function (res) {
            throw new Error("The email or password is incorrect.");
        });
    }
};
