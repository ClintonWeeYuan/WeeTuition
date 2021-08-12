import React from 'react'
import './KeyEquations.css'
import {Row, Col} from 'react-bootstrap'

function KeyEquations() {
    return (
        <div className='equations-container'>
            <Row className='equations-heading'>
                    Key Equations
            </Row>

            <Row>
                <div className='divider'>
                    
                </div>
            </Row>

            <Row className='equations-content'>
                <div className='individual-equation'>
                    a^2 + b^2 = (a + b)^2
                </div>

                <div className='individual-equation'>
                    x = b^2 +- 4ac / (2a)^2
                </div>

                <div className='individual-equation'>
                    2b = 4ac - 9/zyw(2 * 5)
                </div>
            </Row>
        </div>
    )
}

export default KeyEquations
