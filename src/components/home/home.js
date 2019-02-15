import React from 'react';
import { NavLink } from 'react-router-dom'
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
                    REGISTRATION IS NOW OPEN!!!  
                </p>
                <br />
                <p className="text-center">
                    Thank you for your interest in this year's Crawfish Cup Pickleball Tournament benefitting the American Cancer Society. <br /><br />  
                    This year's event is scheduled for <strong>May 11-12, 2019</strong> at Highland Road Tennis Center. <br /><br />  
                    The event will feature both Doubles and Mixed Doubles and will be age and skill based. <br /><br />  
                    Additional tournament information and details can be found on the <NavLink to="/information">"Rules and Info"</NavLink> page. <br /><br />  
                    We look forward to seeing you on the courts!!
                </p>                
            </div >
        </div >
    );
}

export default home;