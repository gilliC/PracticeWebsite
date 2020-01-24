import React from 'react';
// import { ConverterTypeButtonGroup as ButtonGroup } from './components/ConverterTypeButtonGroup';
// import { ConverterTypeButtonGroupLight as ButtonGroupLight } from './components/ConverterTypeButtonGroupLight';
import { brightnessTypes } from '../../logic/consts';
import {
  ColorsConverterButtonGroup,
  ColorsConverterSingleBG,
} from '../../colorsconverter_components';
// import { ConverterTypeButton } from './components/ConverterTypeButton';

export const ChooseConverterTypeButtonGroup = props => {
  const { color, colorbrightness, onChange, store } = props;
  const optionsArray = ['Hex to XTerm', 'Hex to RGBA', 'Hex to HSL'];
  const params = getInitialButtonGroupParams(onChange);
  const buttonsComponents = optionsArray.map((option, index) => {
    return (
      <ColorsConverterSingleBG
        type="radio"
        value={index}
        name={index}
        size={3}
        key={index}
        color={color}
        fontSize="1.75em">
        {option}
      </ColorsConverterSingleBG>
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
