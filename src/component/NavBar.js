import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/navBar.css';


class NavBar extends Component {
    render(){
        const styleLink = {
            color: 'black',
            textDecoration : 'none'
        };
        return(
            <nav className="navbar-list">

                <ul className="listNab">
                    <Link to="/"  style = {styleLink}>
                    
                    <li style = {styleLink}>Home</li>
                    </Link>

                    <Link to ="/contact-us" style = {styleLink}>
                    <li style = {styleLink}>Contact us</li>
                    </Link>
                  <Link to="/about-us" style = {styleLink}>
                    <li style = {styleLink}>About us</li>
                  </Link>

                   
                </ul>

                <ul className="socialMedia" style= {styleLink}>
                    <li ><i className="fab fa-facebook"></i></li>
                    <li><i className="fab fa-instagram"></i></li>
                    <li><i className="fab fa-twitter-square"></i></li>
                </ul>

                



            </nav>
        )

    }
}

export default NavBar;