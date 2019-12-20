import React from 'react';
import { NavLink } from 'react-router-dom'
// import './Navigation.css';

const navigation = () => {
    let style = {
        backgroundColor: '#4189C7',
        color: "white"
    }

    let lookingLink, registrationLink = null;
    if (new Date() > new Date('4/8/2020')) {
        registrationLink = null;
    } else {
        lookingLink = <li><NavLink activeStyle={style} to="/looking"><span className="fa fa-search"></span> Need a Partner</NavLink></li>
        registrationLink = <li><NavLink activeStyle={style} to="/register"><span className="fa fa-check-square-o"></span> Register</NavLink></li>
    }
    return (
        <nav className="navbar-default" >
            <ul className="nav nav-pills nav-justified navbar-static-top">
                <li><NavLink activeStyle={style} to="/home"><span className="fa fa-home"></span> Home</NavLink></li>
                <li><NavLink activeStyle={style} to="/cause"><span className="fa fa-heartbeat"></span> The Cause</NavLink></li>
                <li><NavLink activeStyle={style} to="/sponsors"><span className="fa fa-star"></span> Sponsors</NavLink></li>
                <li><NavLink activeStyle={style} to="/information"><span className="fa fa-info-circle"></span> Rules & Info</NavLink></li>
                {lookingLink}
                {registrationLink}
                <li>
                    <a href="https://www.facebook.com/groups/1872560139539366/?source_id=351432462368802" rel="noopener noreferrer" target="_blank">
                        <span className="fa fa-facebook-square"></span> Follow Us
                    </a>
                </li>
                {/* <li className="disabled"></li>
                    <a href="\" rel="noopener noreferrer">
                        <span className="fa fa-facebook-square"></span> Follow Us
                    </a> 
                </li>*/}
            </ul>
        </nav >
    );
}

export default navigation;
