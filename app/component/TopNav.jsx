var React = require('react');
var {Link, IndexLink} = require('react-router');
import LocationDropDown from 'LocationDropDown';

var {Route, Router, IndexRoute, hashHistory,browserHistory} = require('react-router');


var TopNav = React.createClass({
    handleLogout: function (e) {
        e.preventDefault();
        localStorage.removeItem('token');
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
                <LocationDropDown locationArray={locationArray} onLocationChangeStat={this.handleLocationChange}/>
                <div className="btn-group navbar-right slant-logout">

                    <img src="images/CustomerProfile.png" className="dropdown-toggle Cprofile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>

                    <ul className="dropdown-menu">
                        <li><Link to="#">Change Password</Link></li>
                        <li><Link to="#" onClick={this.handleLogout}>Logout</Link></li>
                    </ul>
                </div>
            </div>

        );
    }
});

module.exports=TopNav;
