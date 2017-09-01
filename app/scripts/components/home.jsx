var React = require("react");
var $ = require("jquery");
require("bootstrap-sass");

var Template = require("./template.jsx").Template;
var Info = require("./info.jsx").InfoContainer;

var HomeContainer = React.createClass({
  componentDidMount: function(){
    $('#home-cara').carousel({interval: 5000});
  },
  render: function(){
    return (
      <Template>
        <div className="row">
          <div id="home-cara" className="carousel slide" data-pause="false" data-ride="carousel">
            <div className="carousel-inner backgroundColor" role="listbox">
              <div className="item active">
                <img src="./images/img_1.jpg" alt="Image of Dogs" />
              </div>
              <div className="item">
                <img src="./images/img_2.jpg" alt="Image of Dogs" />
              </div>
              <div className="item">
                <img src="./images/img_3.jpg" alt="Image of Dogs" />
              </div>
              <div className="item">
                <img src="./images/img_4.jpg" alt="Image of Dogs" />
              </div>
              <div className="item">
                <img src="./images/img_5.png" alt="Image of Dogs" />
              </div>
              <div className="item">
                <img src="./images/img_6.jpg" alt="Image of Dogs" />
              </div>
              <h1 className="carouselBanner">Good Puppies Dog Park</h1>
              <a href="#1stRow"><i className="fa fa-arrow-down arrow bounce"></i></a>
            </div>
          </div>
        </div>
        <Info></Info>
      </Template>
    )
  }
});

module.exports = {
  HomeContainer: HomeContainer
};
