import React from 'react';
import Banner from '../components/Banner';
import Section from '../components/Section';
import Card from '../components/Card';
import {Container, Row, Col} from 'react-bootstrap';
import CardImageOne from '../images/video.png';
import CardImageTwo from '../images/practice.png';
import CardImageThree from '../images/cheatsheet.png';
import BannerOneImage from '../images/bannerOne.png';

function Home() {
    return (
        <div>
            <Banner image={BannerOneImage} heading='Study Less' caption="LIVE LIKE YOU DON'T HAVE TOMORROW, LEARN LIKE YOU'LL LIVE FOREVER"/>
            <Section heading='OUR RESOURCES'>
                <Card image={CardImageOne} heading='Video Tutorials' caption='Listen and learn from the comfort of your own home'/>
                <Card image={CardImageTwo} heading='Practice Questions' caption='Cement your understanding with exercises, which come with the relevant workings'/>
                <Card image={CardImageThree} heading='CheatSheets' caption='Revision has never been easier with our clear and concise summaries'/>
            </Section>
        </div>


    )
}

export default Home
