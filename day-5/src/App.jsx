import React from 'react'
import { usercontext } from './Context/Context'
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'

const App = () => {
  const data="hello everyone"
  return (
  <usercontext.Provider value={data}>
    <Navbar></Navbar>
    <Profile></Profile>
  </usercontext.Provider>
  )
}

export default App
