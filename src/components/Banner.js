import React from 'react';
import './Banner.css';
import Button from '../components/Button';
import {Container, Row, Col} from 'react-bootstrap'

function Banner(props) {
    return (

        <div className='banner-container'>
            
            <Container>
                <Row>
                    <Col className='empty-div'>
                         
                    </Col>

                    <Col className='banner-words'>
                        <div className='banner-heading'>
                            {props.heading}
                        </div>
                
                        <div className='banner-caption'>
                            {props.caption}
                        </div>

                        <Button linkName='/'>GET STARTED</Button>
                    </Col> 
                </Row>  
            </Container>
            
        </div>
     

    )
}

export default Banner
