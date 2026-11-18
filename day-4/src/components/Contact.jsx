import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <Link to='/contact/mencontact'>Men Contact</Link>
      <Link to='/contact/womancontact'>Woman Contact</Link>
    </div>
  )
}

export default Contact