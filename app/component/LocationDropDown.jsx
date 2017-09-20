var React = require('react');
var {Link, IndexLink} = require('react-router');
var locationDropDownApi = require('locationDropDownApi');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


var LocationDropDown = React.createClass({
    onLocationChange: function (e) {
        console.log(e.target.value);
        this.setState({selectedLocation: e.target.value});
        this.props.onLocationChangeStat(e.target.value);
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
