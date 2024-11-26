import React, { Fragment } from 'react'
import MyImage from "../assets/image/India (IN).svg";
import whiteUser from "../assets/icon/white user.png";

const Login = ({activeItemIndex,proceedForm}) => {
    return (
        <Fragment>
            <div className="create-account-cnt">
                <form className="form-cnt">
                    <div className="form-heading">
                        <div className='commom-header-icon'><span className='icon-box-form'><img src={whiteUser} alt="" /></span></div>
                        <h1 className='mt-3'>Create an account</h1>
                        <p>Provide your full name, email and phone number</p>
                    </div>
                    <div className='form-input-cnt'>
                        <p>
                            <label htmlFor="">First name*</label><br />
                            <span className='input-icon-person'><i className="bi bi-person"></i></span>
                            <input type="text" />
                        </p>
                        <p>
                            <label htmlFor="">Email*</label><br />
                            <span className='input-icon-at'><i className="bi bi-at"></i></span>
                            <input type="email" />
                        </p>
                        <p>
                            <label htmlFor="">Phone number*</label><br />
                            <span className='input-icon-flag'><img src={MyImage} alt="flag" /></span>
                            <input type="number" />
                        </p>
                    </div>
                    <div className="form-footer">
                        <p className='checkbox-cnt'>
                            <input type="checkbox" />
                            <label htmlFor="">I agree to the <span className='privacy-policy'>Terms & Service & Privacy Policy</span></label><br />
                        </p>
                        <button className='proceed-btn' onClick={()=>proceedForm(activeItemIndex)}>proceed<i className="bi bi-arrow-right"></i></button>
                        <p className='login-text'>Already have an account?<a href="/">Log in</a></p>
                    </div>
                </form>

            </div>
        </Fragment>
    )
}

export default Login