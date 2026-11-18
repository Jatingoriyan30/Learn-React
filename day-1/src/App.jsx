import React from 'react'
import Navbar from './components/Navbar'
import "./index.css"
import Card from './components/Card'

const App = () => {
  return (
   <>
   <Navbar/>
   <div className="card">
   <Card title="card 1" description="my page"/>
   <Card title="card 2" description="my page"/>
   <Card title="card 3" description="my page"/>
   <Card title="card 4" description="my page"/>
   
   </div>
   </>
  )
}

export default App


