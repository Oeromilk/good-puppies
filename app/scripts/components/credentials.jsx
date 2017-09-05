var React = require("react");
var $ = require("jQuery");
require("bootstrap-sass");

var LogInForm = React.createClass({
  render: function(){
    return (
      <div className="">
        <div className="">
          <form>
            <div className="form-group">
              <label htmlFor="userEmail">Email Address</label>
              <input type="email" className="form-control" id="userEmail" placeholder="Email" />
              <label htmlFor="userFName">First Name</label>
              <input type="name" className="form-control" id="userFName" placeholder="First Name" />
            </div>
            <button type="submit" className="btn btn-default">Log In</button>
            <div>Don't have an account yet? <a href="#" data-toggle="modal" data-dismiss="modal">Sign Up</a></div>
          </form>
        </div>
      </div>
    )
  }
});

var LogInContainer = React.createClass({
  render: function(){
    return (
      <div>
        <div type="button" className="navLinkStyle" data-toggle="modal" data-target=".login-modal">Log In</div>
          <div className="modal fade login-modal" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
            <div className="modal-dialog" role="document">
              <div className="modal-content loginModalStyle">
                <LogInForm />
              </div>
            </div>
          </div>
      </div>
    )
  }
});

var SignUpForm = React.createClass({
  render: function(){
    return (
      <form>
        <div className="form-group">
          <label for="userEmail">Email Address</label>
          <input type="email" className="form-control" id="userEmail" placeholder="Email" />
          <label for="userFName">First Name</label>
          <input type="name" className="form-control" id="userFName" placeholder="First Name" />
          <label for="userLName">Last Name</label>
          <input type="name" className="form-control" id="userLName" placeholder="Last Name" />
        </div>
      </form>
    )
  }
});

var SignUpContainer = React.createClass({
  getInitialState: function(){
    return (
      {
        modalIsOpen: false
      }
    )
  },
  openModal: function(){
    this.setState({modalIsOpen: true});
  },
  closeModal: function(){
    this.setState({modalIsOpen: false});
  },
  render: function(){
    return (
      <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} contentLabel="Signup Modal">
        <h3>Sign Up!</h3>
        <SignUpForm />
      </Modal>
    )
  }
});

module.exports = {
  SignUpContainer: SignUpContainer,
  LogInContainer: LogInContainer
};
