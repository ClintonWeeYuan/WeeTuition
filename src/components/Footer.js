import React from 'react';
import './Footer.css';
import {FaCopyright} from 'react-icons/fa'
import {BiPhoneCall} from 'react-icons/bi'
import {MdEmail} from 'react-icons/md'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-heading'>
                <p>Wee Academy</p>
            </div>
            

            <div className='footer-contact'>
                <div>
                    Contact us:
                </div>
                <div className='contact-box'>
                    <BiPhoneCall/>
                    <div className='contact-info'>012-3456798</div>
                </div>
                <div className='contact-box'>
                    <MdEmail />
                    <div className='contact-info'>weeacademy@gmail.com</div>
                </div>

            </div>
            
        </div>
    )
}

export default Footer
