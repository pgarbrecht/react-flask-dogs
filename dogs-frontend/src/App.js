import './App.css';
import React, {Component} from 'react'
import DogContainer from './components/DogContainer'
import DogNewForm from './components/DogNewForm'
import EditDog from './components/EditDog'
import RegisterForm from './components/RegisterForm'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// Define baseURL
let baseURL = 'http://localhost:8000/api/v1/dogs/'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [{
        name: "",
        age: 0,
        breed: ""
      }],
      baseURL: 'http://localhost:8000/api/v1/dogs/'
    }
  }

  getDogs = () => {
    fetch(baseURL)
    .then((res) => {
        if (res.status === 200) {
            return res.json();
        } else {
            return [];
        }
    })
    .then((data) => {    
        // console.log('here is the data we grab: ');
        // console.log(data);
        this.setState({
            // grabbing data from db and updating state when components mount
            dogs: data.data
        })        
    });
  }

  handleDeleteDog = (id) => {
    fetch(`${baseURL}${id}`, {
    method: 'DELETE'
    }).then(
      window.location.href='http://localhost:3000/')
  }

  editDog = (id) => {
    console.log('editDog is: ',id)
  }

  //runs when component mounts
  componentDidMount() {
  this.getDogs();
  }

  render(){
  return (
    <>
    <h1>React + Flask Dogs App</h1>
    
    <Router>
        <Routes>
            <Route 
                path='/'
                element={<DogContainer
                  dogs={this.state.dogs} 
                  editDog={this.editDog}
                  dogToEdit={this.state.dogToEdit} 
                  handleDeleteDog={this.handleDeleteDog}
                  baseURL={this.state.baseURL} />}
            />
            <Route 
                path='/new'
                element={<DogNewForm />}
            />
            <Route 
                path='/edit'
                element={<EditDog 
                  dogs={this.state.dogs} 
                  dogToEdit={this.state.dogToEdit} 
                  handleEditDog={this.handleEditDog} />}
            />
            <Route 
                path='/register'
                element={<RegisterForm />}
            />
        </Routes>
    </Router>
    </>
  )
}
}

export default App;
