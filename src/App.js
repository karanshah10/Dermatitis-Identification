import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './container/login';
import SignUp from './container/sign-up';
import Main from './routes/main';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signUp' component={SignUp} />
          {/* <Main Dashboard / */}
          <Route component={Main} />
        </Switch>
      </div>
    )
  }
}


export default App;
