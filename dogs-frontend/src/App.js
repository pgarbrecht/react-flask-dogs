import './App.css';
import React, {Component} from 'react'
import DogContainer from './components/DogContainer'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

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

  render(){
  return (
    <>
    <h1>app page</h1>
    <Router>
        <Routes>
            <Route 
                path='/'
                element={<DogContainer
                
                />}
            />
        </Routes>
    </Router>
    </>
  )
}
}

export default App;
