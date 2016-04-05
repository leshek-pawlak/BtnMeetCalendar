import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addLead } from '../actions';

import Lead from '../components/lead';

const propTypes = {
  leads: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
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
                <a href="#" onClick={this.props.onClick}>add new</a>
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

const mapStateToProps = (state) => {
  const { leads } = state.leads;

  return {
    leads,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
        dispatch(addLead())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pipeline);
