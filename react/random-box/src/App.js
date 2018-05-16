import React, { Component } from 'react';
import './App.css';

const Box = ({color}) =>{
  let style = {
    height: '100px',
    width: '100px',
    borderRadius: '20px',
    display: 'inline-block',
    margin: '2px',
    backgroundColor: color
  };
  return <div style = {style}/>;
};

const BOXES_NUM = 32;

class App extends Component {
  //32 boxes
  //1 property

  constructor(props) {
    super(props);
    const boxes= Array(BOXES_NUM).fill().map(this.getRandomdColor, this);
    this.state = {boxes};

    // setTimeout(()=>{
    //   console.log(boxes);
    // }, 100);
    setInterval(()=>{
      const boxes = this.state.boxes.slice();
      let randomSelector = Math.floor(Math.random()*boxes.length);
      boxes[randomSelector] = this.getRandomdColor();
      this.setState({boxes});
    },100)
  }
  getRandomdColor(){
    let colorIndex = Math.floor(Math.random()*this.props.allColors.length);
    return this.props.allColors[colorIndex];
  }

  render() {
      const boxes = this.state.boxes.map((color, index) => <Box key = {index} color = {color}/>);
    return (
      <div className="App">
          {boxes}
      </div>
    );
  }
}

App.defaultProps = {
  allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
              "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
              "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
              "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
              "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
              "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
              "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
              "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
              "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
              "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
              "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
              "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
              "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
              "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
              "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
              "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
              "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
              "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
              "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
              "Yellow","YellowGreen"]
};

export default App;
