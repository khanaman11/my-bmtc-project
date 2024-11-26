import React, { useState } from 'react'
import CompanyDetailsSection2 from './CompanyDetailsSection2'
import BankDetialsSection from './BankDetialsSection'
import GoodToGoSection from './GoodToGoSection'
import CompanyDetailsSection from './CompanyDetailsSection'

const CompanyDetail = ({activeItemIndex,proceedForm}) => {
    const [compantFormIndex,setCompantFormIndex] =useState(0)
    const handleCompanySteps =(index)=>{
        setCompantFormIndex(index + 1)
    }
    console.log(activeItemIndex)
    switch(compantFormIndex) {
        case 0:   return <CompanyDetailsSection handleCompanySteps={handleCompanySteps} compantFormIndex={compantFormIndex}/>;
        case 1:   return <CompanyDetailsSection2 handleCompanySteps={handleCompanySteps} compantFormIndex={compantFormIndex}/>;
        case 2: return <BankDetialsSection activeItemIndex={activeItemIndex} proceedForm={proceedForm}/>;
        case 3:  return <GoodToGoSection/>;
        default:      return null
      }
}

export default CompanyDetail