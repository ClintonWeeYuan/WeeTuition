import {React, useState} from 'react'
import './PastYear.css'
import {Row, Col} from 'react-bootstrap';
import Button from '../components/Button';
import ExercisePopup from './ExercisePopup'




function PastYear() {

    const [popup, setPopup] = useState(false);

    const openPopup = () => {
        setPopup(!popup);
    }

    return (
        <div className='pastyear-container'>
            
            <Row className='pastyear-heading'>
                    Past Years
            </Row>

            <Row>
                <div className='pastyear-divider'></div>
            </Row>

            <Row>
                <div  className='pastyear-content'>
                    <Button onClick={openPopup}buttonSize='btn-large'>Exercises</Button>
                    <Button buttonSize='btn-large'>Cribs</Button>
                </div>
            </Row>     
            {popup && <ExercisePopup onClick={openPopup}/>}   

            
        </div>
    )
}

export default PastYear
