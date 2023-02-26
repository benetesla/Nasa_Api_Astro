import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">
                <i className="fas fa-home"></i>
               
            </Link>
            <Link to="/nasa">
                <i className="fas fa-rocket"></i>
               
            </Link>
        </div>
    )
}

export default Navbar