import React, { useState } from 'react'
import Aside from './aside/Aside'
import Login from './Login'
import Otp from './Otp'
import Indicator from './Indicator'

const Home = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0)
    const handleClickOnTab = (index) => {
        setActiveItemIndex(index)
    }
    return (
        <div className="row">
            <Aside handleClickOnTab={handleClickOnTab} activeItemIndex={activeItemIndex} />
            <div className="col-8 acount-cnt">
                <div>
                    {activeItemIndex === 0 ?
                        <Login /> : null
                    }
                    {activeItemIndex === 1 ?
                        <Otp /> : null
                    }
                </div>
                <Indicator activeItemIndex={activeItemIndex}/>
            </div>

        </div>
    )
}

export default Home