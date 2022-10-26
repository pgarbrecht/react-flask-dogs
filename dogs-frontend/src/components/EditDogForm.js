import React, { Component } from 'react'
import { Link, useHistory } from 'react-router-dom'

class EditDogForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: this.props.dogToEdit.name,
            age: this.props.dogToEdit.age,
            breed: this.props.dogToEdit.breed
        }
    }

    handleChange = (e) => {
        this.setState({
                [e.target.id]: e.target.value
            })
        }

    render () {
        return (
            <>
                <form onSubmit={this.handleEditDog} >
                <input
                    id='name'
                    type='text'
                    // defaultValue={this.props.dogToEdit.name}
                    onChange={this.handleChange}
                    placeholder='name'
                >
                </input>
                <input
                    id='age'
                    type='text'
                    // defaultValue={this.props.dogToEdit.age}
                    onChange={this.handleChange}
                    placeholder='age'
                >
                </input> 
                <input
                    id='breed'
                    type='text'
                    // defaultValue={this.props.dogToEdit.breed}
                    onChange={this.handleChange}
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