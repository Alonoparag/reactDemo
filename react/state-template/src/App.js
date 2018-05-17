import React, {Component} from 'react';

import './App.css';

// const Button = () => {
//   return (<button>Save</button>);
// };

// class Form extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//     };
//   }
//   render() {
//     return (
//       <form onSubmit={(e)=>{
//         e.preventDefault();
//         console.log(this.props.owner);
//       }}>
//         <input type="text" name="newTask" placeholder="What needs to be done?" value={this.state.newTask} onChange={(e)=>{
//           this.setState({newTask: e.target.value});
//         }}
//         />
//         {Button()}
//       </form>
//   );
//   }
// }


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: ["Hurray I'm your first task"],
      newTask: ""
    };
    this.updateForm = this.updateForm.bind(this);
  }
  updateForm(e){
      console.log(this);
    }
  render() {
    const tasks = this.state.tasks.map((task, index) =>
      <li key ={index}>{task}</li>
    );
    return (
      <div className = "App">
        <h1>To Do App</h1>
        <form onSubmit={(e)=>{
          e.preventDefault();
          let tasks = this.state.tasks.slice();
          tasks.push(this.state.newTask);
          let newTask = "";
          this.setState({tasks, newTask});

        }}>
          <input type="text" name="newTask" placeholder="What needs to be done?" value={this.state.newTask} onChange={(e)=>{
            let newTask = JSON.parse(JSON.stringify(this.state));
            newTask.newTask = e.target.value;
            this.setState(newTask);
          }}
          />
          <button>Save</button>
        </form>
        <ol>
          {tasks}
        </ol>
      </div>
    );
  }
}

export default App;
