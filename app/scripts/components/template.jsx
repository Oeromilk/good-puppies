var React = require("react");
var Nav = require("./navigation.jsx").NavContainer;
var Fab = require("./fab.jsx").FabContainer;

var Template = React.createClass({
  render: function(){
    return (
      <div id="fabBody">
        <Nav></Nav>
        <Fab></Fab>
        {this.props.children}
      </div>
    )
  }
});

module.exports = {
  Template: Template
};
