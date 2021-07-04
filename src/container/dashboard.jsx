import React, { Component, useRef } from 'react';
import DashboardTemplate from '../component/dashboard-template/dashboard-template';
import { connect } from 'react-redux';
import * as tf from '@tensorflow/tfjs';
import { TARGET_CLASSES, MODELSDATA } from '../App-config';
import { bindActionCreators } from 'redux';
import * as loaderActions from '../redux/actions/loadr-action';

const initialState = {
  imageSrc: '',
  result: '',
  predictedData: []
}

class Dashboard extends Component {
  constructor(props, context) {
    console.log(props);
    super(props, context);
    this.state = {
      image: null,
      imageSrc: '',
      result: '',
      selectedModel: null,
      predictedData: [],
      modelName: this.props.modelName
    }
  }

  loadModels = async (url) => {
    console.log("loadModels");
    try {
      const model = await tf.loadLayersModel(url);
      // console.log(model.summary())
      this.setState({ selectedModel: model }, () => {
        this.props.loaderAction.hideLoader();
      });
    }
    catch (err) {
      console.log(err);
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
    console.log(nextProps);
    if (this.props !== nextProps) {
      this.setState(initialState);
    }
    this.setState({ modelName: nextProps.modelName }, () => {
      if (this.props.isModelSelected) {
        tf.ready().then(() => {
          this.props.loaderAction.showLoader();
          let path = '/' + this.state.modelName + '/model.json'
          this.loadModels(path);
        })
      }
    })

  }

  setImageSec = (image) => {
    console.log(image);
    console.log(URL.createObjectURL(image));

    this.setState({ imageSrc: URL.createObjectURL(image), result: '', image: image });
  }

  onPredict = () => {
    this.props.loaderAction.showLoader();
    console.log()
    if (this.state.imageSrc) {
      console.log("onPredict");
      setTimeout(() => {
        this.doPredict();
      }, 1000)
    } else {
      this.setState({ result: this.state.imageSrc ? '' : 'Please Select Image' })
    }
  }

  doPredict = async () => {

    let model = this.state.selectedModel;
    // console.log(model.summary());
    // TODO: Integrate Deep Learning Model;
    let image = new Image();
    image.src = this.state.imageSrc;
    let width;
    let height;
    MODELSDATA.map(modelData => {
      if (modelData.name === this.props.modelName) {
        width = modelData.width;
        height = modelData.height;
      }
    })
    let tensor = tf.browser.fromPixels(image, 3)
      .resizeBilinear([width, height])
      .expandDims(0)
      .toFloat(); // change the image size;
    console.log(tensor);

    let predictions = await model.predict(tensor).data();

    console.log("predictions : " + predictions);
    let predictedData = Array.from(predictions).map(function (p, i) {
      console.log(p)// this is Array.map
      return {
        probability: p,
        className: TARGET_CLASSES[i] // we are selecting the value from the obj
      };
    });
    console.log(predictedData);
    this.setState({ predictedData: predictedData, result: this.state.imageSrc ? '' : 'Please Select Image' }, () => {
      this.props.loaderAction.hideLoader();
    });

  }

  render() {
    return (
      <div>
        <DashboardTemplate
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
    isModelSelected: state.nevigationAndHeaderReducer.isModelSelected
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loaderAction: bindActionCreators(loaderActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);