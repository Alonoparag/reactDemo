import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

class Navbar extends Component{
  // constructor(props){
  //   super(props);
  //   this.onNewrecipe = this.props.onNewRecipe
  // }

  static propTypes = {
    onNewRecipe: PropTypes.func
  }
  render(){
    const links = [{name: 'Home', link: '#'}, {name: 'About', link: '#'}, {name: 'Contact', link: '#'}, {name: 'Create Recipe', onClick:this.props.onNewRecipe, link: '#'}];
    return(
        <nav>
        <ul>
          <label>Navbar</label>
          {links.map((element, index)=>{
            return <li className = "nav-btn" key = {index}><a onClick = {element.onClick?element.onClick:undefined} href = {element.link}>{element.name}</a></li>
        })}
        </ul>
      </nav>
    )
  }
}

export default Navbar;
