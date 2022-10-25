import React from 'react'
import { Link } from "react-router-dom"

const BackBtn = () => {
  return (
    <Link to='/'>
        <div> 
            <p>Back to Home</p>
        </div>
    </Link>
  )
}

export default BackBtn