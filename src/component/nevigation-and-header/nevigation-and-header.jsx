import './nevigation-and-header.css';

const NevigationAndHeaderTemplate = (props, context) => {
  console.log()
  return (
    <div>
      <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" id="mySidebar"><br />
        <div className="w3-container">
          <a href="#" onclick="w3_close()" className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey" title="close menu">
            <i className="fa fa-remove"></i>
          </a>

          <h4><b>Dermatitis Indentification</b></h4>
        </div>
        <div className="w3-bar-block">
          <a href="#portfolio" onclick="w3_close()" className="w3-bar-item w3-button w3-padding w3-text-teal"><i className="fa fa-th-tint fa-fw w3-margin-right"></i>Models</a>
          <a href="#about" onclick="w3_close()" className="w3-bar-item w3-button w3-padding"><i className="fa fa-tint fa-fw w3-margin-right"></i>Machine Larning Model 1</a>
          <a href="#contact" onclick="w3_close()" className="w3-bar-item w3-button w3-padding"><i className="fa fa-tint fa-fw w3-margin-right"></i>Machine Larning Model 2</a>
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

      <div className="w3-main" >
        <header id="portfolio">
          <span className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" onclick="w3_open()"><i className="fa fa-bars"></i></span>
          <div className="w3-container">
            <h1><b>Selected Model</b></h1>
            <div className="w3-section w3-bottombar w3-padding-16">
              <button className="w3-button w3-white w3-hide-small"><i className="fa fa-photo w3-margin-right"></i>Upload Image</button>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="block">
            <h3>Title 1</h3>
            <img src="https://www.scania.org/wp-content/uploads/2018/10/article-10-2.jpg" />
            <p>Some text</p>
          </div>
          <div>
            <button>Predict</button>
          </div>
        </div>

      </div>

    </div>


  );
}

export default NevigationAndHeaderTemplate;