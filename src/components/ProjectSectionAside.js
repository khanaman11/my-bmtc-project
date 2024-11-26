import React from 'react'
import ".././components/aside/Aside.css"
// import radioIcon from "../assets/icon/radio_button_checked.png"
import calender from "../assets/icon/Calendar-Icon.png"
import asideBtnIcon from "../assets/icon/aside-btn-icon.png"
import asideBtnCircle from "../assets/icon/aside circle.png"
import MyProjectNavbar from './MyProjectNavbar'
import NumiricalInformationBox from './NumiricalInformationBox'
import CreateProjectBtnSection from './CreateProjectBtnSection'
import TableSection from './TableSection'

const ProjectSectionAside = () => {
    return (
        <div className='row'>
            <div className="col-2 p-0">
                <div className='project-aside'>
                    <div className='pt-5 px-4 pb-2'>
                        <h2 className=''>BookMyTestCenter</h2>
                    </div>
                    <hr />
                    <div className='px-4 py-2'>
                        <p>GENERAL</p>
                        <ul>
                            <li><a href="#"><img src={calender} alt="radio" />Projects</a></li>
                            <li><a href="#"><img src={calender} alt="radio" />Calendar</a></li>
                        </ul>
                    </div>
                    <hr />
                    <div className='px-4 py-2'>
                        <p>SUPPORT</p>
                        <ul>
                            <li><a href="#"><img src={calender} alt="radio" />Settings</a></li>
                            <li><a href="#"><img src={calender} alt="radio" />Help & Support</a></li>
                        </ul>
                    </div>
                    <div className='aside-footer-cnt'>
                        <div className='aside-buttom-btn'>
                            <div className='aside-img-cnt'>
                                <img src={asideBtnIcon} alt="aside-btn" />
                            </div>
                            <div className='lttv-cnt'>
                                <h3 className='m-0'>LTTV Group</h3>
                                <p className='m-0'>msharma@lttv.com</p>
                            </div>
                            <div className='footer-circle-cnt'>
                                <img src={asideBtnCircle} alt="" />
                            </div>
                        </div>
                        <hr className='line-brake-bottom'/>
                        <p className=''>@2016 | Testpan India Private Limited</p>
                    </div>
                    
                    
                </div>
            </div>
            <div className="col-10">
                <MyProjectNavbar/>
                <hr />
                <NumiricalInformationBox/>
                <CreateProjectBtnSection/>
                <TableSection/>
            </div>
        </div>
    )
}

export default ProjectSectionAside