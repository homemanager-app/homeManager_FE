// REACT 
import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import styled from 'styled-components'

// IMPORT ACTION CREATORS
    import { registerUser } from '../redux/actions/a_registerUser.js'

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// STYLED COMPONENTS

const Styled_Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
`

const Actions = styled.div`
    display: flex;
    flex-direction: row;
`;

const Styled_Link = styled(Link)`    
    text-decoration: none;
    color: orange;

    font-size: 20px;
    margin-left: 15px;
`

const Styled_form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center
    flex-wrap: wrap;
    margin-top: 20px;

    input {
        margin-bottom: 15px;
        border-radius: 5px;
    }
`

class RegisterPage extends Component {
    state = {
        firstName: undefined,
        lastName: undefined,
        userName: undefined,
        pw: undefined,
        email: undefined,
        phone: undefined,
    }

    render() {
        return (
            <Styled_Container>
                <h1>Register Page</h1>
                <Actions>
                    <Styled_Link to="/">Landing Page</Styled_Link>

                    <Styled_Link to="/login">Login Page</Styled_Link>
                </Actions>
                <Styled_form  onSubmit={this.registerSubmit}>
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
                        <input
                            id='email'
                            type='text'
                            placeholder='Email'
                            onChange={this.inputChange}
                        ></input>
                        <input
                            id='phone'
                            type='tel'
                            placeholder='Phone Number'
                            onChange={this.inputChange}
                        ></input>
                        <button>
                            Submit
                        </button>
                    </Styled_form>
            </Styled_Container>
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