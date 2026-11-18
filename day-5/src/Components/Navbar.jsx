import React, { useContext } from 'react'
import { usercontext } from '../Context/Context'
const Navbar = () => {
   const data= useContext(usercontext)
  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}

export default Navbar
