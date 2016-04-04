import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export class Pipeline extends Component {
    render() {
        return <div className="container pipeline">
            <div className="col-md-4">
                <h4>Lead</h4>
                <h5>1 lead worth: $25,000</h5>
                <div className="card text-xs-center">
                  <div className="card-header">
                    Bostons new page module
                  </div>
                  <div className="card-block">
                    <p className="card-text">
                        With supporting text below as a natural lead-in to additional content.
                    </p>
                  </div>
                  <div className="card-footer text-muted">
                    Luxus | 10/04/2016 | Pawel
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
