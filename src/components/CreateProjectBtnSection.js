import React from 'react'

const CreateProjectBtnSection = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-8 py-4">
                    <div className='project-create-cnt'>
                        <ul>
                            <li><a href="#">All <span>38</span></a></li>
                            <li><a href="#">Pending</a></li>
                            <li><a href="#">Completed</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-4 py-4 projectCreate-btn-cnt">
                    <button className=''><i className="bi bi-plus"></i>Create Project</button>
                </div>
            </div>
        </div>
    )
}

export default CreateProjectBtnSection