import React from 'react'
import detailsIconWhite from "../../assets/icon/details icon white.png"
import scroppIcon1 from "../../assets/icon/scroll-icon1 (2).png"
import scrollIcon2 from "../../assets/icon/scroll-icon2 (2).png"
import scrollIcon3 from "../../assets/icon/scroll-icon3 (2).png"


const CompanyDetailsSection = ({handleCompanySteps,compantFormIndex}) => {
    return (
        <div>
            <div className="form-heading">
                <div className='commom-header-icon'><span className='icon-box-form'><img src={detailsIconWhite} alt="mpin-white" /></span></div>
                <h1 className='mt-3'>Enter company details</h1>
                <p>Add the required company information</p>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <span><img src={scroppIcon1} alt="icon1" /></span>
                </div>
                <div className='col-4'>
                    <span><img src={scrollIcon2} alt="icon2" /></span>
                </div>
                <div className='col-4'>
                    <span><img src={scrollIcon3} alt="icon3" /></span>
                </div>
            </div>
            <div className="progress my-2" style={{ height: "10px" }}>
                <div className="progress-bar" role="progressbar" style={{ width: "1px" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <p className='first-comp'>01: Company details</p>
                </div>
                <div className='col-4'>
                    <p>02: Point of Contact details</p>
                </div>
                <div className='col-4'>
                    <p>03: Bank details & documents</p>
                </div>
            </div>
            <div className="comp-basic-details">
                <p>Basic details</p>
                <div className='row py-2'>
                    <div className="col-6"><label htmlFor="">Company Name</label></div>
                    <div className="col-6"><input type="text" className='w-100 rounded input-bg py-1' /></div>
                </div>
                <div className='row py-2'>
                    <div className="col-6"><label htmlFor="">Company type</label></div>
                    <div className="col-6"><input type="text" className='w-100 rounded input-bg py-1' /></div>
                </div>
                <div className='row py-2'>
                    <div className="col-6"><label htmlFor="">Company website</label></div>
                    <div className="col-6"><input type="text" className='w-100 rounded input-bg py-1' /></div>
                </div>
            </div>
            <div className='location details pt-4'>
                <p>Location details</p>
                <div className='row py-2'>
                    <div className="col-6">
                        <label htmlFor="">Which Country is the company based in</label>
                    </div>
                    <div className="col-6">
                        <select id="dropdown" name="dropdown" className='w-100 py-2 px-2 rounded input-bg'>
                            <option value="option1">India</option>
                            <option value="option2">Chaina</option>
                            <option value="option3">America</option>
                        </select>
                    </div>
                </div>
                <div className='row py-2'>
                    <div className="col-6">
                        <label htmlFor="">Pincode</label>
                    </div>
                    <div className="col-6">
                        <input type="text" className='w-100 rounded input-bg px-2 py-1' />
                    </div>
                </div>
                <div className='row py-2'>
                    <div className="col-6">
                        <label htmlFor="">state</label>
                    </div>
                    <div className="col-6">
                        <select id="dropdown" name="dropdown" className='w-100 py-2 px-2 rounded input-bg'>
                            <option value="option1">India</option>
                            <option value="option2">Chaina</option>
                            <option value="option3">America</option>
                        </select>
                    </div>
                </div>
                <div className='row py-2'>
                    <div className="col-6">
                        <label htmlFor="">city</label>
                    </div>
                    <div className="col-6 ">
                        <select id="dropdown" name="dropdown" className='w-100 py-2 px-2 rounded input-bg'>
                            <option value="option1">India</option>
                            <option value="option2">Chaina</option>
                            <option value="option3">America</option>
                        </select>
                    </div>
                </div>
                <div className='row py-2'>
                    <div className="col-6">
                        <label htmlFor="">Company Address</label>
                    </div>
                    <div className="col-6">
                        <input type="text" className='w-100 rounded input-bg px-2 py-1' />
                    </div>
                </div>

            </div>
            <div className='comp-details-btn-cnt'>
                <button className='proceed-btn' onClick={()=>handleCompanySteps(compantFormIndex)}>Next<i className="bi bi-arrow-right"></i></button>
            </div>
        </div>
    );
}
export default CompanyDetailsSection