import React from 'react';
import { brightnessTypes } from '../../logic/consts';
import { ConveterTypeButton } from './components/ConverterTypeButton';
import { TypeButtonGroupColorDark } from './components/TypeButtonGroupColorDark';
import { TypeButtonGroupColorLight } from './components/TypeButtonGroupColorLight';
import { DEFAULT_VALUE } from '../../ColorsConverterContent';

export const ChooseConverterTypeButtonGroup = props => {
  const { onChange, store } = props;
  const { color, colorBrightness } = store;
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
  if (color && colorBrightness === brightnessTypes.SUPER_LIGHT) {
    return (
      <TypeButtonGroupColorLight {...params}>
        {buttonsComponents}
      </TypeButtonGroupColorLight>
    );
  }

  return (
    <TypeButtonGroupColorDark {...params}>
      {buttonsComponents}
    </TypeButtonGroupColorDark>
  );
};

const getInitialButtonGroupParams = onChange => {
  return { type: 'radio', name: 'tbg', defaultValue: DEFAULT_VALUE, onChange };
};
