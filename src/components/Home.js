import React, { useState } from 'react'
import Aside from './aside/Aside'
import "../../src/components/aside/Aside.css"
import FormStepsWithIndicator from './FormStepsWithIndicator'
import CompanyDetail from './companyDetailForm/CompanyDetail'
import Indicator from './Indicator'
import GoodToGoSection from './companyDetailForm/GoodToGoSection'

const Home = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0)
    const handleClickOnTab = (index) => {
        setActiveItemIndex(index)
    }
    const proceedForm =(index)=>{
        setActiveItemIndex(index+1)
    }
    const goBack =(index)=>{
        setActiveItemIndex(index)
    }
    return (
        <div className="row">
            <Aside handleClickOnTab={handleClickOnTab} activeItemIndex={activeItemIndex} />
            <div className="col-8 acount-cnt" style={{position:"relative",overflow:"auto"}}>
                <div className='need-help-otp-cnt'>
                    {activeItemIndex !== 0 ?
                        <button className='go-back-btn' onClick={()=>goBack(0)}><i className="bi bi-arrow-left"></i>Go back</button>:null
                    }
                    
                    <div className='needHelpWrapper'><a href='#'>Need help?</a></div>
                </div>
                {activeItemIndex === 0 || activeItemIndex === 1 || activeItemIndex === 2 ?
                <>
                <FormStepsWithIndicator activeItemIndex={activeItemIndex} proceedForm={proceedForm}/>
                <Indicator activeItemIndex={activeItemIndex} />
                </>
                :""
                }
                {
                    activeItemIndex === 3 ?
                    <CompanyDetail activeItemIndex={activeItemIndex} proceedForm={proceedForm}/>:""
                }
                {
                    activeItemIndex === 4 ?
                    <GoodToGoSection/>:""
                }
            </div>

        </div>
    )
}

export default Home