import React from 'react';
import { ColorsConverterSingleBG } from 'src/screens/ColorsConverter/colorsconverter_components';

export const ConveterTypeButton = props => {
  const { color, colorbrightness, index, store } = props;
  const params = getInitialButtonParams(index, option, color);
  return (
    <ColorsConverterSingleBG {...params}>{option}</ColorsConverterSingleBG>
  );
};

const getInitialButtonParams = (index, option, color) => {
  return {
    type: 'radio',
    value: index,
    name: option,
    size: 3,
    color: color,
    fontSize: '1.75em',
  };
};
