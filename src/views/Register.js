// REACT 
import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

// IMPORT ACTION CREATORS
    import { registerUser } from '../redux/actions/a_registerUser.js'

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

class RegisterPage extends Component {
    state = {
        firstName: undefined,
        lastName: undefined,
        userName: undefined,
        pw: undefined,
    }

    render() {
        return (
            <div className="Container">
                <h1>Register Page</h1>

                <div className="DummyNav">
                    <Link to="/">Landing Page</Link>
                    <br />

                    <Link to="/login">Login Page</Link>
                    <br />

                    <Link to="/register">Register Page</Link>
                    <br />
                </div>

                <div className='registerForm'>
                    <form  onSubmit={this.registerSubmit}>
                        <input
                            id='firstName'
                            type='text'
                            placeholder='First Name'
                            onChange={this.inputChange}
                        ></input>
                        <input
                            id='lastName'
                            type='text'
                            placeholder='Last Name'
                            onChange={this.inputChange}
                        ></input>
                        <input
                            id='userName'
                            type='text'
                            placeholder='User Name'
                            onChange={this.inputChange}
                        ></input>
                        <input
                            id='pw'
                            type='password'
                            placeholder='Password'
                            onChange={this.inputChange}
                        ></input>
                        <button>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // -- Methods -- //
    inputChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }


    registerSubmit = e => {
        e.preventDefault();
        console.log('this.state', this.state)
        this.props.registerUser(this.state).then(() => this.props.history.push('/login'))
    }
}

// MAP STATE TO PROPS
const mapStateToProps = state => {
    return {

    }
}

// CONNECT 
export default connect(
    mapStateToProps,
    {
        registerUser
    }
)(RegisterPage)

// export default RegisterPage;