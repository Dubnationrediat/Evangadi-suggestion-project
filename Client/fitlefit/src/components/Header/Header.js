import React from 'react'
import './Header.css'
import logo from '../../Images/evangadi-logo-home.png'
function Header() {
  return (
    <div className='header container-fluid'>
        <div className='innerContainer container d-flex justify-content-around '>
            <div className='header__image'>
                <img src={logo} alt="Evangadi logo" />
            </div>
            <button className='ic d-sm-block d-md-none'>
               ☰
            </button>
            <div className='d-flex  innerContainer2 justify-content-between d-none d-md-block'>
              <a href="/">Home</a>
              <a href="/">Home It Works</a>
              <button className='btn_header'>LogIn/LogOut</button>
            </div>
        </div>
    </div>
  )
}

export default Header