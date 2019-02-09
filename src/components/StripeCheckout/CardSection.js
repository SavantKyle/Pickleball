import React, { Component } from 'react';
import {CardElement} from 'react-stripe-elements';
import './StripeCard.css';

class StripeCardSection extends Component {
  render() {
    return (
      <div className="col-md-offset-4 col-md-4">        
        <div className="h2">Credit Card (${this.props.totalCost})</div>
        <CardElement className="StripeElement" style={{base: {fontSize: '21px'}}} />
        <br/>
      </div>
    );
  }
};

export default StripeCardSection;