import React from 'react'
import styles from "./style/Navbar.module.css"
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className={styles.Navbar}>
          <NavLink to='/'>home</NavLink>
            {/* <Link to='/'>Home</Link> */}
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/footer'>Footer</Link>
        </div>


    </div>
  )
}

export default Navbar