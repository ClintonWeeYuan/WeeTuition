import React from 'react';
import Banner from '../components/Banner';
import Section from '../components/Section';
import Card from '../components/Card';
import {Container, Row, Col} from 'react-bootstrap';
import CardImageOne from '../images/video.png';
import CardImageTwo from '../images/practice.png';
import CardImageThree from '../images/cheatsheet.png';

function Home() {
    return (
        <div>
            <Banner heading='Learn Mathematics' caption='The One-Stop Website for Mathematics, the Malaysian way'/>
            <Section heading='What we do'>
                <Card image={CardImageOne} heading='Video Tutorials' caption='Listen and learn from the comfort of your own home'/>
                <Card image={CardImageTwo} heading='Practice Questions' caption='Cement your understanding with exercises, which come with the relevant workings'/>
                <Card image={CardImageThree} heading='CheatSheets' caption='Revision has never been easier with our clear and concise summaries'/>
            </Section>
        </div>


    )
}

export default Home
