import React from 'react'
import "../components/aside/Aside.css"
import tableOption from "../assets/icon/aside circle.png"
import tableRadioBtn from "../assets/icon/tableCircle.png"
import nextArrowIcon from "../assets/icon/next-icon.png"
import preArrowIcon from "../assets/icon/pre-arrow-icon.png"

function TableSection() {
    return (
        <div className="container">
            <div className="row pb-5">
                <div className="">
                    <table class="table" border="1">
                        <thead>
                            <tr>
                                <th scope="col"><input type="checkbox" className='me-2' />Project name</th>
                                <th scope="col">Creation date</th>
                                <th scope="col">Seats</th>
                                <th scope="col">Exam date</th>
                                <th scope="col">City</th>
                                <th scope="col">Centers</th>
                                <th scope="col">Project status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"><a href="#"><input type="checkbox" className='me-2' />IIM Entrance</a></th>
                                <td>Oct 14,2024</td>
                                <td>12000</td>
                                <td>Nov 11-14th</td>
                                <td>Delhi</td>
                                <td>92</td>
                                <td>
                                    <a href="#" className='panding-btn'><img src={tableRadioBtn} alt="table-Icon" />Panding</a>
                                </td>
                                <td><img src={tableOption} alt="" /></td>
                            </tr>
                            <tr>
                                <th scope="row"><a href="#"><input type="checkbox" className='me-2' />IIM Entrance</a></th>
                                <td>Oct 14,2024</td>
                                <td>12000</td>
                                <td>Nov 11-14th</td>
                                <td>Delhi</td>
                                <td>92</td>
                                <td>
                                    <a href="#" className='panding-btn'><img src={tableRadioBtn} alt="table-Icon" />Panding</a>
                                </td>
                                <td><img src={tableOption} alt="" /></td>
                            </tr>
                            <tr>
                                <th scope="row"><a href="#"><input type="checkbox" className='me-2' />IIM Entrance</a></th>
                                <td>Oct 14,2024</td>
                                <td>12000</td>
                                <td>Nov 11-14th</td>
                                <td>Delhi</td>
                                <td>92</td>
                                <td>
                                    <a href="#" className='compelet-btn'><img src={tableRadioBtn} alt="table-Icon" />Completed</a>
                                </td>
                                <td><img src={tableOption} alt="" /></td>
                            </tr>
                            <tr>
                                <th scope="row"><a href="#"><input type="checkbox" className='me-2' />IIM Entrance</a></th>
                                <td>Oct 14,2024</td>
                                <td>12000</td>
                                <td>Nov 11-14th</td>
                                <td>Delhi</td>
                                <td>92</td>
                                <td>
                                    <a href="#" className='compelet-btn'><img src={tableRadioBtn} alt="table-Icon" />Completed</a>
                                </td>
                                <td><img src={tableOption} alt="" /></td>
                            </tr>
                            <tr>
                                <th scope="row"><a href="#"><input type="checkbox" className='me-2' />IIM Entrance</a></th>
                                <td>Oct 14,2024</td>
                                <td>12000</td>
                                <td>Nov 11-14th</td>
                                <td>Delhi</td>
                                <td>92</td>
                                <td>
                                    <a href="#" className='panding-btn'><img src={tableRadioBtn} alt="table-Icon" />Panding</a>
                                </td>
                                <td><img src={tableOption} alt="" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='table-footer-btn-cnt'>
                    <div className='pre-arrow-btn-cnt'>
                        <button><img src={preArrowIcon} alt="pre-arrow" />Previous</button>
                    </div>
                    <div className='no-of-page-btn'>
                        <button>Page 1 of 3</button>
                    </div>
                    <div className='next-arrow-btn-cnt'>
                        <button >Next<img src={nextArrowIcon} alt="next-icon" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableSection