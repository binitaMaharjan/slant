var React= require('react');
var Analytics = require('Analytics');
var NavSideBar = require('NavSideBar');
var TopNav = require('TopNav');

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
            })
        },function (e) {
            that.setState({
                errorMessage:e.message
            });
        })

        console.log(that.state.locations[0].id);


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
        var {locationArray,statsJson} = this.state;
        if( locationArray.locations === undefined ) {
            return <div className="row">Loading...</div>
        }
        if(locationArray.locations[0] !== undefined){
            if(statsJson === '') {
                this.getLocationStatistics(locationArray.locations[0].id);
            }

        }
        return (
            <div className="row">
                <div className="col-sm-2">
                    <NavSideBar/>
                </div>
                <div className="col-sm-10">
                    <div className="row">
                        <div className="col-sm-12">
                            <TopNav/>
                        </div>
                    </div>
                    <div>
                        {props.children}
                    </div>

                </div>
            </div>
        );
    }
});

module.exports= Dashboard;