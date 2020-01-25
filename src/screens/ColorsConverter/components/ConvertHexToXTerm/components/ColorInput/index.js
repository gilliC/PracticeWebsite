import React from 'react';
import { brightnessTypes } from 'src/screens/ColorsConverter/logic/consts';
import { ColorInputColorLight } from './components/ColorInputColorLight';
import { ColorInputColorDark } from './components/ColorInputColorDark';
import { getColorToHexErrors } from 'src/screens/ColorsConverter/logic/getColorToHexErrors';

export const ColorInput = props => {
  const { store, setState, state } = props;
  const handleHexInputChange = event => {
    const { value } = event.target;
    const error = getColorToHexErrors(value);
    if (error) setState({ ...state, error, inputHex: value });
    else setState({ ...state, error, inputHex: value, xTerm: -1 });
  };
  const { colorBrightness } = store;
  const params = {
    placeholder: 'Enter the Hex code',
    onChange: handleHexInputChange,
  };
  if (colorBrightness === brightnessTypes.SUPER_LIGHT) {
    return <ColorInputColorLight {...params}/>;
  }
  return <ColorInputColorDark {...params}/>;
};
