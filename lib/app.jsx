import React from 'react';
import KeySelector from './components/keySelector';
import Keys from '../keys';
const keySigs = Object.keys(Keys);


export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>HI!!!</h1>
        <KeySelector options={ keySigs } />
      </div>
    );
  }
}
