import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return(
            <div id="navbar">
                <h4>FRIENDS DATABASE</h4>
                <div id="navs">
                    <Link to="/login" >LOGIN</Link>
                    <Link to="/friends" >FRIENDSLIST</Link>
                    <Link to="/friends/add" >ADDFRIEND</Link>
                    <Link to="/logout" >LOGOUT</Link>
                </div>
            </div>
        )
    }
}

export default Navbar;