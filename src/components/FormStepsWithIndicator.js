import React, {  } from 'react'
import Login from './Login'
import Otp from './Otp'
import Indicator from './Indicator'
import MpinSection from './MpinSection'
import CompanyDetailsSection from './CompanyDetailsSection'
import CompanyDetailsSection2 from './CompanyDetailsSection2'
import BankDetialsSection from './BankDetialsSection'
import GoodToGoSection from './GoodToGoSection'

const FormStepsWithIndicator = ({ activeItemIndex }) => {
    return (
        <div className=''>
            <div>
                {activeItemIndex === 0 ?
                    <Login /> : null
                }
                {activeItemIndex === 1 ?
                    <Otp /> : null
                }
                {activeItemIndex === 2 ?
                    <MpinSection /> : null
                }
                {activeItemIndex === 3 ?
                    <CompanyDetailsSection /> : null
                }
                {activeItemIndex === 4 ?
                    <CompanyDetailsSection2 /> : null
                }
                
                {activeItemIndex === 4 ?
                    <BankDetialsSection /> : null
                }
                {activeItemIndex === 4 ?
                    <GoodToGoSection /> : null
                }

            </div>

            <Indicator activeItemIndex={activeItemIndex} />
        </div>
    )
}

export default FormStepsWithIndicator