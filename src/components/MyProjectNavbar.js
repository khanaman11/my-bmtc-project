import React from 'react'
import notification from "../assets/icon/notifications.png"
import equalToIcon from "../assets/icon/equal-to-icon.png"
const MyProjectNavbar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className='notification-navbar'>
                    <h2 className='m-0 fs-4'>My Project</h2>
                    <div>
                        <button><img src={notification} alt="" className='me-2' />Notification <span className='ms-2'>11</span></button>
                        <button className='create-project-btn'><i className="bi bi-plus"></i>Create Project</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProjectNavbar
