import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'
const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <h1 className="home__title">Welcome to the NASA API</h1>
                <p className="home__text">This is a simple app that uses the NASA API
                    to display images from satuns lapetus and other planets.
                </p>
                <Link to="/nasa">
                    <button className="home__button">View Images</button>
                </Link>
            </div>
        </div>
    )
}

export default Home