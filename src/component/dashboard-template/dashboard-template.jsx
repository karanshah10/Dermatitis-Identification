import './dashboard-template.css';
import ImageUpload from '../../container/imageUpload';
import React from 'react';


const DashboardTemplate = (props, context) => {
  console.log(props.dashboardState.modelName)
  console.log(props.isModelSelected)
  return (
    <div className="w3-main" >
      <header>
        <span className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" ><i className="fa fa-bars"></i></span>
        <div className="w3-container">
          <h1><b>{props.dashboardState.modelName }</b></h1>
          {props.isModelSelected ? <div className="w3-section w3-bottombar w3-padding-16">
            <ImageUpload setImageSec={props.setImageSec} />

          </div> : null}
        </div>
      </header>
      {props.isModelSelected ? <div className="container">
        <div className="block">
          <img src={props.dashboardState.imageSrc} />
        </div>
        <div>
          <button onClick={props.onPredict}>Predict</button><br /><br /><br /><br /><br /><br /><br />
          <p className="result">{props.dashboardState.result}</p>

          {props.dashboardState.predictedData && props.dashboardState.predictedData.length > 0 ? <table className="table table-success">
            <thead>
              <tr >
                <th scope="col">id</th>
                <th scope="col">Class</th>
                <th scope="col">Prediction</th>
              </tr>
            </thead>
            <tbody>
              {props.dashboardState.predictedData.map((prediction, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i}</th>
                    <td>{prediction.className}</td>
                    <td>{prediction.probability}</td>
                  </tr>
                )
              })}
            </tbody>
          </table> : null}


        </div>

      </div> : null}
    </div>
  );

}

export default DashboardTemplate;