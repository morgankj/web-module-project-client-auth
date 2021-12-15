import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Navbar extends React.Component {
    render() {
        return(
            <StyledNav id="navbar">
                <h4>FRIENDS DATABASE</h4>
                <div id="navs">
                    <Link to="/login" >LOGIN</Link>
                    <Link to="/friends" >FRIENDSLIST</Link>
                    <Link to="/friends/add" >ADDFRIEND</Link>
                    <Link to="/logout" >LOGOUT</Link>
                </div>
            </StyledNav>
        )
    }
}

export default Navbar;

const StyledNav = styled.div`
    display: flex;
    border-bottom: solid black 2px;
    justify-content: space-between;
    align-items: center;
    padding: 1%;

    h4 {
        font-size: 2rem;
        font-weight: bold;
    }

    #navs a {
        background: black;
        padding: 1rem;
        margin: 1%;
        color: white;
    }
`