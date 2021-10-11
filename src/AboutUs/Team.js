import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import Hazel from '../images/hazel.jpeg';
import Clinton from '../images/clinton.jpg';

function Team() {
    return (
        <div className='team-container'>         
            <Row className='team-heading'>
                Meet The Team
            </Row>

            <Row>
                <div className='team-divider'>
                    
                </div>
            </Row>
            
            <Row className='tutor-container'>
                <Col className='tutor-profile'>
                    <div className='tutor-picture'>              
                          <img src={Hazel} alt=''/>
                    </div>


                </Col>

                <Col className='tutor-description'>
                    <div className='tutor-name'>
                        <h2>Hazel</h2>
                    </div>

                    <h4>Hazel graduated from Oxford University with a First Class Honours in MEng Engineering Science and is now working towards a PhD in Bioengineering. Prior to university, she was the top scorer globally and in Malaysia for A-Level Chemistry and AS-Level Mathematics respectively, and achieved A* on all A-Level science and math exams. Hazel formerly served as a member of the admissions team for St. Hilda’s College, Oxford University, and has extensive experience supporting students planning to pursue mathematics and the sciences.</h4>
                </Col>
            </Row>

            <Row className='tutor-container'>
                <Col className='tutor-profile'>
                    <div className='tutor-picture'>              
                          <img src={Clinton} alt=''/>
                    </div>

                </Col>

                <Col className='tutor-description'>

                    <div className='tutor-name'>
                        <h2>Clinton</h2>
                    </div>

                    <h4>Clinton graduated from the University of Cambridge with a undergraduate degree in law. He was also the top scorer globally for AS-Level Mathematics. Clinton has worked at various educational institutions, and has years of experience tutoring students in Mathematics, Physics, and Economics.</h4>
                </Col>
            </Row>
        </div>
    )
}

export default Team
