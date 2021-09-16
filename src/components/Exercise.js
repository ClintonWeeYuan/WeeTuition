import {React, useState} from 'react'
import './Exercise.css'
import {Row, Col} from 'react-bootstrap';
import Button from '../components/Button';
import ExercisePopup from './ExercisePopup'




function Exercise(props) {

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
                <div className='exercise-divider'></div>
            </Row>

            <Row>
                <div  className='exercise-content'>
                    <Button onClick={openPopup} buttonSize='btn-large'>Exercises</Button>
                </div>
            </Row>     
            {popup && <ExercisePopup gdrive={props.exercise} onClick={openPopup}/>}   

            
        </div>
    )
}

export default Exercise
