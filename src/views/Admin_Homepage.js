// IMPORTS 
    import React, { Component } from "react";
    import { Link } from 'react-router-dom'
    import { connect } from "react-redux";
    import styled from 'styled-components'

// COMPONENTS
    import HEADER from '../components/Header.jsx'


// IMPORT ACTION CREATORS


// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// Styled Components
const Styled_Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 auto;
`;

const Styled_locationCarousel = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;

    width: 60%;
    border: 1px solid black;

    // REPLACE WITH CARD
    .locationBox {
        display: flex;
        border: 1px solid black;
    }
`;



class Admin_Homepage extends Component {
    state = {

    }
    
    render() {
        return (
            <>
                <HEADER />
                <Styled_Container>
                    <h2>Select one of your locations!</h2>
                    <Styled_locationCarousel className='Location Carousel'>
                        <div className='locationBox'>
                            1
                        </div>
                        <div className='locationBox'>
                            2
                        </div>
                        <div className='locationBox'>
                            3
                        </div>
                    </Styled_locationCarousel>
                </Styled_Container>
            </>
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
)(Admin_Homepage)
