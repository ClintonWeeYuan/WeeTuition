import React from 'react';
import './Section.css'
import {Container, Row, Col} from 'react-bootstrap';
import Button from './Button'

function Section(props) {
    return (
        <Container className='section-container' >
            <Row className='section-heading'>
                {props.heading}
            </Row>

            <Row>
                <div className='divider'>
                    
                </div>
            </Row>

            <Row>
                 
                <div  className='section-columns'>
                    <Col>{props.children[0]}</Col>
                    <Col>{props.children[1]}</Col>
                    <Col>{props.children[2]}</Col>
                </div>
            </Row>

            <Row>
                <Button>GET STARTED</Button>
            </Row>
        </Container>
    )
}

export default Section
