var React = require('react');
var {Link, IndexLink} = require('react-router');
import LocationDropDown from 'LocationDropDown';
var Cookies = require('universal-cookie');
const cookie = new Cookies();
var {Route, Router, IndexRoute, hashHistory,browserHistory} = require('react-router');


var TopNav = React.createClass({
    handleLogout: function (e) {
        e.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        cookie.remove('access_token', { path: '/' });
        cookie.remove('user', { path: '/' });
        browserHistory.push("/login");
        return;
    },
    handleLocationChange: function(location){
        this.props.onLocationChangeGraph (location);
    },
    render:function () {
        var {locationArray} = this.props;
        return(
            <div className="headbar">

                <div className="btn-group navbar-right slant-logout">

                    <img src="images/CustomerProfile.png" className="dropdown-toggle Cprofile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>

                    <ul className="dropdown-menu">
                        <li><Link to="#">Change Password</Link></li>
                        <li><Link to="#" onClick={this.handleLogout}>Logout</Link></li>
                    </ul>
                </div>
                <LocationDropDown locationArray={locationArray} onLocationChangeStat={this.handleLocationChange}/>
            </div>

        );
    }
});

module.exports=TopNav;
