import React, { Component, useRef } from 'react';
import DashboardTemplate from '../component/dashboard-template/dashboard-template';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Dashboard extends Component {
  state = {
    imageSrc: '',
    result: ''
  }

  setImageSec = (image) => {
    console.log(URL.createObjectURL(image));
    this.setState({ imageSrc: URL.createObjectURL(image), result: '' });
  }

  onPredict = () => {
    // TODO: Integrate Deep Learning Model;
    this.setState({ result: this.state.imageSrc ? 'Work in progress' : 'Please Select Image' });
  }

  render() {
    return (
      <div>
        <DashboardTemplate modelName={this.props.modelName}
          isModelSelected={this.props.isModelSelected}
          dashboardState={this.state}
          onPredict={this.onPredict}
          setImageSec={this.setImageSec} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    modelName: state.nevigationAndHeaderReducer.modelName,
    isModelSelected: state.nevigationAndHeaderReducer.isModelSelected
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
