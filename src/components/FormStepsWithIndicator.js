import React, {  } from 'react'
import Login from './Login'
import Otp from './Otp'
import Indicator from './Indicator'
import MpinSection from './MpinSection'
import CompanyDetailsSection from './companyDetailForm/CompanyDetailsSection'
import CompanyDetailsSection2 from './companyDetailForm/CompanyDetailsSection2'
import BankDetialsSection from './companyDetailForm/BankDetialsSection'
import GoodToGoSection from './companyDetailForm/GoodToGoSection'

const FormStepsWithIndicator = ({ activeItemIndex,proceedForm }) => {
    switch(activeItemIndex){
        case 0: return <Login activeItemIndex={activeItemIndex} proceedForm={proceedForm} />
        case 1: return <Otp activeItemIndex={activeItemIndex} proceedForm={proceedForm}/>
        case 2: return <MpinSection activeItemIndex={activeItemIndex} proceedForm={proceedForm}/>
        default:return null
    }
}

export default FormStepsWithIndicator