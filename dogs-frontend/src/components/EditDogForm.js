import React, { Component } from 'react'
import { Link, useHistory } from 'react-router-dom'

class EditDogForm extends Component {

    constructor(props) {
        super(props)
    }

    render () {
        return (
            <>
                <h2>Edit Your Doggie</h2>
                <p>Note: You need to register or login to do this</p>
                <form onSubmit={this.props.updateDog} >
                <input
                    id='name'
                    type='text'
                    defaultValue={this.props.dogCurrentlyBeingEdited.name}
                    onChange={this.props.handleEditChange}
                    placeholder='name'
                >
                </input>
                <input
                    id='age'
                    type='text'
                    defaultValue={this.props.dogCurrentlyBeingEdited.age}
                    onChange={this.props.handleEditChange}
                    placeholder='age'
                >
                </input> 
                <input
                    id='breed'
                    type='text'
                    defaultValue={this.props.dogCurrentlyBeingEdited.breed}
                    onChange={this.props.handleEditChange}
                    placeholder='breed'
                >
                </input>
                {/* submit button */}
                <input
                    type='submit'
                    value='Update Dog'
                />
            </form>
            </>
        )
    }
}

export default EditDogForm