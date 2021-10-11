import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Mission.css'

function Mission() {
    return (
        <div className='mission-container'>
            <Row>
                <Col xs={12} sm={6} className='mission-box'>
                    <div className='mission-heading'>
                        Our Mission
                    </div>

                    <div className='mission-divider'>
                    </div>

                    <div className='mission-content'>
                        Provide students with the tools and resources to study less, while still scoring well in exams.
                    </div>
                </Col>

                <Col xs={12} sm={6} className='mission-box'>
                    <div className='mission-heading'>
                        Our Vision
                    </div>

                    <div className='mission-divider'>
                    </div>

                    <div className='mission-content'>
                        Empower the younger generation to take control of their destiny, to get past all the studying, so they can build a life they enjoy living.
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Mission
