import React from 'react'
import { useState } from 'react'

const App = () => {
  const [title, settitle] = useState("")
  const [showtitle, setshowtitle] = useState("")
   function greet(e){
    e.preventDefault()
    setshowtitle(title)
    
   
   }
  return (
    <div>
      <form onSubmit={()=>{greet(e)}}>
        <input type="text" placeholder='enter a number' value={title} onChange={(e)=>{settitle(e.target.value)}} />
        <button onClick={greet}>submit</button>
      </form>
      <h1>{showtitle}</h1>
      
    </div>
  )
}


export default App