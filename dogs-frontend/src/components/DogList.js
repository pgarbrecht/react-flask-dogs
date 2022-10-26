import React, { Component } from 'react'
import '../index.css'

class DogList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="dog">
            <h3>{this.props.name}</h3>
            <h4>{this.props.age} years old</h4>
            <h5>{this.props.breed}</h5>
            <button onClick={()=> {
                this.props.editDog(this.props.id);
                this.props.updateIdOfDogToEdit(this.props.id);
                // window.location.href=`http://localhost:3000/edit?id=${this.props.id}`
                }}
            >                
                Edit
            </button>
            <button onClick={()=> {
                this.props.handleDeleteDog(this.props.id);
                }}
            >                
                Delete
            </button>
            </div>
        )
    }
}

export default DogList