import React from 'react'
import { Link } from "react-router-dom"

const AddDogBtn = () => {
  return (
    <Link to='/new'>
        <div> 
            <p>Add a Dog</p>
        </div>
    </Link>
  )
}

export default AddDogBtn