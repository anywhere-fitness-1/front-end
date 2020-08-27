import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './styles/Header.css';


const MainHeader = () => {

    return (
        <header>
            <nav>
                <div className="logo">
                <a href="this is for the landing page">Anywhere Fitness</a>
                </div>
                <ul>
                        <li><NavLink to="/">Signup/Login</NavLink></li>
                        <li><a href="this is for the landing page">About Us</a></li>
                </ul>
                
            </nav>
        </header >
    )
}


export default MainHeader;
// © 2020 GitHub, Inc.