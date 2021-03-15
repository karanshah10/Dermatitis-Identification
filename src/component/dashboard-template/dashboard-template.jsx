import './dashboard-template.css';
import ImageUpload from '../../container/imageUpload';
import React from 'react';


const DashboardTemplate = (props, context) => {
  return (
    <div className="w3-main" >
      <header>
        <span className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" ><i className="fa fa-bars"></i></span>
        <div className="w3-container">
          <h1><b>Selected Model</b></h1>
          <div className="w3-section w3-bottombar w3-padding-16">
            <ImageUpload setImageSec={props.setImageSec} />
          </div>
        </div>
      </header>
      <div className="container">
        <div className="block">
          <h3>Title 1</h3>
          <img src={props.dashboardState.imageSrc} />
        </div>
        <div>
          <button>Predict</button>
        </div>
      </div>
    </div>
  );

}

export default DashboardTemplate;