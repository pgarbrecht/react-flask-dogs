import React, { Component } from 'react'
import { Link } from "react-router-dom"

class LoginBtn extends Component {
    constructor(props) {
        super(props)
    }
    
    render () {
        return (
            <Link to='/login'>
                <button>
                    Log In
                </button>
            </Link>
        )
    }
}

export default LoginBtn