var React = require('react');
var Analytics = React.createClass({
  render:function () {
      return(
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
                                  <img src="images/Oval.png"/><span className="big">4.8</span><img src="images/smallreview.png"/>
                                  <br/>
                                  <span>Facebook is your top rated review site.</span>
                              </div>
                              <div className="col-xs-6 review_positive">
                                  <img src="images/smileycolor.png"/><span className="big">+41</span>
                                  <br/>
                                  <span>positive reviews gained this month.</span>
                              </div>
                          </div>
                          <br/><br/>
                          <hr width="90%" className="divi"/>
                          <div className="row">

                              <div className="col-xs-12 site_review">
                                  <span>Sites with review</span>
                                  <br/>
                                  <figure>
                                      <img src="images/Oval.png"/>
                                      <figcaption>100</figcaption>
                                  </figure>
                                  <figure>
                                      <img src="images/Oval.png"/>
                                      <figcaption>87</figcaption>
                                  </figure>
                                  <figure>
                                      <img src="images/Oval.png"/>
                                      <figcaption>56</figcaption>
                                  </figure>
                                  <figure>
                                      <img src="images/Oval.png"/>
                                      <figcaption>21</figcaption>
                                  </figure>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="box_avg_rating">
                      <span className="rating_head"> Lifetime Avg Rating </span>
                      <hr/>
                      <div className="in_review">
                          <span className="rat">4.5</span>&#8195;<img src="images/GoldReview.png"/><img src="images/GoldReview.png"/><img src="images/GoldReview.png"/><img src="images/GoldReview.png"/><img src="images/GoldReview.png"/>
                          <div className="row">
                              <div className="col-xs-6 app_rate">
                                  <img src="images/arrow.png"/>&emsp;
                                  <span className="big">4.2</span>
                                  <img src="images/SmallGoldReview.png"/>&emsp;
                                  <span>Your rating over the last <br/>&#8195;&#8195;&#8195;&#8195;&#8195;&emsp;&nbsp; 30 days.</span>
                                  <br/><br/>
                                  <img src="images/SmallSilverReview.png"/>&emsp;
                                  <span className="big">5</span>&emsp;
                                  <img src="images/Bar5.png"/>&emsp;
                                  <span>123</span>
                                  <br/>
                                  <img src="images/SmallSilverReview.png"/>&emsp;
                                  <span className="big">4</span>&emsp;
                                  <img src="images/Bar4.png"/>&emsp;
                                  <span>87</span>
                                  <br/>
                                  <img src="images/SmallSilverReview.png"/>&emsp;
                                  <span className="big">3</span>&emsp;
                                  <img src="images/Bar3.png"/>&emsp;
                                  <span>21</span>
                                  <br/>
                                  <img src="images/SmallSilverReview.png"/>&emsp;
                                  <span className="big">2</span>&emsp;
                                  <img src="images/Bar2.png"/>&emsp;
                                  <span>13</span>
                                  <br/>
                                  <img src="images/SmallSilverReview.png"/>&emsp;
                                  <span className="big">1</span>&emsp;
                                  <img src="images/Bar1.png"/>&emsp;
                                  <span>0</span>

                              </div>
                          </div>
                      </div>
                  </div>
                  <br/>
                  <div className="box_sentiment">
                      <span className="senti_head"> Sentiment </span>
                      <hr/>
                      <div className="senti_body">
                          <span className="reco_no">224</span> &emsp;<img src="images/BigSmiley.png"/>&emsp; <span className="reco_per">71%</span>
                          <br/>
                          <span>Would Recommend</span>
                          <br/><br/>
                          <span className="reco_no">92</span> &emsp;<img src="images/BigSadie.png"/>&emsp; <span className="noreco_per">29%</span>
                          <br/>
                          <span>Would Not Recommend</span>
                      </div>
                  </div>
                  <div className="box_CTR">
                      <span className="ctr_head"> Link Click-thru Rate </span>
                      <hr/>
                      <div className="senti_body">

                      </div>
                  </div>
              </div>
          </div>
      );
  }
})

module.exports = Analytics;