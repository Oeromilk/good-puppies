var React = require("react");
var $ = require("jquery");

var NavContainer = React.createClass({
  getInitialState: function(){
    return (
      {topView: 'hidden'}
    )
  },
  componentDidMount: function(){
    window.addEventListener('scroll', this.handleScroll);
  },
  handleScroll: function(){
    var navElement = document.getElementById('navElement');
    var winheight = $(window).height()
    var docheight = $(document).height()
    var scrollTop = $(window).scrollTop()
    var trackLength = docheight - winheight
    var pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 NaN if tracklength == 0)
    var weTopped = pctScrolled < 2.5 ? 'hidden' : ' ';
    this.setState({topView: weTopped});
  },
  render: function(){
    var baseClassList = "navbar navbar-default navbar-fixed-top";
    var hiddenState = baseClassList + " " + this.state.topView;
    console.log(hiddenState);
    return (
      <nav id="navElement" className={hiddenState} >
        <div className="container">
          <ul className="nav navbar-nav navbar-right">
            <li><a className="navLinkStyle" href="#">Link</a></li>
            <li><a className="navLinkStyle" href="#">Link</a></li>
            <li><a className="navLinkStyle" href="#">Link</a></li>
            <li><a className="navLinkStyle" href="#">Link</a></li>
            <li><a className="navLinkStyle" href="#">Link</a></li>
          </ul>
        </div>
      </nav>
    )
  }
});

module.exports = {
  NavContainer: NavContainer
};
