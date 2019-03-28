import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Dashboard extends Component {
  render() {
    const { user } = this.props.auth;
    return (
      <div className="container h-100">
        <div className="row h-100v justify-content-center align-items-center title-text">
          Hello {user.name}
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(Dashboard);
