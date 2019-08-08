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
    import Admin_Homepage from './views/Admin_Homepage.js'
    import User_Homepage from './views/User_Homepage.js'

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
        <PrivateRoute exact path="/admin/homepage" component={Admin_Homepage} />
        <PrivateRoute exact path="/user/homepage" component={User_Homepage} />
    </div>
  );
}
}

export default App;