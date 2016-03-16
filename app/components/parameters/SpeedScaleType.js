import React, { Component, PropTypes } from 'react';
import Dropdown from 'react-toolbox/lib/dropdown/Dropdown';

export default class SpeedScaleType extends Component {
  static propTypes = {
    scaleType: PropTypes.number.isRequired,
    setScaleType: PropTypes.func.isRequired,
  }

  _onChange = (scaleType) => {
    this.props.setScaleType(scaleType);
  }

  render() {
    const { scaleType } = this.props;
    const options = [
      { value: 0, label: 'ground' },
      { value: 1, label: 'air' },
    ];

    return (
      <Dropdown
        auto
        value={scaleType}
        source={options}
        onChange={this._onChange}
        label="type"
      />
    );
  }
}