import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <Link to="/nasa">
                <i className="fas fa-rocket"> </i>
               <h1> Nasa</h1>
            </Link>
        </div>
    )
}

export default Home