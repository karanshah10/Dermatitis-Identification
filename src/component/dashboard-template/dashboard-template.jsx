import './dashboard-template.css';
import ImageUpload from '../../container/imageUpload';
import React from 'react';


const DashboardTemplate = (props, context) => {
  return (
    <div className="w3-main" >
      <header>
        <span className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" ><i className="fa fa-bars"></i></span>
        <div className="w3-container">
          <h1><b>{props.modelName}</b></h1>
          {props.isModelSelected ? <div className="w3-section w3-bottombar w3-padding-16">
            <ImageUpload setImageSec={props.setImageSec} />
          </div> : null}
        </div>
      </header>
      {props.isModelSelected ? <div className="container">
        <div className="block">
          <h3>Title 1</h3>
          <img src={props.dashboardState.imageSrc} />
        </div>
        <div>
          <button onClick={props.onPredict}>Predict</button><br /><br /><br /><br /><br /><br /><br />
          <p className="result">{props.dashboardState.result}</p>
        </div>

      </div> : null}
    </div>
  );

}

export default DashboardTemplate;