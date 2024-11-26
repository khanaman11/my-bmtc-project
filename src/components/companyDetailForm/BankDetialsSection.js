import React from 'react'
import detaisIcon2 from "../../assets/icon/detaisIcon2.png"
import scrollicon4 from "../../assets/icon/scroll-icon4.png"
import scrollicon5 from "../../assets/icon/scroll-icon5.png"
import scroppIcon1 from "../../assets/icon/scroll-icon1 (2).png";
import fileChooses from "../../assets/icon/file chooses img.png";


const BankDetialsSection = ({activeItemIndex,proceedForm}) => {
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
                    <span><img src={scrollicon5} alt="icon3" /></span>
                </div>
            </div>
            <div className="progress my-2" style={{ height: "10px" }}>
                <div className="progress-bar" role="progressbar" style={{ width: "65%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
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
                <p>Bank details</p>
                <div className='row py-2'>
                    <div className="col-6"><label htmlFor="">Enter bank name</label></div>
                    <div className="col-6"><input type="text" className='w-100 rounded input-bg py-1' /></div>
                </div>
                <div className='row py-2'>
                    <div className="col-6"><label htmlFor="">Account number</label></div>
                    <div className="col-6"><input type="number" className='w-100 rounded input-bg py-1' /></div>
                </div>
                <div className='row py-2'>
                    <div className="col-6"><label htmlFor="">IFSC code</label></div>
                    <div className="col-6"><input type="text" className='w-100 rounded input-bg py-1' /></div>
                </div>
                <div className='row py-2'>
                    <div className="col-6"><label htmlFor="">Beneficiary name</label></div>
                    <div className="col-6"><input type="text" className='w-100 rounded input-bg py-1' /></div>
                </div>
                <div className='row py-2'>
                    <div className="col-6"><label htmlFor="">PAN number</label></div>
                    <div className="col-6"><input type="text" className='w-100 rounded input-bg py-1' /></div>
                </div>
                <div className='row py-2'>
                    <div className="col-6"><label htmlFor="">GST number</label></div>
                    <div className="col-6"><input type="text" className='w-100 rounded input-bg py-1' /></div>
                </div>
            </div>
            <div className="upload-documents">
                <p className='pt-5'>Upload documents</p>
                <div className='row py-2 align-items-start'>
                    <div className="col-6"><label htmlFor="">Enter bank name</label></div>
                    <div className="col-6"><input type="text" className='w-100 rounded input-bg py-1' /></div>
                </div>
                <div className='row py-2 align-items-center'>
                    <div className="col-6"><label htmlFor="">Upload Canceled Cheque</label></div>
                    <div className="col-6">
                        <div className='bank-fileUpload-cnt'>
                            <div>
                                <label htmlFor="file-input" className="custom-file-label">
                                    <img src={fileChooses} alt="Upload Logo" />
                                    Choose File
                                </label>
                                <input type="file" id="file-input" />
                            </div>
                            <div className='devider-line'></div>
                            <div>
                                <p>Max file size: 2 MB</p>
                                <p>File type: doc, docx, pdf</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row py-2 align-items-center'>
                    <div className="col-6"><label htmlFor="">Upload Canceled Cheque</label></div>
                    <div className="col-6">
                        <div className='bank-fileUpload-cnt'>
                            <div>
                                <label htmlFor="file-input" className="custom-file-label">
                                    <img src={fileChooses} alt="Upload Logo" />
                                    Choose File
                                </label>
                                <input type="file" id="file-input" />
                            </div>
                            <div className='devider-line'></div>
                            <div>
                                <p>Max file size: 2 MB</p>
                                <p>File type: doc, docx, pdf</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row py-2 align-items-center'>
                    <div className="col-6"><label htmlFor="">Upload Canceled Cheque</label></div>
                    <div className="col-6">
                        <div className='bank-fileUpload-cnt'>
                            <div>
                                <label htmlFor="file-input" className="custom-file-label">
                                    <img src={fileChooses} alt="Upload Logo" />
                                    Choose File
                                </label>
                                <input type="file" id="file-input" />
                            </div>
                            <div className='devider-line'></div>
                            <div>
                                <p>Max file size: 2 MB</p>
                                <p>File type: doc, docx, pdf</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row py-2 align-items-center'>
                    <div className="col-6"><label htmlFor="">Upload Canceled Cheque</label></div>
                    <div className="col-6">
                        <div className='bank-fileUpload-cnt'>
                            <div>
                                <label htmlFor="file-input" className="custom-file-label">
                                    <img src={fileChooses} alt="Upload Logo" />
                                    Choose File
                                </label>
                                <input type="file" id="file-input" />
                            </div>
                            <div className='devider-line'></div>
                            <div>
                                <p>Max file size: 2 MB</p>
                                <p>File type: doc, docx, pdf</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row py-2 align-items-center'>
                    <div className="col-6"><label htmlFor="">Upload Udyam Certificate</label></div>
                    <div className="col-6">
                        <div className='bank-fileUpload-cnt'>
                            <div>
                                <label htmlFor="file-input" className="custom-file-label">
                                    <img src={fileChooses} alt="Upload Logo" />
                                    Choose File
                                </label>
                                <input type="file" id="file-input" />
                            </div>
                            <div className='devider-line'></div>
                            <div>
                                <p>Max file size: 2 MB</p>
                                <p>File type: doc, docx, pdf</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row py-2 align-items-start'>
                    <div className="col-6"><label htmlFor="">Enter Udyam Aadhar number</label></div>
                    <div className="col-6"><input type="text" className='w-100 rounded input-bg py-1' /></div>
                </div>
            </div>
            <div className='comp-details-btn-cnt'>
                <button className='Go-back-btn'>Go back</button>
                <button className='proceed-btn' onClick={()=>proceedForm(activeItemIndex)}>Submit<i className="bi bi-arrow-right"></i></button>
            </div>
        </div>
    )
}

export default BankDetialsSection;