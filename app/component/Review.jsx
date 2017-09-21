var React = require('react');
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


var Review = React.createClass({
    render:function(){
        var {statsJson, selectedLocation, reviewsJson} = this.props;
        console.log("---------------------------");
        console.log(reviewsJson);
        console.log(selectedLocation);
        return (

            <div>
                <div className="row">
                    <div className="col-sm-12 big_review">
                        <div className="row">
                            <div className="col-sm-12">
                                <span className="all_review_head"> Reviews </span>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-12">
                                <Tabs>
                                    <TabList>
                                        <Tab>Online Reviews</Tab>
                                        <Tab>Private Feedback</Tab>
                                    </TabList>

                                    <TabPanel className="bg_blu">
                                        <div className="row">
                                            <div className="col-sm-6 all_reviews">
                                                <span className="all_review_head">All Reviews</span>
                                                <form className="form_filter">
                                                    <input className="srch_button" name="Search" placeholder="Search"/>&emsp;
                                                    <button className="btn btn_primary btn_filter">Filter </button>
                                                </form>
                                            </div>
                                            <div className="col-sm-6">
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 review_box">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <img src="images/Oval.png"/>&emsp;<span className="onl_review_title">Josh Otteson</span> &emsp;
                                                        <img src="images/GoldReview.png"/><img src="images/GoldReview.png"/><img src="images/GoldReview.png"/><img src="images/GoldReview.png"/><img src="images/GoldReview.png"/>
                                                        <span className="days_ago"> 5 days ago</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12 ">
                                                        <p className="onl_review">
                                                            I know you know that online reviews are important for your business, but do you know how much they're really worth?
                                                            Not only do a huge 91 percent of consumers read online reviews, but they trust reviews as much as recommendations from friends and family.
                                                            To have a fighting chance in today’s digital world, your business needs to be consistently getting new reviews.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <a href="#"><span className="respond"> Respond </span> </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 review_box">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <img src="images/Oval.png"/>&emsp;<span className="onl_review_title">Dave Hodgkinson</span> &emsp;
                                                        <img src="images/GoldReview.png"/><img src="images/GoldReview.png"/><img src="images/GoldReview.png"/><img src="images/GoldReview.png"/><img src="images/SilverReview.png"/>
                                                        <span className="days_ago"> 10 days ago</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12 ">
                                                        <p className="onl_review">
                                                            I know you know that online reviews are important for your business, but do you know how much they're really worth?
                                                            Not only do a huge 91 percent of consumers read online reviews, but they trust reviews as much as recommendations from friends and family.
                                                            To have a fighting chance in today’s digital world, your business needs to be consistently getting new reviews.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <a href="#"><span className="respond"> Respond </span> </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 review_box">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <img src="images/Oval.png"/>&emsp;<span className="onl_review_title">Craig Weston</span> &emsp;
                                                        <img src="images/GoldReview.png"/><img src="images/GoldReview.png"/><img src="images/SilverReview.png"/><img src="images/SilverReview.png"/><img src="images/SilverReview.png"/>
                                                        <span className="days_ago"> 15 days ago</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12 ">
                                                        <p className="onl_review">
                                                            I know you know that online reviews are important for your business, but do you know how much they're really worth?
                                                            Not only do a huge 91 percent of consumers read online reviews, but they trust reviews as much as recommendations from friends and family.
                                                            To have a fighting chance in today’s digital world, your business needs to be consistently getting new reviews.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <a href="#"><span className="respond"> Respond </span> </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                            </div>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <h2>Any content 2</h2>
                                    </TabPanel>

                                </Tabs>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
});

module.exports = Review;