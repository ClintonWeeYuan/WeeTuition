import React from 'react';
import './AboutUs.css';
import Team from './Team.js';
import Mission from './Mission.js';
import Banner2 from '../components/Banner2';

function AboutUs() {
    return (
        <div>
            <Banner2 heading='Study Less' caption='Take control of your life, and have the time to enjoy your childhood'/>
            <Mission/>
            <Team/>    
        </div>
    )
}

export default AboutUs
