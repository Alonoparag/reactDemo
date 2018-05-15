import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component{
  static defaultProps={
    links : [{name: 'Home', link: '#'}, {name: 'About', link: '#'}, {name: 'Contact', link: '#'}, {name: 'Create Recipe',link: '#'}]
  }
  render(){
    return(
        <nav>
        <ul>
          <label>Navbar</label>
          {this.props.links.map((element, index)=>(
            <li className = "nav-btn" key = {index}><a href = {element.link}>{element.name}</a></li>
        ))}
        </ul>
      </nav>
    )
  }
}

export default Navbar;
