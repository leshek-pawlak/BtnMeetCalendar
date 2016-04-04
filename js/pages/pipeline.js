import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export class Pipeline extends Component {
    render() {
        return <div className="container pipeline">
            <div className="col-md-4">
                <h4>Lead</h4>
                <div className="card text-xs-center">
                  <div className="card-header">
                    Featured
                  </div>
                  <div className="card-block">
                    <h4 className="card-title">Special title treatment</h4>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                  <div className="card-footer text-muted">
                    2 days ago
                  </div>
                </div>
            </div>
            <div className="col-md-4">
                <h4>Deal</h4>
            </div>
            <div className="col-md-4">
                <h4>Invoice</h4>
            </div>
        </div>;
    }
}
