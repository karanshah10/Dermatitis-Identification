import React, { Component, useState } from 'react';
import NevigationAndHeaderTemplate from '../component/nevigation-and-header/nevigation-and-header';
import Dashboard from './dashboard';
import { connect } from 'react-redux';
import * as nevigationAndHeaderActions from '../redux/actions/nevigation-header-action';
import * as loginActions from '../redux/actions/login-action';
import { bindActionCreators } from 'redux';

class NavigationAndHeader extends Component {

  state = {
    isToggleClicked: false,
    isRender: false
  }

  onToggleClick = (event) => {
    event.preventDefault();
    this.setState({ isToggleClicked: !this.state.isToggleClicked });
  }

  nevigateTo = (modelName) => {
    this.props.nevigationAndHeaderAction.setModel(modelName, true);
  }

  setDefault = () => {
    this.props.nevigationAndHeaderAction.setModel("Please Select Model", false);
  }
  onLogout = () => {
    this.props.loginAction.logout();
  }

  render() {
    return (
      <div>
        <NevigationAndHeaderTemplate nevState={this.state}
          onToggleClick={this.onToggleClick}
          setDefault={this.setDefault}
          onLogout={this.onLogout}
          nevigateTo={this.nevigateTo} />
        <Dashboard />
      </div>
    )
  }
}

const mapStateToProps = () => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    nevigationAndHeaderAction: bindActionCreators(nevigationAndHeaderActions, dispatch),
    loginAction: bindActionCreators(loginActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationAndHeader);


