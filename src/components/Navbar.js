import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
import { useState, useEffect } from 'react';
import Logo from '../images/logo.png';
import {CgMenu} from 'react-icons/cg';
import {FaTimes} from 'react-icons/fa';
import { black } from 'jest-matcher-utils/node_modules/chalk';
import studyImage from '../images/study.png'


function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    
    const closeMobileMenu = () => setClick(false);

    const desktopView = () => {
        if (window.innerWidth > 960) {
            setClick(false);
        }
    }

    window.addEventListener('resize', desktopView);

    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    <img src={Logo} />
                </Link>

                <img className='nav-study' src={studyImage}/>

                <div className='menu-icon' onClick={handleClick}>
                    {click? <FaTimes size={30}/> : <CgMenu size={30}/>}
                </div>

                <ul className={click? 'nav-menu-active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/mainclass' className='nav-links' onClick={closeMobileMenu}>
                            Start
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
