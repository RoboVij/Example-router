import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import './Chips.css';

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <NavLink to='/'>Vending Machine</NavLink>
                <NavLink to='/chips'>Chips</NavLink>
                <NavLink to='/sardine'>Sardine</NavLink>
            </div>
        );
    }
}

export default Navbar;
