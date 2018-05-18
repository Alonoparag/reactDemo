import React, {Component} from 'react';
import PropTypes from 'proptypes';
import './Navbar.css';

class Navbar extends Component{
  static defaultProps={
    links : [{name: 'Home', link: '#'}, {name: 'About', link: '#'}, {name: 'Contact', link: '#'}, {name: 'Create Recipe', onClick:{this.props.onNewReecipe}, link: '#'}],
    onNewRecipe(){}
  }

  static propTypes = {
    onNewRecipe: PropTypes.func
  }
  render(){
    return(
        <nav>
        <ul>
          <label>Navbar</label>
          {this.props.links.map((element, index)=>(
            <li className = "nav-btn" key = {index}><a onClick = {element.onClick? element.onClick:undefined} href = {element.link}>{element.name}</a></li>
        ))}
        </ul>
      </nav>
    )
  }
}

export default Navbar;
