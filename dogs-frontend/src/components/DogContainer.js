import React, { Component } from 'react'
import '../index.css'
import AddDogBtn from './AddDogBtn'
import EditBtn from './EditBtn';
import DogList from './DogList'

class DogContainer extends Component {
    render() {
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
                        dogToEdit={this.props.dogToEdit} 
                        handleDeleteDog = {this.props.handleDeleteDog}
                        />  
                    )
                })}
                </div>
        )
    }
}

export default DogContainer