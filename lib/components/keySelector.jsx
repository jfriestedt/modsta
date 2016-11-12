import React from 'react';
import Keys from '../../keys';
const keySigs = Object.keys(Keys);

export default class KeySelector extends React.Component {
  get options() {
    return this.props.options.map((option) => {
      return <option value={ option }>{ option }</option>;
    });
  }

  render() {
    return (
      <div className='key-selector'>
        <select>
          { this.options }
        </select>
      </div>
    );
  }
}
