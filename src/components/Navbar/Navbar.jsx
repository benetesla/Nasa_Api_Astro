import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">
                <i className="fas fa-home"></i>

            </Link>
            <h1 className="navbar__logo">
                Astra<span className="navbar__logo--span">TUS</span>
            </h1>
            <Link to="https://api.nasa.gov/">
                <i className="fas fa-rocket"></i>
            </Link>
        </div>
    )
}

export default Navbar