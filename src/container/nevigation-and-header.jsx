import React, { Component, useState } from 'react';
import NevigationAndHeaderTemplate from '../component/nevigation-and-header/nevigation-and-header';
import Dashboard from './dashboard';
import { connect } from 'react-redux';
import * as nevigationAndHeaderActions from '../redux/actions/nevigation-header-action';
import * as loginActions from '../redux/actions/login-action';
import { bindActionCreators } from 'redux';
import { MODELSDATA } from '../App-config';

class NavigationAndHeader extends Component {

  state = {
    isToggleClicked: false,
    isRender: false,
    modelName: 'Please Select Model'
  }

  onToggleClick = (event) => {
    event.preventDefault();
    this.setState({ isToggleClicked: !this.state.isToggleClicked });
  }

  nevigateTo = (modelName) => {
    this.setState({ modelName: modelName })
    this.props.nevigationAndHeaderAction.setModel(true);
  }

  setDefault = () => {
    this.setState({ modelName: 'Please Select Model' })
    this.props.nevigationAndHeaderAction.setModel(false);
  }
  onLogout = () => {
    this.props.loginAction.logout();
  }

  render() {
    console.log(MODELSDATA);
    return (
      <div>
        <NevigationAndHeaderTemplate nevState={this.state}
          onToggleClick={this.onToggleClick}
          setDefault={this.setDefault}
          onLogout={this.onLogout}
          modelSData={MODELSDATA}
          nevigateTo={this.nevigateTo} />

        <Dashboard modelName={this.state.modelName} />
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


