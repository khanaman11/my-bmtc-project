import React from 'react'
import "./Aside.css"
import maskGroup from "../../assets/icon/Mask group-white.png"
import circleRight from "../../assets/icon/right circle.png"
import Mpin from "../../assets/icon/Mpingrey.png"
import compDatil from "../../assets/icon/comp-detail.png"
import welcom from "../../assets/icon/welcom.png"

const Aside = ({handleClickOnTab,activeItemIndex}) => {
    return (
        <div className="col-4 aside-bg">
            <h2 className='mb-5'>BookMyTestCenter</h2>
            <div className='aside-tag-wrapper'>
                <div className={`aside-tag-cnt ${activeItemIndex===0 ? "active":""}`} onClick={()=>handleClickOnTab(0)}>
                    <div className='icon-box'><span><img src={maskGroup} alt="user-icon" /></span></div>
                    <div>
                        <h3 className='m-0'>Your details</h3>
                        <p className='m-0'>Enter your full name, email & phone no.</p>
                    </div>
                </div>
                <div className={`aside-tag-cnt ${activeItemIndex===1 ? "active":""}`} onClick={()=>handleClickOnTab(1)}>
                    <div className='icon-box'><img src={circleRight} alt="circleRight" /></div>
                    <div>
                        <h3 className='m-0'>Verify your phone number</h3>
                        <p className='m-0'>Enter the OTP sent on your phone number</p>
                    </div>
                </div>
                <div className={`aside-tag-cnt ${activeItemIndex===2 ? "active":""}`} onClick={()=>handleClickOnTab(2)}>
                    <div className='icon-box'><img src={Mpin} alt="Mpin" /></div>
                    <div>
                        <h3 className='m-0'>Choose your M-PIN</h3>
                        <p className='m-0'>Enter your M-PIN for easy access.</p>
                    </div>
                </div>
                <div className={`aside-tag-cnt ${activeItemIndex===3 ? "active":""}`} onClick={()=>handleClickOnTab(3)}>
                    <div className='icon-box'><img src={compDatil} alt="comp" /></div>
                    <div>
                        <h3 className='m-0'>Enter your company details</h3>
                        <p className='m-0'>Add the required company information.</p>
                    </div>
                </div>
                <div className={`aside-tag-cnt ${activeItemIndex===4 ? "active":""}`} onClick={()=>handleClickOnTab(4)}>
                    <div className='icon-box'><img src={welcom} alt="welcom" /></div>
                    <div>
                        <h3 className='m-0'>Welcome to BookMyTestCenter</h3>
                        <p className='m-0'>Get started right away.</p>
                    </div>
                </div>
            </div>
            <p className='company-year'>@2016 | Testpan India Private Limited</p>
        </div>
    )
};

export default Aside