import React from 'react'
import "../../src/components/aside/Aside.css"
import detaisIcon2 from "../assets/icon/detaisIcon2.png"
import scrollicon4 from "../assets/icon/scroll-icon4.png"
import scroppIcon1 from "../assets/icon/scroll-icon1 (2).png"
import scrollIcon3 from "../assets/icon/scroll-icon3 (2).png"

const CompanyDetailsSection2 = () => {
    return (
        <div>
            <div className="form-heading">
                <div className='commom-header-icon'><span className='icon-box-form'><img src={detaisIcon2} alt="mpin-white" /></span></div>
                <h1 className='mt-3'>Enter company details</h1>
                <p>Add the required company information</p>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <span><img src={scroppIcon1} alt="icon1" /></span>
                </div>
                <div className='col-4'>
                    <span><img src={scrollicon4} alt="icon2" /></span>
                </div>
                <div className='col-4'>
                    <span><img src={scrollIcon3} alt="icon3" /></span>
                </div>
            </div>
            <div className="progress my-2" style={{ height: "10px" }}>
                <div className="progress-bar" role="progressbar" style={{ width: "32%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <p className='first-comp'>01: Company details</p>
                </div>
                <div className='col-4'>
                    <p className='first-comp'>02: Point of Contact details</p>
                </div>
                <div className='col-4'>
                    <p>03: Bank details & documents</p>
                </div>
            </div>
            <div className="comp-basic-details">
                <p>Basic details</p>
                <div className='row py-2'>
                    <div className="col-6"><label htmlFor="">Name of the Co-ordinator</label></div>
                    <div className="col-6"><input type="text" className='w-100 rounded input-bg py-1' /></div>
                </div>
                <div className='row py-2'>
                    <div className="col-6"><label htmlFor="">Email</label></div>
                    <div className="col-6"><input type="text" className='w-100 rounded input-bg py-1' /></div>
                </div>
                <div className='row py-2'>
                    <div className="col-6"><label htmlFor="">Mobile number</label></div>
                    <div className="col-6"><input type="text" className='w-100 rounded input-bg py-1' /></div>
                </div>
                <div className='row py-2'>
                    <div className="col-6"><label htmlFor="">Alternate mobile number</label></div>
                    <div className="col-6"><input type="text" className='w-100 rounded input-bg py-1' /></div>
                </div>
                <div className='row py-2'>
                    <div className="col-6"><label htmlFor="">Landline number</label></div>
                    <div className="col-6 d-flex">
                        <div className='w-25'>
                            <input type="text" className='w-100 rounded input-bg py-1' />
                        </div>
                        <div className='w-50 mx-2'>
                            <input type="text" className='w-100 rounded input-bg py-1' />
                        </div>
                        <div className='w-25'>
                            <input type="text" className='w-100 rounded input-bg py-1' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='comp-details-btn-cnt'>
                <button className='Go-back-btn'>Go back</button>
                <button className='proceed-btn'>Next<i className="bi bi-arrow-right"></i></button>
            </div>
        </div>
    )
}

export default CompanyDetailsSection2