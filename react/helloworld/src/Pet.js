import React, {Component} from 'react';

class Pet extends Component {
  render() {
    return (<div className="card">
      <h2 className="name">Moxy</h2>
      <img className="card" src="https://i.pinimg.com/originals/7b/43/88/7b438882091567aff3b105eccd762518.jpg" alt="Moxy"/>
      <h5 style={{
          fontSize: '2em',
          margin: '2px'
        }}>Hobbies:</h5>
      <HobbyList/>
    </div>)
  }
}

export default Pet;
