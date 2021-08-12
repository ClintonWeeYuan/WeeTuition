import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './VideoTutorial.css'
import ReactPlayer from 'react-player';

function VideoTutorial() {
    return (

            <div className='video-container'>
                <Row className='video-heading'>
                    Video Tutorial
                </Row>

                <Row>
                    <div className='divider'>
                    
                    </div>
                </Row>

                <Row>
                    <div  className='video-content'>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=oPVte6aMprI"
                    />
                    </div>
                </Row>
                    
            </div>

    )
}

export default VideoTutorial
