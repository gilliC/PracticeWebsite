import React from 'react';
import { ColorsConverterTitle } from '../../../../../colorsconverter_components';
import { HalfColorExampleDiv } from './HalfColorExampleDiv';
import { ColorExampleTitle } from 'src/screens/ColorsConverter/components/ColorExampleTitle';

export const HalfColorExample = props => {
  const { bgColor, store, title, side } = props;
  return (
    <HalfColorExampleDiv bgColor={bgColor} size={6} side={side}>
      <ColorExampleTitle {...store}>{title}</ColorExampleTitle>
    </HalfColorExampleDiv>
  );
};
