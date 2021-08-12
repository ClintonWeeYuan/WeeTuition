import React from 'react'
import VideoTutorial from '../components/VideoTutorial';
import Exercise from '../components/Exercise';
import KeyEquations from '../components/KeyEquations'


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
        </div>
    )
}

export default Overview
