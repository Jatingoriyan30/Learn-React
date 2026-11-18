import React from 'react'
import "./Card.css"
const Card = (props) => {
    function greet(){
        props.sendData("heelo")
    }
  return (
    <>
     <button onClick={greet}>click me</button>
    </>
  )
}

export default Card
