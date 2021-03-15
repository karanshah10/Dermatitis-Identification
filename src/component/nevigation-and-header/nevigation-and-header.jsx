import './nevigation-and-header.css';

const NevigationAndHeaderTemplate = (props, context) => {
  console.log()
  return (
    <div>
      <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" id="mySidebar"><br />
        <div className="w3-container">
          <a href="#" className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu">
            <i className="fa fa-remove"></i>
          </a>

          <h4><b>Dermatitis Indentification</b></h4>
        </div>
        <div className="w3-bar-block">
          <a href="#portfolio" className="w3-bar-item w3-button w3-padding w3-text-teal"><i className="fa fa-th-tint fa-fw w3-margin-right"></i>Models</a>
          <a href="#about" className="w3-bar-item w3-button w3-padding"><i className="fa fa-tint fa-fw w3-margin-right"></i>Deep Larning Model 1</a>
          <a href="#contact" className="w3-bar-item w3-button w3-padding"><i className="fa fa-tint fa-fw w3-margin-right"></i>Deep Larning Model 2</a>
        </div>
        <div className="w3-panel w3-large">
          <i className="fa fa-facebook-official w3-hover-opacity"></i>
          <i className="fa fa-instagram w3-hover-opacity"></i>
          <i className="fa fa-snapchat w3-hover-opacity"></i>
          <i className="fa fa-pinterest-p w3-hover-opacity"></i>
          <i className="fa fa-twitter w3-hover-opacity"></i>
          <i className="fa fa-linkedin w3-hover-opacity"></i>
        </div>
      </nav>



    </div>


  );
}

export default NevigationAndHeaderTemplate;