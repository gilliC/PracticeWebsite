import React from 'react';
import { ContainerRow } from 'src/commonComponents/common_components';
import { ColorExampleDiv } from './components/ColorExampleDiv';
import { ColorExampleTitle } from '../../../ColorExampleTitle';

export const ColorExample = props => {
  const { hexColor, answer } = props;
  const title = answer || 'Color Converter';
  return (
    <ContainerRow height="100px" marginBottom="49px">
      <ColorExampleDiv bgColor={hexColor}>
        <ColorExampleTitle color={hexColor}>{title}</ColorExampleTitle>
      </ColorExampleDiv>
    </ContainerRow>
  );
};
