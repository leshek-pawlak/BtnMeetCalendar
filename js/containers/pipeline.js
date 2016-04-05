import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Lead from '../components/lead';

var data = {id: 1, title: 'lead', body: 'description'};

const propTypes = {
  leads: PropTypes.object.isRequired,
};

class Pipeline extends Component {

    renderLeads() {
        return this.props.leads.map(lead => 
            <Lead lead={lead} key={lead.id}/>
        )
    }

    render() {
        return <div className="container pipeline">
            <div className="col-md-4">
                <h4>Lead</h4>
                <h5>{this.props.leads.length} lead worth: $25,000</h5>
                {this.renderLeads()}
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

function mapStateToProps(state) {
  const { leads } = state.leads;

  return {
    leads,
  };
}

export default connect(mapStateToProps)(Pipeline);
