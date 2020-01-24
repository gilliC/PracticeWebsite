import React from 'react';
import { ColorsConverterSingleBG } from 'src/screens/ColorsConverter/colorsconverter_components';

export const ConveterTypeButton = props => {
  const { store, option } = props;
  const { color } = store;
  const params = getInitialButtonParams(color, option);
  return (
    <ColorsConverterSingleBG {...params} {...props}>
      {option}
    </ColorsConverterSingleBG>
  );
};

const getInitialButtonParams = (color, option) => {
  return {
    type: 'radio',
    size: 3,
    fontSize: '1.75em',
    color,
    name:option,
  };
};
