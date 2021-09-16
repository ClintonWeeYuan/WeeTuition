import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './VideoTutorial.css'
import ReactPlayer from 'react-player';

function VideoTutorial(props) {
    return (
        
            <div className='video-container'>
                
                <Row className='video-heading'>
                    Video Tutorial
                </Row>

                <Row>
                    <div className='video-divider'>
                    
                    </div>
                </Row>

                <Row>
                    <div  className='video-content'>
                    <ReactPlayer
                        url={props.ytube}
                    />
                    </div>
                </Row>
                    
            </div>

    )
}

export default VideoTutorial
