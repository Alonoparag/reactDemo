import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };
    function rndNum(length){
      return Math.floor(Math.random()*length)
    }
    setTimeout(()=>{
      //select a random instructors
      let instructorKey = rndNum(this.state.instructors.length);
      let instructor = this.state.instructors[instructorKey];
      //see if the hobby arrray is not empty
      while(instructor.hobbies.length <= 0){
        instructorKey = rndNum(this.state.instructors.length);
        instructor = this.state.instructors[instructorKey];
      }
      let hobbyKey = rndNum(instructor.hobbies.length)
      //create a local copy of instructors array and splice that hobby
      let withoutHobby = JSON.parse(JSON.stringify(this.state));
      withoutHobby.instructors[instructorKey].hobbies.splice(hobbyKey, 1);
      this.setState({withoutHobby})
    }, 5000)
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (<li key={index}>
      <h3>{instructor.name}</h3>
      <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
    </li>));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
