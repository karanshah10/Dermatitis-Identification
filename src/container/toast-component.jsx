import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ToastComponent extends Component {
  constructor(props, context) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="notificationWrapper">
        {(this.props.isSuccessMessage && this.props.message) &&
          <div className="alert alert-success">{this.props.message}</div>}
        {(this.props.isErrorMessage && this.props.message) &&
          <div className="alert alert-danger">{this.props.message}</div>}
        {(this.props.isDefaultErrorMessage) &&
          <div className="alert alert-danger">Something went wrong. Please check your internet connection and try again.</div>}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isSuccessMessage: state.toastComponent.isSuccessMessage,
    isErrorMessage: state.toastComponent.isErrorMessage,
    message: state.toastComponent.message,
    isDefaultErrorMessage: state.toastComponent.isDefaultErrorMessage
  }
};

ToastComponent.contextTypes = {
  t: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(ToastComponent);