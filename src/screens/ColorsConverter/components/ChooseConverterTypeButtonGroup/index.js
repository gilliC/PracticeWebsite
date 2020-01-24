import React from 'react';
// import { ConverterTypeButtonGroup as ButtonGroup } from './components/ConverterTypeButtonGroup';
// import { ConverterTypeButtonGroupLight as ButtonGroupLight } from './components/ConverterTypeButtonGroupLight';
import { brightnessTypes } from '../../logic/consts';
import {
  ColorsConverterButtonGroup,
  ColorsConverterSingleBG,
} from '../../colorsconverter_components';
import { ConveterTypeButton } from './components/ConverterTypeButton';
// import { ConverterTypeButton } from './components/ConverterTypeButton';

export const ChooseConverterTypeButtonGroup = props => {
  const { color, colorbrightness, onChange, store } = props;
  const optionsArray = ['Hex to XTerm', 'Hex to RGBA', 'Hex to HSL'];
  const params = getInitialButtonGroupParams(onChange);
  const buttonsComponents = optionsArray.map((option, index) => {
    return (
      <ConveterTypeButton
        value={index}
        key={index}
        store={store}
        option={option}
      />
    );
  });
  return (
    <ColorsConverterButtonGroup {...params}>
      {buttonsComponents}
    </ColorsConverterButtonGroup>
  );
};

const getInitialButtonGroupParams = onChange => {
  return { type: 'radio', name: 'tbg', defaultValue: 1, onChange };
};
