import React, { Fragment } from 'react'
import MpinWhite from "../assets/icon/mpinwhite.png"

const MpinSection = ({activeItemIndex,proceedForm}) => {
    return (
        <Fragment>
            <div className="create-account-cnt">
                <form className="form-otp-cnt">
                    <div className="form-heading">
                        <div className='commom-header-icon'><span className='icon-box-form'><img src={MpinWhite} alt="mpin-white" /></span></div>
                        <h1 className='mt-3'>Setup your 4 digit M-PIN</h1>
                        <p>The M-Pin will be used for logging in in the future</p>
                    </div>
                    <div className='form-input-mpin-cnt'>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                    <div className="form-footer">
                        <button className='proceed-btn mt-3' onClick={()=>proceedForm(activeItemIndex)}>proceed<i className="bi bi-arrow-right"></i></button>
                    </div>
                </form>

            </div>
        </Fragment>
    )
}

export default MpinSection