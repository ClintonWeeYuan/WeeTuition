import React from 'react';
import './Section.css'
import {Container, Row, Col} from 'react-bootstrap';
import Button from './Button'

function Section(props) {
    return (
        <div className='section-container' >
            
            <Row className='section-heading'>
                {props.heading}
            </Row>

            <Row>
                <div className='divider'>
                    
                </div>
            </Row>

            <Row>
                 
                <div className='section-columns'>
                    <Col>{props.children[0]}</Col>
                    <Col>{props.children[1]}</Col>
                    <Col>{props.children[2]}</Col>
                </div>
            </Row>

            <Row>
                <Button linkName='/mainclass'>GET STARTED</Button>
            </Row>
        </div>
    )
}

export default Section
