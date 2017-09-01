var React = require("react");
var $ = require("jquery");
require("bootstrap-sass");

var InfoContainer = React.createClass({
  render: function(){
    return (
      <div>
        <div id="1stRow" className="row firstRow infoRow">
          <div className="col-md-6 "><img className="infoFilter" src="./images/info_img1.jpg"></img></div>
          <div className="col-md-3 text-center">
            <h3>Not Your Average Day Care</h3>
            <p className="lead">When you combine our love for dogs and experience with tech you get the next generation of dog parks.</p>
            </div>
        </div>
        <div className="row secondRow infoRow">
          <div className="col-md-3 col-md-offset-1">
            <h5 className="bodyText">Easy Pricing</h5>
            <h3 className="bodyText">No Confusing Prices</h3>
            <p className="lead bodyText">Other places have so many different prices for thier services. We offer simple and easy to understand prices.</p>
          </div>
        </div>
        <div className="row thirdRow infoRow">
          <div className="col-md-3 col-md-offset-7">
            <h3 className="">Don't Take Our Word For It.</h3>
            <p className="lead ">{"Good Puppies is simply amazing. They offer simple and easy pricing with amazing tech to back it."}</p>
          </div>
        </div>
        <div className="row fourthRow">
          <div className="col-md-3 infoCardStyle text-center">
            <i className="fa fa-clock-o infoIcon"></i>
            <p className="lead">Our long hours provide excellent options for pick up and drop off.</p>
          </div>
          <div className="col-md-3 infoCardStyle text-center">
            <i className="fa fa-credit-card  infoIcon"></i>
            <p className="lead">With multiple ways to pay it takes out the worry.</p>
          </div>
          <div className="col-md-3 infoCardStyle text-center">
            <i className="fa fa-mobile infoIcon"></i>
            <p className="lead">Use mobile or desktop to interact with your dog.</p>
          </div>
          <div className="col-md-3 infoCardStyle text-center">
            <i className="fa fa-camera infoIcon"></i>
            <p className="lead">Each dog gets a custom portrait.</p>
          </div>
        </div>
        <div className="row text-center fifthRow">
          <div className="col-md-12 pricingDetail">
            <p className="lead">Busisness Talk</p>
            <h4>Simple pricing to fit your lifestyle.</h4>
          </div>
          <div className="col-md-4 pricingDetail">
            <p className="lead">DAILY</p>
            <h4 className="moneySize">$<span className="jumboNumbers">29</span></h4>
            <p className="underLineDetail">The option for those that just want daily visits.</p>
            <p className="underLineDetail">Custom Portrait</p>
            <p className="underLineDetail">Flexible Options</p>
            <p className="underLineDetail">Web Cam Interaction</p>
            <button type="button" className="btn btn-primary btn-lg btn-block">Start A Daily Account</button>
          </div>
          <div className="col-md-4 pricingDetail">
            <p className="lead">Weekly</p>
            <h4 className="moneySize">$<span className="jumboNumbers">129</span></h4>
            <p className="underLineDetail">The during work option.</p>
            <p className="underLineDetail">Custom Portrait</p>
            <p className="underLineDetail">Puppylitics</p>
            <p className="underLineDetail">Web Cam Interaction</p>
            <button type="button" className="btn btn-primary btn-lg btn-block">Start A Weekly Account</button>
          </div>
          <div className="col-md-4 pricingDetail">
            <p className="lead">Monthly</p>
            <h4 className="moneySize">$<span className="jumboNumbers">699</span></h4>
            <p className="underLineDetail">The use when ever I want option.</p>
            <p className="underLineDetail">Custom Portrait</p>
            <p className="underLineDetail">Puppylitics</p>
            <p className="underLineDetail">Web Cam Interaction</p>
            <button type="button" className="btn btn-primary btn-lg btn-block">Start A Monthly Account</button>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = {
  InfoContainer: InfoContainer
};
