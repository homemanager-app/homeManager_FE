// REACT 
import React, { Component } from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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

class LandingPage extends Component {
    render() {
        return (
            <Styled_Container>
                <h1>Home Manager - Landing Page</h1>
                <Actions>                
                    <Styled_Link to="/login">Login</Styled_Link>                    

                    <Styled_Link to="/register">Owner Registration</Styled_Link>                    
                </Actions>
            </Styled_Container>
        );
    }
}

export default LandingPage;