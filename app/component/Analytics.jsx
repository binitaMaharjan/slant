var React = require('react');
var {Link, IndexLink} = require('react-router');


var Analytics = React.createClass({
  render:function () {
      var {statsJson, selectedLocation} = this.props;
      var total_reviews = 0;
      var reviews_by_site = [];
      var average_rating = 0;
      if(statsJson !== ''){
          total_reviews = statsJson.reviews.total_count;
          reviews_by_site = statsJson.reviews.by_site;
          reviews_by_site.sort(function (obj1, obj2) {
              return obj1.order - obj2.order;

          })
          average_rating = statsJson.reviews.average_rating;
      }
      var renderSites = () =>{
          if(reviews_by_site.length>0) {
              return reviews_by_site.map((site, index) => {
                  if(index!==0) {
                      return (
                          <span key={site.url}>
                          <a href={site.url}> <img src="images/Oval.png" title={site.site.name}/></a>
                          <a href={site.response_url}>
                              <figcaption>{site.average_rating}</figcaption>
                          </a>
                      </span>
                      )
                  }
              })
              }
          return <div>Loading...</div>
      }
      var renderTopSitesReview =()=>{
          if(reviews_by_site.length >0){
              var site = reviews_by_site[0];
              return(
                  <div>
                     <div className="col-sm-6">
                              <img src="images/Oval.png"/><span className="big">{site.average_rating}</span><img src="images/smallreview.png"/>
                              <br/>
                              <span>{site.site.name} is your top rated review site.</span>
                          </div>
                          <div className="col-sm-6">
                              <img src="images/smileycolor.png"/><span className="big">+{site.total_reviews}</span>
                              <br/>
                              <span>positive reviews gained this month.</span>
                          </div>

                  </div>
              )
          }
      }
      return(
          <div>

              <div className="row">
                  <div className="col-sm-5 analytics_box1">

                      <div className="row">
                          <div className="col-sm-12">
                              <span className="review_head"> Reviews </span>
                          </div>
                      </div>
                      <hr/>
                      <div className="row">
                          <div className="col-sm-12">
                              <span className="revno">{total_reviews}</span>
                          </div>
                      </div>
                      <div className="row">
                          {renderTopSitesReview()}
                      </div>


                      <hr width="90%"/>
                      <div className="row">
                          <div className="col-sm-12">
                              <span>Sites with review</span>
                              <br/>
                              {renderSites()}
                          </div>
                      </div>
                  </div>

                  <div className="col-sm-5 analytics_box2">
                      <div className="row">
                          <div className="col-sm-12">
                              <span className="review_head"> Lifetime Avg Rating  </span>
                          </div>
                      </div>
                      <hr/>
                      <div className="row">
                          <div className="col-sm-12">
                              <span className="rat">100</span>&#8195;<img src="images/GoldReview.png"/><img src="images/GoldReview.png"/><img src="images/GoldReview.png"/><img src="images/GoldReview.png"/><img src="images/GoldReview.png"/>

                          </div>
                      </div>
                      <div className="row">
                          <div className="col-sm-12">
                              <img src="images/arrow.png"/>&emsp;
                              <span className="big">4.2</span>
                              <img src="images/SmallGoldReview.png"/>&emsp;
                              <span>Your rating over the last <br/>&#8195;&#8195;&#8195;&#8195;&#8195;&emsp;&nbsp; 30 days.</span>
                          </div>
                      </div>
                      <br/>
                      <div className="row">
                          <div className="col-sm-12">
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

                  <div className="col-sm-2">

                  </div>
              </div>
              <div className="row">
                  <div className="col-sm-4 analytics_box3">
                      <div className="row">
                          <div className="col-sm-12">
                              <span className="review_head"> Sentiment  </span>
                          </div>
                      </div>
                      <hr/>
                      <div className="row">
                          <div className="col-sm-12 senti_body">
                              <span className="reco_no">224</span> &emsp;<img src="images/BigSmiley.png"/>&emsp; <span className="reco_per">71%</span>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-sm-12 senti_body">
                              <span>Would Recommend</span>
                          </div>
                      </div>
                      <hr width="70%"/>
                      <div className="row">
                          <div className="col-sm-12 senti_body">
                              <span className="reco_no">92</span> &emsp;<img src="images/BigSadie.png"/>&emsp; <span className="noreco_per">29%</span>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-sm-12 senti_body">
                              <span>Would Not Recommend</span>
                          </div>
                      </div>

                  </div>
                  <div className="col-sm-4 analytics_box4">
                      <div className="row">
                          <div className="col-sm-12">
                              <span className="review_head"> Link Click-thru Rate  </span>
                          </div>
                      </div>
                      <hr/>
                      <div className="row">
                          <div className="col-sm-12 senti_body">
                              <div className="row">
                                  <div className="col-sm-12 pro_curve">
                                      <div className="center_curve">
                                          <img src="images/BlueAirplane.png"/>
                                          <br/>
                                          <span className="ctr_no">69%</span>
                                      </div>
                                  </div>
                              </div>
                              <hr width="50%"/>
                              <div className="row">
                                  <div className="col-sm-12">
                                      <span className="gjob">Great Job!</span>
                                      <br/>
                                      <span>Your CTR is higher than average.</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-sm-4">

                  </div>
              </div>
          </div>
      );
  }
})

module.exports = Analytics;