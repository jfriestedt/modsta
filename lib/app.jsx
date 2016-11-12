import React from 'react';
import KeySelector from './components/keySelector';
import Keys from '../keys';
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
    return <div>{ this.state.sequence }</div>;
  }

  render() {
    return (
      <div id='app'>
        <h1>HI!!!</h1>
        <KeySelector options={ keySigs } onChange={ this.onChange }/>
        { this.sequence }
      </div>
    );
  }
}
