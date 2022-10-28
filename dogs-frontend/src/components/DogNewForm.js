import React, { Component } from 'react'
import '../index.css'
import BackBtn from './BackBtn'

class DogNewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: 0,
            breed: ''
        }
    }

    // handleChange method
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    // handleSubmit method
    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:8000/api/v1/dogs/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                age: this.state.age,
                breed: this.state.breed
            }),
        })

        // if we can fetch the data from this route, then proceed
        .then (res => { 
            if(res.ok) {
                return res.json()
            }
            throw new Error(res)
        })

        .then (resJson => {
            this.setState({
                name: '',
                age: 0,
                breed: ''
            }) 
            window.location.href='http://localhost:3000/'
        })
        .catch(err => (console.log(err)))
    }

    render() {
        return(
                <div className="newform">
                    <BackBtn/>
                    <h1>Add a Dog</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            id='name'
                            type='text'
                            value={this.state.name}
                            onChange={this.handleChange}
                            placeholder='Dog Name'>
                        </input>
                        <input
                            id='age'
                            type='number'
                            value={this.state.age}
                            onChange={this.handleChange}
                            placeholder='Dog Age'>
                        </input>
                        <input
                            id='breed'
                            type='text'
                            value={this.state.breed}
                            onChange={this.handleChange}
                            placeholder='Dog breed'>
                        </input>
                        <input 
                            type='submit'
                            value='Add New Dog'
                        />
                    </form>
                </div>
        )
    }
}

export default DogNewForm