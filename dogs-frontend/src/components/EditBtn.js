import React, { Component } from 'react'
import { Link } from "react-router-dom"

class EditBtn extends Component {
    constructor(props) {
        super(props)
    }
    
    render () {
        return (
            <Link to={`/edit?id=${this.props.id}`}>
                <button>
                    Edit
                </button>
            </Link>
        )
    }
}

export default EditBtn