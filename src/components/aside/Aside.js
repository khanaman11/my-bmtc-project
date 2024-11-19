import React from 'react'
import "./Aside.css"

const Aside = ({handleClickOnTab,activeItemIndex}) => {
    return (
        <div className="col-4 aside-bg">
            <h2 className='mb-5'>BookMyTestCenter</h2>
            <div className='aside-tag-wrapper'>
                <div className={`aside-tag-cnt ${activeItemIndex===0 ? "active":""}`} onClick={()=>handleClickOnTab(0)}>
                    <div className='icon-box'><i className="bi bi-person"></i></div>
                    <div>
                        <h3 className='m-0'>Your details</h3>
                        <p className='m-0'>Enter your full name, email & phone no.</p>
                    </div>
                </div>
                <div className={`aside-tag-cnt ${activeItemIndex===1 ? "active":""}`} onClick={()=>handleClickOnTab(1)}>
                    <div className='icon-box'><i className="bi bi-person"></i></div>
                    <div>
                        <h3 className='m-0'>Your details</h3>
                        <p className='m-0'>Enter your full name, email & phone no.</p>
                    </div>
                </div>
                <div className={`aside-tag-cnt ${activeItemIndex===2 ? "active":""}`} onClick={()=>handleClickOnTab(2)}>
                    <div className='icon-box'><i className="bi bi-person"></i></div>
                    <div>
                        <h3 className='m-0'>Your details</h3>
                        <p className='m-0'>Enter your full name, email & phone no.</p>
                    </div>
                </div>
                <div className={`aside-tag-cnt ${activeItemIndex===3 ? "active":""}`} onClick={()=>handleClickOnTab(3)}>
                    <div className='icon-box'><i className="bi bi-person"></i></div>
                    <div>
                        <h3 className='m-0'>Your details</h3>
                        <p className='m-0'>Enter your full name, email & phone no.</p>
                    </div>
                </div>
                <div className={`aside-tag-cnt ${activeItemIndex===4 ? "active":""}`} onClick={()=>handleClickOnTab(4)}>
                    <div className='icon-box'><i className="bi bi-person"></i></div>
                    <div>
                        <h3 className='m-0'>Your details</h3>
                        <p className='m-0'>Enter your full name, email & phone no.</p>
                    </div>
                </div>
            </div>
            <p className='company-year'>@2016 | Testpan India Private Limited</p>
        </div>
    )
};

export default Aside