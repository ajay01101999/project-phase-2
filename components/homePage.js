import React from 'react';
import './homePage.css';
import { Link } from 'react-router-dom';

const HomePage =()=>{
    return(
        <div className='home'>
            <div className='upper'>
                <h1>START USING FOR FREE</h1>
                <Link to='/register'><button>REGISTER HERE</button></Link>
            </div>
        </div>
    )
}

export default HomePage;