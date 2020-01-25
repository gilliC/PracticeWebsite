import React from 'react';
import { checkIfHex } from 'src/screens/ColorsConverter/convertingFunctions';
import { brightnessTypes } from 'src/screens/ColorsConverter/logic/consts';
import { ColorsConverterButton } from '../../../../colorsconverter_components';
import ConnectServer from 'src/classes/connectServer';
import { ConvertButtonColorLight } from './components/ConvertButtonColorLight';
import { MainButton as  ConvertButtonColorDark} from 'src/commonComponents/common_components';

export const ColorInputConvert = props => {
  const { store, setState, state, setStore } = props;
  const { error, inputHex } = state;
  const handleSubmit = async () => {
    if (error || !checkIfHex(inputHex)) {
      setState({ ...state, error: error || 'This is not a hex code' });
    }
    const connectS = new ConnectServer();
    let res = await connectS.getColorConverterReq(inputHex, 'XTERM');
    if (res.type === 'error') {
      setState({ ...setState, error: res.message || 'Something went wrong' });
      return;
    }
    const color = res;
    res = await connectS.getColorConverterReq(inputHex, 'BRIGHTNESSLEVEL');
    if (res.type === 'error') {
      setState({
        ...state,
        error: res.message || 'Something went wrong',
      });
      return;
    }
    setState({ ...state, xTerm: color.xterm, hexOfXTerm: color.hexValue });
    setStore({ color: inputHex, colorBrightness: res.level });
  };
  const { colorBrightness } = store;
  const params = {
    placeholder: 'Enter the Hex code',
    onClick: handleSubmit,
  };
  if (colorBrightness === brightnessTypes.SUPER_LIGHT) {
    return <ConvertButtonColorLight {...params}>Convert</ConvertButtonColorLight>;
  }
  return <ConvertButtonColorDark {...params}>Convert</ConvertButtonColorDark>;
};
