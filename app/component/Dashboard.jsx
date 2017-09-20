var React= require('react');
var Analytics = require('Analytics');
var NavSideBar = require('NavSideBar');
var TopNav = require('TopNav');
var Review = require('Review');
var Customer = require('Customer');
var locationDropDownApi = require('locationDropDownApi');
var LocationStats = require('LocationStats');

var Dashboard = React.createClass({
    getInitialState: function () {
        return {
            locationArray: [],
            errorMessage: '',
            selectedLocation: '',
            statsJson:''
        }
    },
    componentDidMount() {
        var that = this;
        var user_id = '9597eec9-2fbf-4b44-a594-11d1db8048a5';
        locationDropDownApi.getLocationByUser(user_id).then(function (jsonString) {

            that.setState({
                locationArray:jsonString,
                selectedLocation: jsonString.locations[0].id
            })
        },function (e) {
            that.setState({
                errorMessage:e.message
            });
        })
    },
    handleLocationChange: function (location) {
        this.getLocationStatistics(location);
    },
    getLocationStatistics:function(location_id) {
        var that = this;
        LocationStats.getLocationStats(location_id).then(function (jsonString) {
            that.setState({
                statsJson:jsonString,
            })
        },function (e) {
            that.setState({
                errorMessage:e.message
            });
        })
    },
    render: function () {
        var {locationArray,statsJson, selectedLocation} = this.state;
        if( locationArray.locations === undefined ) {
            return <div className="row">Loading...</div>
        }
        if(selectedLocation !== '' && statsJson === ''){
                this.getLocationStatistics(selectedLocation);
        }
        return (
            <div className="row">
                <div className="col-sm-2">
                    <NavSideBar/>
                </div>
                <div className="col-sm-10">
                    <div className="row">
                        <div className="col-sm-12">
                            <TopNav locationArray={locationArray} onLocationChangeGraph={this.handleLocationChange}/>
                        </div>
                    </div>
                    <div>
                        {React.cloneElement(this.props.children, { statsJson: statsJson, selectedLocation: selectedLocation })}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports= Dashboard;