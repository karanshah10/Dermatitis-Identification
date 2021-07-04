import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ring from '../images/rings.svg';

class Loader extends Component {
  componentWillMount() {
  }

  constructor(props, context) {
    super(props);
  }

  render() {
    return (
      this.props.showLoader &&
      <div className='loader'>
        <img src={ring} className="img-responsive" />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    showLoader: state.loader.showLoader
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

Loader.contextTypes = {
  t: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
