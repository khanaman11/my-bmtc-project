import React, { Fragment } from 'react'
import circleWhite from "../assets/icon/circle white.png"

const Otp = ({activeItemIndex,proceedForm}) => {
  return (
    <Fragment>
      <div className="create-account-cnt">
        <form className="form-otp-cnt">
          <div className="form-heading">
          <div className='commom-header-icon'><span className='icon-box-form'><img src={circleWhite} alt="" /></span></div>
            <h1 className='mt-3'>Verify your phone number, Mahesh</h1>
            <p>We sent a 6 digit OTP to 9922345678</p>
          </div>
          <div className='form-input-otp-cnt'>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <div className="form-footer">
            <p className='login-text'>Didn’t get a code?<a href="/">Resend</a></p>
            <button className='proceed-btn' onClick={()=>proceedForm(activeItemIndex)}>proceed<i className="bi bi-arrow-right"></i></button>
            <p className='login-text'>Incorrect phone number?<a href="/">Change</a></p>
          </div>
        </form>

      </div>
    </Fragment>
  )
}

export default Otp