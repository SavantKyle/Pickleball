import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
// import PAYMENT_SERVER_URL from '../../constants/server';
import STRIPE_PUBLISHABLE from '../../constants/stripe';

const currency = "USD";

const successPayment = data => {
    alert('Payment Successful');
}

const errorPayment = data => {
    alert('Payment Error');
}

const onToken = (amount, description) => token => {
    axios.post('/api/StripePayment',
        {
            description: description,
            tokenId: token.id,
            currency: currency,
            amount: amount
        }).then(successPayment)
        .catch(errorPayment);
}

const Checkout = ({ name, description, amount, zipCode }) => {
    return (
        <StripeCheckout
            name={name}
            description={description}
            amount={amount}
            token={onToken(amount, description)}
            currency={currency}
            stripeKey={STRIPE_PUBLISHABLE}
            zipCode={zipCode}
        />
    );
}

export default Checkout; 