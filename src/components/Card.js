import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <div className='card-container'>
            <div className='card-image'>
                <img src={props.image}/>
            </div>

            <div className='card-heading'>
                {props.heading}
            </div>

            <div className='card-caption'>
                {props.caption}
            </div>

        </div>
    )
}

export default Card
