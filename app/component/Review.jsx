var React = require('react');
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import StarRating from 'react-star-rating';
var moment = require('moment');
moment().format();

var Review = React.createClass({
    render: function () {

        var {statsJson, selectedLocation, reviewsJson} = this.props;
        if (jQuery.isEmptyObject(reviewsJson) || typeof(reviewsJson) === "undefined") {
            return <div>Loading...</div>
        }
        var reviewData = reviewsJson;
        var reviewInfo = () => {

            if (reviewData.reviews.length > 0) {
                return reviewData.reviews.map((result, index) => {
                    //    if(index!==0) {
                    return (

                        <div className="col-sm-6 review_box">
                            {/*<Rater interactive={false} rating={3.6}/>*/}
                            <StarRating  totalStars={5} rating={result.rating}  disabled="disabled"/>
                            {/*<Rater total={5} rating={result.rating}  interactive={false}></Rater>*/}
                            <div className="row">
                                <div className="col-sm-12">
                                    <img src="images/Oval.png"/>&emsp;<span
                                    className="onl_review_title">{result.author}</span> &emsp;


                                    {/*<img src="images/GoldReview.png"/><img*/}
                                    {/*src="images/GoldReview.png"/><img*/}
                                    {/*src="images/GoldReview.png"/><img*/}
                                    {/*src="images/GoldReview.png"/><img*/}
                                    {/*src="images/GoldReview.png"/>*/}

                                    <span className="days_ago"> 5 days ago</span>

                                </div>

                            </div>

                            <div className="row">
                                <div className="col-sm-12 ">
                                    <p className="onl_review">
                                        {result.body}
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <a href={result.response_url}><span className="respond"> Respond </span> </a>
                                </div>
                            </div>
                        </div>

                    )
                    // }
                })
            }
            return <div>Loading...</div>
        };
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
                                    <TabList className="nav nav-tabs">
                                        <Tab className="active">Online Reviews</Tab>

                                        <Tab>Private Feedback</Tab>
                                    </TabList>

                                    <TabPanel className="bg_blu">
                                        <div className="row">
                                            <div className="col-sm-6 all_reviews">
                                                <span className="all_review_head">All Reviews</span>
                                                <form className="form_filter">
                                                    <input className="srch_button" name="Search"
                                                           placeholder="Search"/>&emsp;
                                                    <button className="btn btn_primary btn_filter">Filter</button>
                                                </form>
                                            </div>
                                            <div className="col-sm-6">
                                            </div>
                                        </div>
                                        <div className="row">
                                            {reviewInfo()}
                                        </div>
                                    </TabPanel>

                                    <TabPanel className="bg_blu">
                                        <div className="row">
                                            <div className="col-sm-6 all_reviews">
                                                <span className="all_review_head">All Private Feedback</span>
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
                                                        <img src="images/Oval.png"/>&emsp;<span className="onl_review_title">Jeff Handy</span> &emsp;
                                                        <img src="images/SmallSadie.png"/>
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
                                                        <a href="#"><span className="respond"> See Customer Info </span> </a>
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
                                                        <img src="images/Oval.png"/>&emsp;<span className="onl_review_title">Seth Jenkins</span> &emsp;
                                                        <img src="images/SmallSadie.png"/>
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
                                                        <a href="#"><span className="respond"> See Customer Info </span> </a>
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
                                                        <img src="images/Oval.png"/>&emsp;<span className="onl_review_title">Brandon</span> &emsp;
                                                        <img src="images/SmallSadie.png"/>
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
                                                        <a href="#"><span className="respond"> See Customer Info </span> </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                            </div>
                                        </div>
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