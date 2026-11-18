import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
      <div className="container">
        <div>
          <p>Home</p>
        </div>
        <div>
          <ul className='list'>
            <li>Accessories</li>
            <li>Support</li>
            <li>Contact us</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
