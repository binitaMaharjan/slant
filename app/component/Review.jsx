var React = require('react');
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import StarRating from 'react-star-rating';


var starStyle = {
    width: '20px !important',
};
var rowStyle = {
    height: '50vh',
    position:'relative'
};
var moment = require('moment');

var Review = React.createClass({
    render: function () {
        var {statsJson, selectedLocation, reviewsJson} = this.props;
        var reviewData = reviewsJson;
        var reviewInfo = () => {
            if (jQuery.isEmptyObject(reviewsJson) || typeof(reviewsJson) === "undefined") {
                return <div className="load_style"><img className="load_style"  src="images/load_icon.gif"/></div>
            }
            if (reviewData.reviews.length > 0) {
                return reviewData.reviews.map((result, index) => {
                    var fulldate = new Date(result.date);
                    var converted_date = moment(fulldate).format('YYYY-MM-DD');
                    var today = moment().format("YYYY-MM-DD"); //2014-07-10
                    var dateToday = moment(today);
                    var total = null;
                    if (dateToday.diff(converted_date, 'days') <= 30) {
                        total = dateToday.diff(converted_date, 'days') + "  days";
                    }
                    else if (dateToday.diff(converted_date, 'months') >= 1 && dateToday.diff(converted_date, 'months') < 12) {
                        total = dateToday.diff(converted_date, 'months') + "  months";
                    }
                    else {
                        total = dateToday.diff(converted_date, 'year') + "  year";
                    }

                    return (
                        <div className="col-sm-6 review_box">

                            <div className="row">
                                <div className="col-sm-12 stars">
                                    <img src="images/Oval.png"/>&emsp;<span
                                    className="onl_review_title">{result.author}</span> &emsp;
                                    <StarRating style={starStyle} totalStars={5} rating={result.rating}
                                                disabled="disabled"/>
                                    <span className="days_ago"> {total} ago</span>

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

                })
            }
            return <div style={rowStyle}><img className="load_style"  src="images/load_icon.gif"/></div>
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
                            <div className="col-sm-12 list_style">
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

                                    <TabPanel>
                                        <div className="row">
                                            <div className="col-sm-6 all_reviews">
                                                <span className="all_review_head">All Reviews</span>
                                                <form className="form_filter">
                                                    <input className="srch_button" name="Search"
                                                           placeholder="Search"/>&emsp;
                                                    <button className="btn btn_primary btn_filter">Filter</button>
                                                </form>
                                                <h2>Any content 2</h2>
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