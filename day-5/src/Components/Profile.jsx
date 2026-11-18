import React, { use, useContext } from 'react'
import { usercontext } from '../Context/Context'

const Profile = () => {
  const userdata= useContext(usercontext)
  return (
    <div>
     <h1>{userdata}</h1> 
    </div>
  )
}

export default Profile
