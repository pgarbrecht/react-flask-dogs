import React, { Component } from 'react'
import '../index.css'

class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    // handleChange method
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state)
    }

    // handleSubmit method
    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:8000/api/v1/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
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
                username: '',
                email: '',
                password: ''
            }) 
            window.location.href='http://localhost:3000/'
        })
        .catch(err => (console.log(err)))
    }

    render() {
        return(
                <div className="newform">
                    <h1>Register an Account</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            id='username'
                            type='text'
                            value={this.state.username}
                            onChange={this.handleChange}
                            placeholder='Username'>
                        </input>
                        <input
                            id='email'
                            type='text'
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder='Email'>
                        </input>
                        <input
                            id='password'
                            type='text'
                            value={this.state.password}
                            onChange={this.handleChange}
                            placeholder='Passsword'>
                        </input>
                        <input 
                            type='submit'
                            value='Register'
                        />
                    </form>
                </div>
        )
    }
}

export default RegisterForm