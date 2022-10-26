import React, { Component } from 'react'
import '../index.css'
import AddDogBtn from './AddDogBtn'
import DogList from './DogList'
import EditDogForm from './EditDogForm'

class DogContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            idOfDogToEdit: -1
        }
    }

    updateIdOfDogToEdit = (id) => {
        this.setState({ 
            idOfDogToEdit: id
        })
        console.log('updateIdOfDogToEdit is: ', this.state.idOfDogToEdit)
    }

    render() {
        if(this.state.idOfDogToEdit === -1) {
        return(
                <div>
                <AddDogBtn/>
                <h2 className="doggies-section">Doggies</h2>
                {this.props.dogs.map((dog, index) => {
                    return(
                        <DogList
                        key={index}
                        name={dog.name}
                        age={dog.age}
                        breed={dog.breed}
                        id={dog.id}  
                        handleEditDog = {this.props.handleEditDog}
                        editDog={this.props.editDog} 
                        dogToEdit={this.props.dogToEdit} 
                        handleDeleteDog = {this.props.handleDeleteDog}
                        updateIdOfDogToEdit = {this.updateIdOfDogToEdit}
                        />  
                    )
                })}
                </div>
        )} else {
            return(
                <EditDogForm />
            )
        }
    }
}

export default DogContainer