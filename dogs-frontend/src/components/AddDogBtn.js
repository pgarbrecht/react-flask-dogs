import React from 'react'
import { Link } from "react-router-dom"

const AddDogBtn = () => {
  return (
    <Link to='/new'>
        <button className='add-btn'> 
            Add a Dog
        </button>
    </Link>
  )
}

export default AddDogBtn