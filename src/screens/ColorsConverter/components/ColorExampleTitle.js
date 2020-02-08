import React from 'react';
import { brightnessTypes } from '../logic/consts';
import { Title } from 'src/commonComponents/texts/Title';

export const ColorExampleTitle = props => {
  const { colorBrightness, children } = props;
  if (colorBrightness === brightnessTypes.SUPER_LIGHT) {
    return <Title {...props} color="black">{children}</Title>;
  }
  return <Title {...props} color="white">{children}</Title>;
};
