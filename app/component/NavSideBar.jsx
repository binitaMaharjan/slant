var React = require('react');
var {Link, IndexLink} = require('react-router');

var NavSideBar = React.createClass({
    render:function () {
        return(
            <div className="row">
                <div className="col-sm-12 side_nav">
                    <br/><br/>
                    <div className="logo_holder">
                        Logo
                    </div>
                    <br/><br/>
                    <button className="btn btn_primary send_invite">
                        <img src="images/airplane.png"/>&#8195;  Send Request
                    </button>
                    <br/>
                    <br/><br/>
                    <br/>
                    <ul className="nav nav-pills nav-stacked">
                        <li><Link to="#" className="active"><img src="images/Analytics.png"/>&#8195; Analytics</Link></li>
                        <li><Link to="#"><img src="images/Reviews.png"/>&#8195; Reviews <span className="badge">12</span></Link></li>
                        <li><Link to="#"><img src="images/Customers.png"/>&#8195; Customers</Link></li>
                        <li><Link to="#"><img src="images/Settings.png"/>&#8195; Settings</Link></li>
                    </ul>
                </div>
            </div>

        );
    }
});

module.exports=NavSideBar;
