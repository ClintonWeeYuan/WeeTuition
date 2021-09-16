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
            <iframe src={props.gdrive} width="640" height="800" allow="autoplay"></iframe>
            </div>
        </div>
    )
}

export default ExercisePopup
