import React from 'react'

const Indicator = ({activeItemIndex}) => {
  return (
    <ul className='indicatorCnt'>
        <li className={`indicatorItem ${activeItemIndex===0? "active":""}`}></li>
        <li className={`indicatorItem ${activeItemIndex===1? "active":""}`}></li>
        <li className={`indicatorItem ${activeItemIndex===2? "active":""}`}></li>
        <li className={`indicatorItem ${activeItemIndex===3? "active":""}`}></li>
        <li className={`indicatorItem ${activeItemIndex===4? "active":""}`}></li>
    </ul>
  )
}

export default Indicator