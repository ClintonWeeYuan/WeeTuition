import React from 'react'
import VideoTutorial from '../components/VideoTutorial';
import Exercise from '../components/Exercise';
import KeyEquations from '../components/KeyEquations'
import PastYear from '../components/PastYear';


const PageStyle = {
    alignItems: 'center',
    width: '100%',
    position: 'relative'
}

function Overview() {
    return (
        <div style={PageStyle}>
            <VideoTutorial></VideoTutorial>
            <KeyEquations/>
            <Exercise/>
            <PastYear/>
        </div>
    )
}

export default Overview
