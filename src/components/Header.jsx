// IMPORTS
    import React, { Component } from "react";
    import { Link } from 'react-router-dom'
    import styled, { ThemeProvider } from 'styled-components'
    import COLORS from '../config/colors.js'

// Styled Components
const Styled_Header = styled.div`
    display: flex;

    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    
`;

// const Header_Theme = {
//     backgroundColor: 'yellow'
// }

class Header extends Component {
    render() {
        return (
            <ThemeProvider theme={COLORS.header}>
                <Styled_Header>
                    <h1>HEADER</h1>

                </Styled_Header>
            </ThemeProvider>
        );
    }
}

export default Header;