import React from 'react';
import { ContainerRow } from 'src/commonComponents/common_components';
import { ColinRow } from 'src/commonComponents/views/ColInRow';
import { HalfColorExample } from './components/HalfColorExample';
import { ResultText } from '../ResultText';

export const ColorExampleTitle = props => {
  const { hexColor, store, xTermColor, xTerm } = props;
  return (
    <ContainerRow height="initial" marginBottom="20px">
      <ColinRow>
        <HalfColorExample
          bgColor={hexColor}
          store={store}
          side="left"
          title="Color"
        />
        <ResultText color={hexColor}>Hex: {hexColor}</ResultText>
      </ColinRow>
      <ColinRow>
        <HalfColorExample
          bgColor={xTermColor}
          store={store}
          side="right"
          title="Converter"
        />
        <ResultText color={xTermColor}>XTerm: {xTerm}</ResultText>
      </ColinRow>
    </ContainerRow>
  );
};
