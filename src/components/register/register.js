import React, { Component } from 'react';
import { Elements } from 'react-stripe-elements';
import RegisterForm from './registerForm';

class register extends Component {
    render() {
        return (
            <>
                <div className="text-center">
                    <h3>Player Registration</h3>
                    <small className="text-muted">We'll never share your information with anyone else.</small>
                </div>
                <div>
                    <Elements>
                        <RegisterForm />
                    </Elements>
                </div >
            </>
        );
    }
}

export default register;