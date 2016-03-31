import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export class Header extends Component {
    render() {
        return <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
            <a className="navbar-brand" href="#">btnmanager</a>
            <ul className="nav navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
            </ul>
        </nav>;
    }
}
