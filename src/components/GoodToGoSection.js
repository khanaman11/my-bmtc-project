import React, { Fragment } from 'react'
import welcomeImg from "../assets/icon/welcom white img.png"
import finishBtn from "../assets/icon/Finish up 🚀.png"
import finishVideo from "../assets/video/video1.mp4"
import "../../src/components/aside/Aside.css"

const GoodToGoSection = () => {
    return (
        <Fragment>
            <div className="create-account-cnt">
                <form className="form-otp-cnt">
                    <div className="form-heading">
                        <div className='commom-header-icon'><span className='icon-box-form'><img src={welcomeImg} alt="mpin-white" /></span></div>
                        <h1 className='mt-3'>Welcome to BookMyTestCenter</h1>
                        <p>You are good to go!</p>
                    </div>
                    <div className='form-input-mpin-cnt'>
                        <div className="video-container">
                            <video class="object-fit-cover" autoplay muted loop>
                                <source src={finishVideo} type="video/mp4" />
                            </video>
                            <div className="play-icon"></div>
                        </div>
                    </div>
                    <div className="finish-btn-cnt">
                        <button className='finish-btn '> <img src={finishBtn} alt="" /></button>
                    </div>
                </form>

            </div>
        </Fragment>
    )
}

export default GoodToGoSection;