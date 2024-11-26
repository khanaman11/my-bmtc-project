import React from 'react'
import totalProject from "../assets/icon/total-project-icon.png"
import assessedCondidates from "../assets/icon/assessed condidates.png"
import citiesIcon from "../assets/icon/cities icon.png"

const NumiricalInformationBox = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-4 ">
                <div className='d-flex numerical-box1'>
                    <div className='numerical-img-cnt'>
                        <img src={totalProject} alt="total-project" />
                    </div>
                    <div className='Numerical-text-cnt'>
                        <p>Total Projects</p>
                        <h2>138 <span><i class="bi bi-arrow-up-short"></i>13%</span></h2>
                    </div>
                    <div className='numerical-opption-btn'>
                        <select>
                            <option value="">1y</option>
                            <option value="">2y</option>
                            <option value="">3y</option>
                            <option value="">4y</option>
                            <option value="">5y</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-4 ">
                <div className='d-flex numerical-box1'>
                    <div className='numerical-img-cnt'>
                        <img src={assessedCondidates} alt="assessed-condidates" />
                    </div>
                    <div className='Numerical-text-cnt'>
                        <p>Assessed Condidates</p>
                        <h2>689k <span><i class="bi bi-arrow-up-short"></i>21%</span></h2>
                    </div>
                    <div className='numerical-opption-btn'>
                        <select>
                            <option value="">1y</option>
                            <option value="">2y</option>
                            <option value="">3y</option>
                            <option value="">4y</option>
                            <option value="">5y</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-4 ">
                <div className='d-flex numerical-box1'>
                    <div className='numerical-img-cnt'>
                        <img src={citiesIcon} alt="total-project" />
                    </div>
                    <div className='Numerical-text-cnt'>
                        <p>Cities Covered</p>
                        <h2>34 <span><i class="bi bi-arrow-up-short"></i>19%</span></h2>
                    </div>
                    <div className='numerical-opption-btn'>
                        <select>
                            <option value="">1y</option>
                            <option value="">2y</option>
                            <option value="">3y</option>
                            <option value="">4y</option>
                            <option value="">5y</option>
                        </select>
                    </div>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default NumiricalInformationBox