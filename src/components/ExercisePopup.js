import React from 'react'
import './ExercisePopup.css';
import {FaTimes} from 'react-icons/fa';

function ExercisePopup(props) {
    return (
        <div className='popup-container'>
            <div className='minimize-button'>
                <FaTimes onClick={props.onClick} size={20}/>
            </div>
            
            <div className='document-container'>
            <iframe src="https://drive.google.com/file/d/1ypNOBCSeL78piBqZ2JXZMTCgPsDVF4Yv/preview" width="640" height="600" allow="autoplay"></iframe>
            </div>
        </div>
    )
}

export default ExercisePopup
