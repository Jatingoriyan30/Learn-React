import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Mencontact from './components/Mencontact'
import Womancontact from './components/Womancontact'
import Course from './components/Course'
import Anycourse from './components/Anycourse'
import Detailcourse from './components/Detailcourse'
import Notfound from './components/Notfound'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/navbar' element={<Navbar/>}></Route>
      <Route path='/footer' element={<Footer/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/contact/mencontact' element={<Mencontact/>}></Route>
      <Route path='/contact/womancontact' element={<Womancontact/>}></Route>
      <Route path='/course' element={<Course/>}></Route>
      <Route path='/course/:id' element={<Anycourse/>}></Route>
      <Route path='/course/:id/detailcourse' element={<Detailcourse/>}></Route>
      <Route path='/*' element={<Notfound/>}></Route>
    </Routes>
    </div>
  )
}

export default App