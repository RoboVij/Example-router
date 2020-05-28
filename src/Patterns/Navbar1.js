import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import './Navbar1.css';

class Navbar1 extends Component {
    render() {
        const dogLinks = this.props.dogs.map(dog => (
            <li className="nav-item" key={dog.name}>
                <NavLink exact to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
            </li>
        ));
        return (
            <nav className="navbar navbar-expand-lg bg-dark">
                <Link className="navbar-brand" to="/dogs">Dog App</Link>
                <NavLink exact to="/dogs">Home</NavLink>
                {dogLinks}
            </nav>
        );
    }
}

export default Navbar1;
