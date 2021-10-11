import React from 'react';
import './Banner2.css';
import Button from '../components/Button';
import {Container, Row, Col} from 'react-bootstrap'

function Banner2(props) {
    return (

        <div className='banner-container2'>
            
            <Container>
                <Row>
                    
                    <div className='banner-section'>
                        <div className='banner-words'>
                            <div className='banner-heading'>
                            {props.heading}
                            </div>
                
                            <div className='banner-caption'>
                            {props.caption}
                            </div>

                            <Button linkName='/mainclass'>GET STARTED</Button>
                        </div> 

                        <div className='empty-div'>
                        </div>
                    </div>
                </Row>  
            </Container>
            
        </div>
     

    )
}

export default Banner2
