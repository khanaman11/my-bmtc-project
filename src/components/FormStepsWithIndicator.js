import React, {  } from 'react'
import Login from './Login'
import Otp from './Otp'
import MpinSection from './MpinSection'

const FormStepsWithIndicator = ({ activeItemIndex,proceedForm }) => {
    switch(activeItemIndex){
        case 0: return <Login activeItemIndex={activeItemIndex} proceedForm={proceedForm} />
        case 1: return <Otp activeItemIndex={activeItemIndex} proceedForm={proceedForm}/>
        case 2: return <MpinSection activeItemIndex={activeItemIndex} proceedForm={proceedForm}/>
        default:return null
    }
}

export default FormStepsWithIndicator