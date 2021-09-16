import React, {useState} from 'react'
import Sidebar from '../components/Sidebar/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {SidebarData} from '../components/Sidebar/SidebarData';

import VideoTutorial from '../components/VideoTutorial';
import Exercise from '../components/Exercise';
import KeyEquations from '../components/KeyEquations'
import PastYear from '../components/PastYear';

const PageStyle = {
    alignItems: 'center',
    width: '100%',
    position: 'relative'
}

function MainClass() {

    const [ytube, setYtube] = useState('');
    const [exercise, setExercise] = useState('');

    const handleClick = (e) => {
        setYtube(e.target.getAttribute('ytube'));
        setExercise(e.target.getAttribute('exercise'));
        
    }

    return (
        <>
            <Sidebar handleClick={handleClick} />
            <div style={PageStyle}>
                <VideoTutorial ytube={ytube}/>
                <Exercise exercise={exercise}/>
            </div>        
        </>
    )
}

export default MainClass
