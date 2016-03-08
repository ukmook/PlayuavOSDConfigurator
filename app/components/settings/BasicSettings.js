import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Parameters from '../Parameters';
import Column from '../Column';

export default class BasicSettings extends Component {
  static propTypes = {
    name: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element),
    parameters: ImmutablePropTypes.contains({
      fontSize: PropTypes.number.isRequired,
      hAlignment: PropTypes.number.isRequired,
      visibleOn: PropTypes.number.isRequired,
      positionX: PropTypes.number.isRequired,
      positionY: PropTypes.number.isRequired,
    }).isRequired,
    numberOfPanels: PropTypes.number.isRequired,
    setFontSize: PropTypes.func.isRequired,
    setVisibleOn: PropTypes.func.isRequired,
    setPosition: PropTypes.func.isRequired,
    setHAlignment: PropTypes.func.isRequired,
  }

  render() {
    const {
      children,
      name,
      numberOfPanels,
      setFontSize,
      setHAlignment,
      setPosition,
      setVisibleOn,
    } = this.props;
    const {
      fontSize,
      hAlignment,
      positionX,
      positionY,
      visibleOn,
    } = this.props.parameters;

    return (
      <Parameters.ParameterList name={name}>
        <Parameters.Position labelX="position x" labelY="position y" positionX={positionX} positionY={positionY} setPosition={setPosition} />
        <Column width={50} style={{ 'paddingLeft': '5px' }}>
          <Parameters.FontSize fontSize={fontSize} setFontSize={setFontSize} />
        </Column>
        <Column width={50} style={{ 'paddingLight': '5px' }}>
          <Parameters.HorizontalAlignment hAlignment={hAlignment} setHAlignment={setHAlignment} />
        </Column>
        <Parameters.VisibleOn visibleOn={visibleOn} setVisibleOn={setVisibleOn} numberOfPanels={numberOfPanels} />
        {children}
      </Parameters.ParameterList>
    );
  }
}
