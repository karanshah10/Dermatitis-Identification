import React, { Component, useRef } from 'react';
import DashboardTemplate from '../component/dashboard-template/dashboard-template';


class Dashboard extends Component {
  state = {
    imageSrc: ''
  }

  setImageSec = (image) => {
    console.log(URL.createObjectURL(image));
    this.setState({ imageSrc: URL.createObjectURL(image) });
  }

  render() {
    return (
      <div>
        <DashboardTemplate dashboardState={this.state} setImageSec={this.setImageSec} />
      </div>
    );
  }
}

export default Dashboard;