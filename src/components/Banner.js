import React from 'react';
import './Banner.css';
import Button from '../components/Button';
import {Container, Row, Col} from 'react-bootstrap'

function Banner(props) {
    return (

        <div className='banner-container'>
            
            <Container>
                <Row>
                    
                    <div className='banner-section'>
                        <Col className='banner-words'>
                            <div className='banner-heading'>
                            {props.heading}
                            </div>
                
                            <div className='banner-caption'>
                            {props.caption}
                            </div>

                            <Button linkName='/'>GET STARTED</Button>
                        </Col> 

                    
                        <img className='banner-image' src={props.image}/>
                    </div>
                </Row>  
            </Container>
            
        </div>
     

    )
}

export default Banner
