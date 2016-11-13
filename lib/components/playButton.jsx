import React from 'react';
import Audio from '../../audio.js';

export default class PlayButton extends React.Component {

  play() {
    Audio.playChords(this.props.sequence);
  }
  
  render() {
    return(
      <button onClick={ this.play.bind(this) }>PLAY</button>
    );
  }
  
}
