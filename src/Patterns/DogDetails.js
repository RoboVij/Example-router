import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './DogDetails.css';

class DogDetails extends Component {
    render() {
        let { dog } = this.props;
        return (
            <div className="DogDetails">
                <img src={dog.src} />
                <h1>{dog.name}</h1>
                <ul>
                    {dog.facts.map((fact, i) =>
                        <li key={i}>{fact}</li>)}
                </ul>
                <Link to='/dogs'>Go Back</Link>
            </div>
        );
    }
}

export default DogDetails;
