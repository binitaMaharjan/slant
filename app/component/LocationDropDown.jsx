var React = require('react');
var {Link, IndexLink} = require('react-router');
var locationDropDownApi = require('locationDropDownApi');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


var LocationDropDown = React.createClass({
    /*componentDidMount() {
        var that = this;
        var user_id = '9597eec9-2fbf-4b44-a594-11d1db8048a5';
        locationDropDownApi.getLocationByUser(user_id).then(function (jsonString) {
            that.setState({
                locationArray:jsonString,
            })
        },function (e) {
            that.setState({
                errorMessage:e.message
            });
        })
    },*/
    onLocationChange: function (e) {
        this.setState({selectedLocation: e.target.value});
    },
    render:function () {
        var {locationArray, errorMessage, selectedLocation} = this.props;
        var renderOptions = () =>{
            return locationArray.locations.map((loca, index)=>{
                return(
                    <option key={loca.id} value={loca.id}>{loca.name}</option>
                )
            })
        }

        if( locationArray.locations === undefined ) {
            return <div>Loading...</div>
        }
        return(
            <div className="dropdown loc_dd">
                <p>rest{selectedLocation}</p>
                <select id="location" name="location" className="col-sm-4" onChange={this.onLocationChange}>
                    <optgroup label="Select Location">
                        <option value="test">test</option>
                        {renderOptions()}
                    </optgroup>

                </select>
            </div>

        );
    }
});

module.exports=LocationDropDown;
