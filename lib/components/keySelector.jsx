import React from 'react';
import Keys from '../../keys';
const keySigs = Object.keys(Keys);

export default class KeySelector extends React.Component {
  get options() {
    return this.props.options.map((option, idx) => {
      return <option value={ option } key={ idx }>{ option }</option>;
    });
  }

  render() {
    return (
      <div className='key-selector'>
        <select onChange={ this.props.onChange }>
          { this.options }
        </select>
      </div>
    );
  }
}
