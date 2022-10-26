import React, { Component } from 'react'
import { Link, useHistory } from 'react-router-dom'

class EditDogForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // name: this.props.dogToEdit.name,
            // age: this.props.dogToEdit.age,
            // breed: this.props.dogToEdit.breed
        }
    }

    updateDog = () => {
        // this.state.name = this.props.dogs.name
        // this.state.age = this.props.dogs.age
        // this.state.breed = this.props.dogs.breed
    }

    handleChange = (e) => {
        this.setState({
                [e.target.id]: e.target.value
        })
        console.log(this.state)
    }
    
    componentDidMount() {
        this.updateDog()
    }

    render () {
        const dogId = window.location.search.slice(4);
        console.log(dogId)
        return (
            <>
                <h2>Edit Your Doggie</h2>
                <form onSubmit={this.props.handleEditDog} >
                <input
                    id='name'
                    type='text'
                    // defaultValue={this.state.name}
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