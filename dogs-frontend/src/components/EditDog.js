import React, { Component } from 'react'
import BackBtn from './BackBtn'
import EditDogForm from './EditDogForm'

class EditDog extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div>
                <BackBtn />

                <h1>
                    Edit the Dog
                </h1>
                <EditDogForm 
                    />
            </div>
        )
    }
}

export default EditDog