import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './VendingMachine.css';

class VendingMachine extends Component {
    render() {
        return (
            <div className="VendingMachine">
                <h1>VendingMachine</h1>
                <Link to='/chips'>Chips</Link>
                <Link to='/sardine'>Sardine</Link>
            </div>
        );
    }
}

export default VendingMachine;
