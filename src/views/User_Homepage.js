// REACT 
import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

// IMPORT ACTION CREATORS


// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

class User_Homepage extends Component {
    state = {

    }
    
    render() {
        return (
            <div className="Container">
                <h1>USER Homepage</h1>
            </div>
        );
    }

    // -- Methods -- //
}

//  MAP STATE TO PROPS
const mapStateToProps = state => {
    return {
        token: state.login_reducer.token
    }
}

// CONNECT
export default connect(
    mapStateToProps,
    {
    }
)(User_Homepage)