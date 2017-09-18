var React = require('react');
var {Link, IndexLink} = require('react-router');
var locationDropDownApi = require('locationDropDownApi');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


var TopNav = React.createClass({
    getInitialState: function () {
        return {
            locationArray:{},
            errorMessage: null
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
    },
    handleLogout: function (e) {
        e.preventDefault();
        localStorage.removeItem('token');
        hashHistory.push("/login");
        return;
    },
    render:function () {
        var {locationArray, errorMessage} = this.state;
        var selectString = '';
        var renderOptions = () =>{
            return locationArray.locations.map((loca)=>{
                console.log(loca);
                return(
                    <option key = {loca.id}>{loca.name}</option>
                )
            })
        }

        if( locationArray.locations === undefined ) {
            return <div>Loading...</div>
        }
        return(
            <div className="headbar">
                <select name="location" className="col-md-6">
                    {renderOptions()}
                </select>
                <div className="btn-group navbar-right slant-logout">
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Action <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><Link to="#" onClick={this.handleLogout}>Logout</Link></li>
                    </ul>
                </div>
            </div>

        );
    }
});

module.exports=TopNav;
