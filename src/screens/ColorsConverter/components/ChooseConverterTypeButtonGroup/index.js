import React from 'react';
import { ConverterTypeButtonGroup as ButtonGroup } from './components/ConverterTypeButtonGroup';
import { ConverterTypeButtonGroupLight as ButtonGroupLight } from './components/ConverterTypeButtonGroupLight';
import { brightnessTypes } from '../../logic/consts';
import { ConverterTypeButton } from './components/ConverterTypeButton';

export const ChooseConverterTypeButtonGroup = props => {
  const { color, colorbrightness, onChange, store } = props;
  console.log({onChange})
  const optionsArray = ['Hex to XTerm', 'Hex to RGBA', 'Hex to HSL'];
  const buttonsInGroupComponents = optionsArray.map((option, index) => {
    return (
      <ConverterTypeButton
        key={option}
        store={store}
        option={option}
        index={index}
        colorbrightness={colorbrightness}>
        {option}
      </ConverterTypeButton>
    );
  });

  const initalParams = getInitialButtonGroupParams(store);

  if (color && colorbrightness === brightnessTypes.SUPER_LIGHT) {
    return (
      <ButtonGroupLight {...initalParams} onChange={onChange}>
        {buttonsInGroupComponents}
      </ButtonGroupLight>
    );
  }
  return (
    <ButtonGroup
      {...initalParams}
      onChange={() => {
        console.log('press');
      }}>
      {buttonsInGroupComponents}
    </ButtonGroup>
  );
};

const getInitialButtonGroupParams = (store) => {
  return { type: 'radio', name: 'tbg', defaultValue: 1, ...store };
};
