import React from 'react'
import "./Aside.css"
import MyImage from "../../assets/image/India (IN).svg"; // Adjust the path as needed

const Aside = () => {
  const Design = (
    <div className="row">
      <div className="col-4 aside-bg">
        <h2 className='mb-5'>BookMyTestCenter</h2>
        <div className='aside-tag-cnt'>
          <div className='icon-box'><i className="bi bi-person"></i></div>
          <div>
            <h3 className='m-0'>Your details</h3>
            <p className='m-0'>Enter your full name, email & phone no.</p>
          </div>
        </div>
        <div className='aside-tag-cnt'>
          <div className='icon-box'><i className="bi bi-person"></i></div>
          <div>
            <h3 className='m-0'>Your details</h3>
            <p className='m-0'>Enter your full name, email & phone no.</p>
          </div>
        </div>
        <div className='aside-tag-cnt'>
          <div className='icon-box'><i className="bi bi-person"></i></div>
          <div>
            <h3 className='m-0'>Your details</h3>
            <p className='m-0'>Enter your full name, email & phone no.</p>
          </div>
        </div>
        <div className='aside-tag-cnt'>
          <div className='icon-box'><i className="bi bi-person"></i></div>
          <div>
            <h3 className='m-0'>Your details</h3>
            <p className='m-0'>Enter your full name, email & phone no.</p>
          </div>
        </div>
        <div className='aside-tag-cnt'>
          <div className='icon-box'><i className="bi bi-person"></i></div>
          <div>
            <h3 className='m-0'>Your details</h3>
            <p className='m-0'>Enter your full name, email & phone no.</p>
          </div>
        </div>
        <p className='company-year'>@2016 | Testpan India Private Limited</p>
      </div>
      <div className="col-8 acount-cnt">
        <div className='need-help-cnt'>
          <span>Need help?</span>
        </div>
        <div className="create-account-cnt">
          <form className="form-cnt">
            <div className="form-heading">
              <span className='icon-box-form'><i className="bi bi-person"></i></span>
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
              <button className='proceed-btn'>proceed<i class="bi bi-arrow-right"></i></button>
              <p className='login-text'>Already have an account?<a href="#">Log in</a></p>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
  return Design;
};

export default Aside