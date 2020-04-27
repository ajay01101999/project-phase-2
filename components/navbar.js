import React from 'react';
import './navbar.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return(
        <div className='navbar'>
            <img src={logo} alt='logo'/>
            <Link to='/register' className='link1'>REGISTER</Link>
            <Link to='/login' className='link2'>LOGIN</Link>
        </div>
    );
}

export default Navbar;