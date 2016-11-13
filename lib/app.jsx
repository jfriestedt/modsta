import React from 'react';
import KeySelector from './components/keySelector';
import PlayButton from './components/playButton';
import Keys from '../keys';
import ChordIndex from './components/chord_index';
import { last } from 'lodash';
const keySigs = Object.keys(Keys);


export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      sequence: []
    };
  }

  get lastChord() {
    return last(this.state.sequence, 1);
  }

  onChange(value) {

  }

  get sequence() {
    return this.state.sequence;
  }

  render() {
    return (
      <div id='app'>
        <KeySelector options={ keySigs } onChange={ this.onChange }/>
        <PlayButton sequence={this.state.sequence} />
        <ChordIndex sequence={this.sequence} clickChord={this.onChange} />
      </div>
    );
  }
}
