import React, { Component } from 'react'
import '../index.css'

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
        fetch('http://localhost:8000/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
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
                    <h1>Log Into Your Account</h1>
                    <form onSubmit={this.handleSubmit}>
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
                            value='Log In'
                        />
                    </form>
                </div>
        )
    }
}

export default LoginForm