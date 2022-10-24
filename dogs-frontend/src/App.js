import './App.css';
import React, {Component} from 'react'
import DogContainer from './components/DogContainer'

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
      }]
    }
  }

  getDogs = () => {
    console.log('getDogs function reached');
    console.log("here is baseURL", baseURL);
    fetch(baseURL)
    .then((res) => {
        if (res.status === 200) {
            return res.json();
            console.log('res status was 200');
        } else {
            return [];
            console.log('res status was not 200')
        }
    })
    .then((data) => {    
        console.log('here is the data we grab: ');
        console.log(data);
        this.setState({
            // grabbing data from db and updating state when components mount
            dogs: data
        })        
    });
}

  //runs when component mounts
  componentDidMount() {
  this.getDogs();
  console.log('app component mounted');
  console.log('here is state after mount: ', this.state)
  }

  render(){
  return (
    <>
    <h1>app page</h1>
    <Router>
        <Routes>
            <Route 
                path='/'
                element={<DogContainer
                  dogs={this.state.dogs} 
                />}
            />
        </Routes>
    </Router>
    </>
  )
}
}

export default App;
