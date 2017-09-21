var React = require('react');
var {Link, IndexLink} = require('react-router');


var Analytics = React.createClass({
  render:function () {
      var {statsJson, selectedLocation, reviewsJson} = this.props;
      var invitationJson = '';
      var total_reviews = 0;
      var reviews_by_site = [];
      var reviews_by_rating = '';
      var average_rating = 0;
      var max_rating = 0;
      var rating_over_last_30_days=0;
      var rating = [];
      if(statsJson !== ''){
          invitationJson = statsJson.invitations;
          total_reviews = statsJson.reviews.total_count;
          reviews_by_site = statsJson.reviews.by_site;
          reviews_by_rating = statsJson.reviews.by_rating;
          reviews_by_site.sort(function (obj1, obj2) {
              return obj1.order - obj2.order;

          })
          average_rating = statsJson.reviews.average_rating;
          rating_over_last_30_days = statsJson.reviews.average_rating_delta_30_days;
      }
      Object.keys(reviews_by_rating).forEach(function (key) {
          // do something with obj[key]
          rating.push(reviews_by_rating[key]);
      });
      max_rating = Math.max.apply(null,rating);
      const ReviewsByRates = ()=>
          <div>
              {
                  Object.entries(reviews_by_rating)
                      .map(([key, value]) =>
                          <div className="col-sm-12" key={key}>
                              <div className="col-sm-1">
                                  <img src="images/SmallSilverReview.png"/>&emsp;
                              </div>
                              <div className="col-sm-1">
                                  <span className="big">{key}</span>&emsp;
                              </div>
                              <div className="col-sm-9">
                                  <div className="progress">
                                      <div className="progress-bar" role="progressbar"
                                           aria-valuemin="0" aria-valuemax={max_rating} style={{width: value/max_rating*100+'%'}}>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-sm-1">
                                  <span>{value}</span>
                              </div>
                          </div>
                        )
              }
              </div>

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
                              <span className="rat">{Math.round(average_rating*10)/10}</span>
                              &#8195;
                              <img src="images/GoldReview.png"/>
                              <img src="images/GoldReview.png"/>
                              <img src="images/GoldReview.png"/>
                              <img src="images/GoldReview.png"/>
                              <img src="images/GoldReview.png"/>

                          </div>
                      </div>
                      <div className="row">
                          <div className="col-sm-12">
                              <img src="images/arrow.png"/>&emsp;
                              <span className="big">{rating_over_last_30_days}</span>
                              <img src="images/SmallGoldReview.png"/>&emsp;
                              <span>Your rating over the last <br/>&#8195;&#8195;&#8195;&#8195;&#8195;&emsp;&nbsp; 30 days.</span>
                          </div>
                      </div>
                      <br/>
                      <div className="row">
                          <div className="col-sm-12">
                              <ReviewsByRates/>

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
                              <span className="reco_no">{invitationJson.recommended}</span>
                              &emsp;<img src="images/BigSmiley.png"/>&emsp;
                              <span className="reco_per">{isNaN(invitationJson.recommended/invitationJson.sent*100)?0:invitationJson.recommended/invitationJson.sent*100}%</span>
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
                              <span className="reco_no">{invitationJson.not_recommended}</span>
                              &emsp;<img src="images/BigSadie.png"/>&emsp;
                              <span className="noreco_per">{isNaN(invitationJson.not_recommended/invitationJson.sent*100)?0:invitationJson.not_recommended/invitationJson.sent*100}%</span>
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
                                  <div className="progress-circ blue">
                                        <span className="progress-left">
                                                <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                                <span className="progress-bar"></span>
                                        </span>
                                      <div className="progress-value">
                                          {isNaN(invitationJson.opened/invitationJson.sent*100)?0:invitationJson.opened/invitationJson.sent*100}%</div>
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