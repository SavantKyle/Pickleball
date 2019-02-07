import React from 'react';
import crawfishCupLogo from '../../assets/Crawfish_Cup_Pickleball_Logo.png';

const home = (props) => {
    return (
        <div>
            <div className="col-md-4">
                <img src={crawfishCupLogo} alt="img" className="img-responsive" />
            </div>
            <div className="col-md-6 lead">
                <h1 className="text-center">
                    Welcome to the 2019 Crawfish Cup
                </h1>
                <br />
                <p className="text-center">
                    Thank you for your interest in this year's Crawfish Cup Pickleball Tournament benefitting the American Cancer Society.
                    This year's event is scheduled for <strong>May 11-12, 2019</strong> at Highland Road Tennis Center.
                </p>
                <br />
                <p className="text-center">
                    Registration will be opening shortly.  If you would like to get notified once registration is open please
                    email <a href="mailto:kyle.savant@batonrougepickleball.com">kyle.savant@batonrougepickleball.com</a>.
                </p>
            </div >
        </div >
    );
}

export default home;