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
          <p onClick={props.setDefault} className="w3-bar-item w3-button w3-padding w3-text-teal"><i className="fa fa-th-tint fa-fw w3-margin-right"></i>Models</p>
          <p name="Deep Learning Model 1" onClick={() => props.nevigateTo('Deep Learning Model 1')} className="w3-bar-item w3-button w3-padding"><i className="fa fa-tint fa-fw w3-margin-right"></i>Deep Larning Model 1</p>
          <p name="Deep Learning Model 2" onClick={() => props.nevigateTo('Deep Learning Model 2')} className="w3-bar-item w3-button w3-padding"><i className="fa fa-tint fa-fw w3-margin-right"></i>Deep Larning Model 2</p>
          <p onClick={props.onLogout} className="w3-bar-item w3-button w3-padding"><i className="fa fa-sign-out "></i>Logout</p>
        </div>

      </nav>

    </div>


  );
}

export default NevigationAndHeaderTemplate;