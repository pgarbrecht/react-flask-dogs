import React, { Component } from 'react'
import '../index.css'
import AddDogBtn from './AddDogBtn'
import RegisterBtn from './RegisterBtn'
import LoginBtn from './LoginBtn'
import DogList from './DogList'
import EditDogForm from './EditDogForm'

class DogContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            idOfDogToEdit: -1,
            dogCurrentlyBeingEdited: null
        }
    }

    editDog = (id) => {
        // console.log('editDog is: ',id)

        let dogToEdit = this.props.dogs.find(dog => dog.id === id)

        this.setState({ 
            dogCurrentlyBeingEdited: dogToEdit
        })
        console.log('dogCurrentlyBeingEdited is: ',this.state.dogCurrentlyBeingEdited)
      }

    updateIdOfDogToEdit = (id) => {
        this.setState({ 
            idOfDogToEdit: id
        })
        console.log('updateIdOfDogToEdit is: ', this.state.idOfDogToEdit)
    }

    handleEditChange = (e) => {
        this.setState({
            dogCurrentlyBeingEdited: {
                ...this.state.dogCurrentlyBeingEdited,
                [e.target.id]: e.target.value
            }
        })
    }

    updateDog = () => {
        fetch(`${this.props.baseURL}${this.state.idOfDogToEdit}`, {
            method: 'PUT',
            credentials: "include", //believe we need this to tell backend PUT request allowed because user is logged in
            body: JSON.stringify({
                name: this.state.dogCurrentlyBeingEdited.name,
                age: this.state.dogCurrentlyBeingEdited.age,
                breed: this.state.dogCurrentlyBeingEdited.breed
            }),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            } throw new Error(res)
        })
        .then(resJson => {
            window.location.href='http://localhost:3000/';
        })
        .catch(err => (console.log(err))) 
    }

    render() {
        if(this.state.idOfDogToEdit === -1) {
        return(
                <div>
                <RegisterBtn/>
                <LoginBtn/>
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
                        editDog={this.editDog} 
                        dogToEdit={this.props.dogToEdit} 
                        handleDeleteDog = {this.props.handleDeleteDog}
                        updateIdOfDogToEdit = {this.updateIdOfDogToEdit}
                        />  
                    )
                })}
                </div>
        )} else {
            return(
                <EditDogForm
                idOfDogToEdit = {this.state.idOfDogToEdit}
                dogCurrentlyBeingEdited = {this.state.dogCurrentlyBeingEdited}
                handleEditChange = {this.handleEditChange}
                updateDog = {this.updateDog}
                />
            )
        }
    }
}

export default DogContainer