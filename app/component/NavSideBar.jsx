var React = require('react');
var NavSideBar = React.createClass({
    render:function () {
        return(
            <div className="container anly_body">
                <div className="row">
                    <div className="col-xs-4 nav_bar">
                        <br/><br/>

                        <div className="logo_holder">
                            Logo
                        </div>
                        <br/><br/>
                        <button className="btn btn_primary send_invite">
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
                    <div className="col-xs-8 col-sm-offset-4 dash_bar">
                        <div className="headbar">
                            Drop Down here !!
                            <img src="images/CustomerProfile.png" className="Cprofile"/>
                        </div>
                        <div className="all_body">
                            <div className="box_review">
                                <span className="review_head"> Reviews</span>
                                <hr/>
                                <div className="in_review">
                                    <span className="revno">316</span>
                                    <div className="row">
                                        <div className="col-xs-6 app_review">
                                            <div className="review_app"></div><span>4.8</span><img src="images/smallreview.png"/>
                                            <p>Facebook is your top
                                                rated review site.</p>
                                        </div>
                                        <div className="col-xs-6 review_positive">
                                            <img src="images/smileycolor.png"/><span>+41</span>
                                            <p>positive reviews
                                                gained this month.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box_avg_rating">
                                <h5>Lifetime Avg Rating</h5>
                                <hr/>
                            </div>
                            <br/>
                            <div className="box_sentiment">
                                <h5>Sentiment</h5>
                                <hr/>
                            </div>
                            <div className="box_CTR">
                                <h5>Link Click-thru Rate</h5>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
});

module.exports=NavSideBar;
