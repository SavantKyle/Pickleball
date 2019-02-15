import React from 'react';
import { NavLink } from 'react-router-dom'
// import './Navigation.css';

const navigation = () => {
    let style = {
        backgroundColor: '#4189C7',
        color: "white"
    }

    return (
        <nav className="navbar-default" >
            <ul className="nav nav-pills nav-justified navbar-static-top">
                <li><NavLink activeStyle={style} to="/home"><span className="fa fa-home"></span> Home</NavLink></li>
                <li><NavLink activeStyle={style} to="/cause"><span className="fa fa-heartbeat"></span> The Cause</NavLink></li>
                <li><NavLink activeStyle={style} to="/sponsors"><span className="fa fa-star"></span> Sponsors</NavLink></li>
                <li><NavLink activeStyle={style} to="/information"><span className="fa fa-info-circle"></span> Rules & Info</NavLink></li>
                <li><NavLink activeStyle={style} to="/register"><span className="fa fa-check-square-o"></span> Register</NavLink></li>
                {/* <li className="disabled"><a href="\"><span className="fa fa-check-square-o"></span> Register</a></li> */}
                <li>
                    <a href="https://www.facebook.com/crawfishcuppickleball/" rel="noopener noreferrer" target="_blank">
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
