import React from 'react';
import { brightnessTypes } from '../logic/consts';
import { Title } from 'src/commonComponents/texts/Title';

export const ColorExampleTitle = props => {
  const { colorbrightness, children } = props;
  if (colorbrightness === brightnessTypes.SUPER_LIGHT) {
    return <Title {...props} color="black">{children}</Title>;
  }
  return <Title {...props} color="white">{children}</Title>;
};
