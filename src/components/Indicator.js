import React from 'react'

const Indicator = ({activeItemIndex}) => {
  return (
    <div className='indicatorCnt d-none'>
      <ul className='indicatorWrapper '>
          <li className={`indicatorItem ${activeItemIndex===0? "active":""}`}></li>
          <li className={`indicatorItem ${activeItemIndex===1? "active":""}`}></li>
          <li className={`indicatorItem ${activeItemIndex===2? "active":""}`}></li>
          <li className={`indicatorItem ${activeItemIndex===3? "active":""}`}></li>
          <li className={`indicatorItem ${activeItemIndex===4? "active":""}`}></li>
      </ul>
    </div>
  )
}

export default Indicator