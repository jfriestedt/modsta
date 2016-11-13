import React from 'react';
import Keys from '../../keys';
const keySigs = Object.keys(Keys);

export default class KeySelector extends React.Component {
  constructor() {
    super();

    this.state = {
      selected: null
    };
  }

  get options() {
    return this.props.options.map((option, idx) => {
      return <option value={ option } key={ idx }>{ option }</option>;
    });
  }

  onChange(e) {
    const value = e.target.value;
    this.props.onChange(value);

    this.setState({
      selected: value,
      value: value
    });
  }

  render() {
    return (
      <div className='key-selector'>
        <select onChange={ this.onChange.bind(this) }>
          { this.options }
        </select>
      </div>
    );
  }
}
