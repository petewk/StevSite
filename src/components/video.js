import React, {Component} from 'react';
import sample from '../media/sample-compressed.m4v';

export default class Video extends Component {

  render() {
    return(
      <div>
        <video controls loop preload="auto"><source  src={sample}  type="video/mp4"/></video>
      </div>
    )
  }
}
