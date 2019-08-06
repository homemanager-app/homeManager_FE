// REACT 
import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";

// IMPORT ACTION CREATORS
    import { login } from '../redux/actions/a_login'

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

class LoginPage extends Component {
    state = {
        userName: undefined,
        pw: undefined,
    }
    
    render() {
        return (
            <div className="Container">
                <h1>Login Page</h1>

                <div className="DummyNav">
                    <Link to="/">Landing Page</Link>
                    <br />

                    <Link to="/login">Login Page</Link>
                    <br />

                    <Link to="/register">Register Page</Link>
                    <br />
                    
                    <Link to="/homepage">Homepage Page</Link>
                    <br />
                </div>

                <div className='registerForm'>
                    <form onSubmit={this.registerSubmit}>
                        <input
                            id='userName'
                            type='text'
                            placeholder='First Name'
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

        const loginObject = {
            userName: this.state.userName,
            pw: this.state.pw
        }
        console.log('loginObject', loginObject)

        console.log('this.state', this.state)
        this.props.login(this.state).then(() => this.props.history.push('/homepage'))
    }
}

//  MAP STATE TO PROPS
const mapStateToProps = state => {
    return {

    }
}

// CONNECT
export default connect(
    mapStateToProps,
    {
        login
    }
)(LoginPage)

// export default LoginPage;