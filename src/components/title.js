import React, {Component} from 'react';
import logo from '../media/title.PNG';

export default class Title extends Component{
  render(){
    return (
      <span id="title">
        <div><img src={logo} alt="Title"/></div>
      </span>
    )
  }
}
