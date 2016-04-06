import React, { Component, PropTypes } from 'react';

const propTypes = {
  lead: PropTypes.object.isRequired,
};

class Lead extends Component {
  render() {
    const { lead } = this.props;

    return (
      <div className="card text-xs-center">
        <div className="card-header">
          { lead.title }
        </div>
        <div className="card-block">
          <p className="card-text">
              { lead.body }
          </p>
        </div>
        <div className="card-footer text-muted">
          Luxus | 10/04/2016 | Pawel
        </div>
      </div>
    );
  }
}

Lead.propTypes = propTypes;

export default Lead;
