import React, {Component} from 'react';


export default class NavBar extends Component {

  render(){
    return (
      <span id="navMain">
        <div><a href="/#" value="home">Home</a></div>
        <div><a href="#blurbContainer" value="about">About</a></div>
        <div><a href="#contactInfo" value="contactInfo">Contact</a></div>
      </span>
    )
  }
}
