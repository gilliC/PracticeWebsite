import React from 'react';
import { brightnessTypes } from 'src/screens/ColorsConverter/logic/consts';
import { MainBGSingleButton as ButtonColorDark } from 'src/commonComponents/common_components';
import { ButtonColorLight } from './components/ButtonColorLight';

export const ConveterTypeButton = props => {
  const { store, option } = props;
  const { color, colorBrightness } = store;
  const params = getInitialButtonParams(color, option);
  if (color && colorBrightness === brightnessTypes.SUPER_LIGHT) {
    return <ButtonColorLight {...params} {...props}> {option} </ButtonColorLight>;
  }
  return <ButtonColorDark {...params} {...props}> {option} </ButtonColorDark>;
};

const getInitialButtonParams = (color, option) => {
  return {
    type: 'radio',
    size: 3,
    fontSize: '1.75em',
    color,
    name: option,
  };
};
