// REACT 
import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import styled from 'styled-components'
import jwt_decode from 'jwt-decode'

// IMPORT ACTION CREATORS
    import { login } from '../redux/actions/a_login'

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
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;

    input {
        margin-bottom: 15px;
        border-radius: 5px;
    }
`

class LoginPage extends Component {
    state = {
        userName: undefined,
        pw: undefined,
    }
    
    render() {
        return (
            <Styled_Container>
                <h1>Login Page</h1>
                <Actions className="DummyNav">
                    <Styled_Link to="/">Landing Page</Styled_Link>

                    <Styled_Link to="/register">Register Page</Styled_Link>
                </Actions>
                <div className='registerForm'>
                    <Styled_form onSubmit={this.loginSubmit}>
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
                    </Styled_form>
                </div>
            </Styled_Container>




        );
    }

    // -- Methods -- //
    inputChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }
    
    loginSubmit = e => {
        e.preventDefault();

        const loginObject = {
            userName: this.state.userName,
            pw: this.state.pw
        }
        console.log('loginObject', loginObject)

        console.log('this.state', this.state)
        this.props.login(this.state).then(() => {
                if (this.props.currentUser.adminCat === 1) {
                    this.props.history.push('/admin/homepage')
                } else if (this.props.currentUser.adminCat === 1) {
                    this.props.history.push('/user/homepage')
                } else {
                    console.log('what is going on')
                    return 'what is going on'
                }
        })
    }
}

//  MAP STATE TO PROPS
const mapStateToProps = state => {
    return {
        token: state.login_reducer.token,
        currentUser: state.login_reducer.currentUser
    }
}

// CONNECT
export default connect(
    mapStateToProps,
    {
        login
    }
)(LoginPage)