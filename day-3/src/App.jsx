
import axios from 'axios'
import React from 'react'
import { useState } from 'react'



const App = () => {
  const [data, setdata] = useState([])
  const getdata= async()=>{
    let responce=await axios.get("https://picsum.photos/v2/list?page=2&limit=30")
    console.log(responce.data)
    setdata(responce.data)
  }
  return (
    <>
      <button onClick={getdata}>click me</button>
     
      
    </>
  )
}

export default App
