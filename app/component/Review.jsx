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