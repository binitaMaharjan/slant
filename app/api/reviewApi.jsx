var axios = require('axios');
const defaultURL = 'https://api.slantreviews.com/v2/locations/';

module.exports = {
    getReview: function (location_id = '') {
        var requestUrl = `${defaultURL}${location_id}` + '/reviews';
        return axios.get(requestUrl, {headers: {Authorization: localStorage.getItem('token')}}).then(function (res) {
            if (res.status != 200) {
                console.log("status code is not 200");
                throw new Error(res.data.message);
            } else {
                return res.data;
            }

        }, function (res) {
            throw new Error(res.data.message);
        });
    }
}
