import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavigationAndHeader from '../container/nevigation-and-header';
import { connect } from 'react-redux';
import { history } from '../redux/history';
class Main extends Component {

  componentDidMount() {
    console.log(this.props.isLoginSuccess)
    if (!this.props.isLoginSuccess) {
      history.push('/login')
    }else{
      history.push('/dashbord')
    }
  }

  render() {
    return (
      <div>
        <Route component={NavigationAndHeader} />
      </div >
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoginSuccess: state.loginReducer.isLoginSuccess
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);;