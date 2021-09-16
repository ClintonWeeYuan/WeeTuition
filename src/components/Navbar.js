  
import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
import { useState, useEffect } from 'react';
import Logo from '../images/logoFour.png';
import LogoSymbol from '../images/logosymbol.png';
import {CgMenu} from 'react-icons/cg';
import {FaTimes} from 'react-icons/fa';
import { black } from 'jest-matcher-utils/node_modules/chalk';
import studyImage from '../images/study.png'


function Navbar() {

    const [click, setClick] = useState(false);

    const [view, setView] = useState( window.innerWidth<768 ? 'mobile': 'desktop');

    const handleClick = () => setClick(!click);
    
    const closeMobileMenu = () => setClick(false);

    const desktopView = () => {
        if (window.innerWidth > 769) {
            setClick(false);
            setView('desktop');
        } else if(window.innerWidth < 768){
            setView('mobile')
        }
    }

    window.addEventListener('resize', desktopView);

    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    <img src={view==='mobile'? LogoSymbol: Logo} />
                </Link>

                <img className='nav-study' src={studyImage}/>

                <div className='menu-icon' onClick={handleClick}>
                    {click? <FaTimes size={30}/> : <CgMenu color='white' size={30}/>}
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