import React from 'react'
import { useParams } from 'react-router-dom'
const Anycourse = () => {
    const params=useParams()
    // console.log(params.id)
  return (
    <div>
      <h1>{params.id} course</h1>
    </div>
  )
}

export default Anycourse
