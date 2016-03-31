import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export class Dashboard extends Component {
    render() {
        return <div className="container">11
            <h3><Link to="time_per_day">TimePerDay</Link></h3>
        </div>;
    }
}
