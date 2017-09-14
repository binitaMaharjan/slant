var React = require('react');
var NavSideBar = React.createClass({
    render:function () {
        return(
            <div className="col-xs-4 nav_bar">
                <br/><br/>

                <div className="logo_holder">
                    Logo
                </div>
                <br/><br/>
                <button className="btn btn_primary send_invite" data-toggle="modal" data-target="#myModal">
                    <img src="images/airplane.png"/>&#8195;  Send Request
                </button>
                <br/>
                <br/>
                <ul>
                    <li><a className="active" href="#"><img src="images/Analytics.png"/>&#8195; Analytics</a></li>
                    <li><a href="#"><img src="images/Reviews.png"/>&#8195; Reviews <span className="noti">12</span></a></li>
                    <li><a href="#"><img src="images/Customers.png"/>&#8195; Customers</a></li>
                    <li><a href="#"><img src="images/Settings.png"/>&#8195; Settings</a></li>
                </ul>
            </div>

        );
    }
});

module.exports=NavSideBar;
