import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './Sardine.css';

class Sardine extends Component {
    render() {
        return (
            <div className="Sardine">
                <h1>Sardine</h1>
                <Link to='/'>Go Back</Link>
            </div>
        );
    }
}

export default Sardine;
