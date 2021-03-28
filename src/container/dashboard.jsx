import React, { Component, useRef } from 'react';
import DashboardTemplate from '../component/dashboard-template/dashboard-template';
import { connect } from 'react-redux';
import * as tf from '@tensorflow/tfjs';


const initialState = {
  imageSrc: '',
  result: ''
}

class Dashboard extends Component {
  state = {
    image: null,
    imageSrc: '',
    result: '',
    vgg16: null
  }

  componentDidMount() {
    tf.ready().then(() => {
      this.loadModels('/CNN/model.json');
    })
  }

  loadModels = async (url) => {
    try {
      const model = await tf.loadLayersModel(url);
      // console.log(model.summary())
      this.setState({ vgg16: model });
      console.log("Load model success")
    }
    catch (err) {
      console.log(err);
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
    if (this.props !== nextProps) {
      this.setState(initialState);
    }
  }

  setImageSec = (image) => {
    console.log(URL.createObjectURL(image));

    this.setState({ imageSrc: URL.createObjectURL(image), result: '', image: image });
  }

  onPredict = async () => {
    // console.log(this.state.vgg16.summary());
    let model = this.state.vgg16;

    // TODO: Integrate Deep Learning Model;
    let image = new Image();
    image.src = this.state.imageSrc;
    var raw = tf.browser.fromPixels(image, 3);
    var resized = tf.image.resizeBilinear(raw, [48, 48]);
    var tensor = resized.expandDims(0);
    var prediction = model.predict(tensor);
    // let tensor = tf.browser.fromPixels(image, 1)
    //   .resizeNearestNeighbor([224, 224])
    //   .expandDims(0)
    //   .toFloat()
    //   .reverse(-1); // change the image size;
    // console.log(tensor);

    // // let imageData = this.state.imageSrc.getImageData(0, 0, 224, 224);
    // let predictions = await model.predict(tensor).data();
    console.log("predictions : " + prediction);
    // let TARGET_CLASSES = {

    // }
    // let top5 = Array.from(predictions)
    // .map(function (p, i) { // this is Array.map
    // 	return {
    // 		probability: p,
    // 		className: TARGET_CLASSES[i] // we are selecting the value from the obj
    // 	};
    // }).sort(function (a, b) {
    // 	return b.probability - a.probability;
    // }).slice(0, 2);
    // model.load().then(model => {
    //   model.classify(this.state.image).then(predictions => {
    //     console.log(predictions);
    //   });
    // });
    // model.predict(tf.FromPixels(this.state.image))
    // model.classify(this.state.image).then(predictions => {
    //   console.log(predictions);
    // });
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
