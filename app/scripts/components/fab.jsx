var React = require("react");

var FabContainer = React.createClass({
  getInitialState: function(){
    return (
      {topView: 'hidden',
      fabList: 'fabHorizontal hidden'}
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
  handleFab: function(e){
    e.preventDefault();
    var fabList = this.state.fabList;
    if(fabList.includes('hidden')){
      this.setState({fabList: 'fabHorizontal'})
    } else {
      this.setState({fabList: 'fabHorizontal hidden'})
    }
  },
  render: function(){
    var baseClassList = "fab";
    var hiddenState = baseClassList + " " + this.state.topView;
    var fabHorizontal = this.state.fabList;
    return (
      <div className={hiddenState}>
        <button onClick={this.handleFab} className="fabButton"><i className="fa fa-plus"></i></button>
        <ul className={fabHorizontal}>
          <li><a target="_blank" className="fabAction fab1" href="https://www.facebook.com"><i className="fa fa-facebook"></i></a></li>
          <li><a target="_blank" className="fabAction fab2" href="https://www.twitter.com"><i className="fa fa-twitter"></i></a></li>
          <li><a target="_blank" className="fabAction fab3" href="https://www.instagram.com"><i className="fa fa-instagram"></i></a></li>
          <li><a target="_blank" className="fabAction fab4" href="https://www.youtube.com"><i className="fa fa-youtube-play"></i></a></li>
        </ul>
      </div>

    )
  }
});

module.exports = {
  FabContainer: FabContainer
};
