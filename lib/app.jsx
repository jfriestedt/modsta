import React from 'react';
import KeySelector from './components/keySelector';
import PlayButton from './components/playButton';
import Keys from '../keys';
import ChordIndex from './components/chord_index';
import { Chord } from '../chord.js';
import { last, find } from 'lodash';
const keySigs = Object.keys(Keys);

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      sequence: [],
      currentChildren: []
    };
  }

  get lastChord() {
    return last(this.state.sequence, 1);
  }

  onChange(value) {
    // chordName, index, parentChord, numeral, quality, key, callbacks
    let chord;

    if (!this.sequence.length) {
      const parentChord = this.lastChord || null;

      chord = new Chord(value, 0, parentChord, 1, 'major', value, null);
    } else {
      chord = find(this.currentChildren, (ch) => {
        return ch.chordName == value;
      });
    }

    this.setState({
      sequence: this.state.sequence.concat(chord),
      currentChildren: chord.generateChildren()
    });
  }

  get sequence() {
    return this.state.sequence;
  }

  get currentChildren() {
    return this.state.currentChildren;
  }

  get options() {
    if (!this.sequence.length) {
      return keySigs;
    } else {
      return this.currentChildren.map((child) => (
        child.chordName
      ));
    }
  }

  get newKeySelectors() {
    return (
      this.sequence.map((seq) => { <KeySelector options={ this.newOptions } />; })
    );
  }

  get newOptions() {
    return this.state.currentChildren.map((child) => (child.chordName));
  }

  render() {
    return (
      <div id='app'>
        <KeySelector options={ this.options } onChange={ this.onChange.bind(this) }/>
        <PlayButton sequence={this.state.sequence} />
        <ChordIndex sequence={this.sequence} clickChord={this.onChange} />
      </div>
    );
  }
}
