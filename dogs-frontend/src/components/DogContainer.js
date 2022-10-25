import React, { Component } from 'react'
import '../index.css'
import DogList from './DogList'

class DogContainer extends Component {
    render() {
        return(
                <div>
                <h2 className="doggies-section">Doggies</h2>
                {this.props.dogs.map((dog, index) => {
                    return(
                        <DogList
                        key={index}
                        name={dog.name}
                        age={dog.age}
                        breed={dog.breed}  
                        />  
                    )
                })}
                </div>
        )
    }
}

export default DogContainer