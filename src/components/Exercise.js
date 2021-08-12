import {React, useState} from 'react'
import './Exercise.css'
import {Row, Col} from 'react-bootstrap';
import { Document, Page } from 'react-pdf';
import Button from '../components/Button';
import ExercisePopup from './ExercisePopup'




function Exercise() {

    const [popup, setPopup] = useState(false);

    const openPopup = () => {
        setPopup(!popup);
    }

    return (
        <div className='exercise-container'>
            
            <Row className='exercise-heading'>
                    Exercise
            </Row>

            <Row>
                <div className='divider'></div>
            </Row>

            <Row>
                <div  className='exercise-content'>
                    <Button onClick={openPopup}buttonSize='btn-large'>Exercises</Button>
                    <Button buttonSize='btn-large'>Cribs</Button>
                </div>
            </Row>     
            {popup && <ExercisePopup onClick={openPopup}/>}   

            
        </div>
    )
}

export default Exercise
