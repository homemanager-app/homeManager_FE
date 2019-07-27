// REACT 
import React, { Component } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

// COMPONENTS
// import PrivateRoute from './components/PrivateRoute.js'
import LandingPage from "./views/LandingPage.js";
import LoginPage from "./views/Login.js";
import RegisterPage from "./views/Register.js";

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

class App extends Component {
render() {
  return (
    <div className="App">
      <h1>WELCOME TO HOME MANAGER</h1>

      <Route exact path='/' component={LandingPage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/register' component={RegisterPage} />

    </div>
  );
}
}

export default App;