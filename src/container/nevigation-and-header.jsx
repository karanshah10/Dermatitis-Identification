import React, { Component, useState } from 'react';
import NevigationAndHeaderTemplate from '../component/nevigation-and-header/nevigation-and-header';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './dashboard';

class NavigationAndHeader extends Component {

  state = {
    isToggleClicked: false
  }

  onToggleClick = (event) => {
    event.preventDefault();
    this.setState({ isToggleClicked: !this.state.isToggleClicked });
  }
  render() {
    return (
      <div>
        <NevigationAndHeaderTemplate nevState={this.state} onToggleClick={this.onToggleClick} />

        <Switch>
          <Route path="/dashbord" component={Dashboard} />
          <Route path="/Model 1" />
          <Route path="/Model 2" />
        </Switch>
      </div>
    )
  }
}

export default NavigationAndHeader;

