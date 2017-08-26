var React = require("react");
var Nav = require("./navigation.jsx").NavContainer;

var Template = React.createClass({
  render: function(){
    return (
      <div>
        <Nav></Nav>
        {this.props.children}
      </div>
    )
  }
});

module.exports = {
  Template: Template
};
