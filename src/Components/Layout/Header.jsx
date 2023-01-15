import React from 'react'
import logo from '../../images/react.png'

function Header() {
  return (
    <div className='py-3 pl-2' style={{borderBottom: "1px solid #777"}}>
          <img src={logo} alt="" style={{ height: "35px", verticalAlign: "top", marginRight: "15px"}} />
          <span className='h2 pt-2 text-white-50'>React Course - Contactopedia</span>
    </div>
  )
}

export default Header