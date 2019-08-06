// REACT 
import React, { Component } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

// COMPONENTS
  // -- Open Routes -- //
    import LandingPage from "./views/LandingPage.js";
    import LoginPage from "./views/Login.js";
    import RegisterPage from "./views/Register.js";
  // -- Protected Routes -- //
    import PrivateRoute from './components/PrivateRoute.js'
    import Homepage from './views/Homepage.js'

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

class App extends Component {
render() {
  return (
    <div className="App">
      {/* // -- Open Routes -- // */}
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/register' component={RegisterPage} />

      {/* // -- Protected Routes -- // */}
        <PrivateRoute exact path="/homepage" component={Homepage} />
    </div>
  );
}
}

export default App;