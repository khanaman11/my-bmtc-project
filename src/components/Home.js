import React, { useState } from 'react'
import Aside from './aside/Aside'
import FormStepsWithIndicator from './FormStepsWithIndicator'

const Home = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0)
    const handleClickOnTab = (index) => {
        setActiveItemIndex(index)
    }
    return (
        <div className="row">
            <Aside handleClickOnTab={handleClickOnTab} activeItemIndex={activeItemIndex} />
            <div className="col-8 acount-cnt" style={{position:"relative",overflow:"auto"}}>
                <div className='need-help-otp-cnt'>
                    {activeItemIndex !== 0 ?
                        <button className='go-back-btn'><i className="bi bi-arrow-left"></i>Go back</button>:null
                    }
                    
                    <span>Need help?</span>
                </div>
                <FormStepsWithIndicator activeItemIndex={activeItemIndex}/>
            </div>

        </div>
    )
}

export default Home