import React, { Component } from 'react'
import { Link, useHistory } from 'react-router-dom'

class EditDogForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // name: this.props.exerciseToEdit.name,
            // age: this.props.exerciseToEdit.description,
            // breed: this.props.exerciseToEdit.exerciseImage
        }
    }

    handleChange = (e) => {
        this.setState({
                [e.target.id]: e.target.value
            })
        }

    // handleEditDog = (e) => {
    //     e.preventDefault()
    //     fetch(`${process.env.REACT_APP_BACKEND_URL}/${this.props.exerciseToEdit.id}`, {
    //         method: 'PUT',
    //         body: JSON.stringify({
    //             name: this.state.name,
    //             age: this.state.age,
    //             breed: this.state.breed
    //         }),
    //         headers: {
    //             'Content-Type' : 'application/json'
    //         }
    //     })
    //     .then(res => {
    //         if (res.ok) {
    //             return res.json()
    //         } throw new Error(res)
    //     })
    //     .then(resJson => {
    //         window.location.href='http://localhost:3000/';
    //     })
    //     .catch(err => (console.log(err))) 
    // }

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