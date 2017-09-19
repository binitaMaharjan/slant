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
    render:function () {
        return(
            <div className="headbar">
                <LocationDropDown handleChangedLocation={this.handleChangedLocation}/>
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
