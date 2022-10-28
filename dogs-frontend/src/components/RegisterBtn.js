import React, { Component } from 'react'
import { Link } from "react-router-dom"

class RegisterBtn extends Component {
    constructor(props) {
        super(props)
    }
    
    render () {
        return (
            <Link to='/register'>
                <button>
                    Register
                </button>
            </Link>
        )
    }
}

export default RegisterBtn