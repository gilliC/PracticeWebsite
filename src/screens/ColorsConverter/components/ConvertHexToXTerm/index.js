import React, { useState } from 'react';
import { MainText } from 'src/commonComponents/common_components';
import { Container } from 'src/commonComponents/Container';
import { checkIfHex } from '../../convertingFunctions';
import { ColorsConverterButton } from '../../colorsconverter_components';
import { ColorsConverterConsumer } from '../..';
import ConnectServer from 'src/classes/connectServer';
import { ColorExampleTitle } from './components/ColorExampleTitle';
import { ColorInput } from './components/ColorInput';

export const ConvertHexToXTerm = props => {
  const [state, setState] = useState({ error: '', inputHex: '', xTerm: -1 });

  let handleSubmit = async (error, inputHex, setStore) => {
    if (!error && checkIfHex(inputHex)) {
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
    } else setState({ ...state, error: error || 'This is not a hex code' });
  };

  handleSubmit = handleSubmit.bind(this);
  let { xTerm, error, inputHex, hexOfXTerm } = state;

  return (
    <ColorsConverterConsumer>
      {context => {
        const { setStore, store } = context;
        const hexColor = store.color;
        let xTermColor = xTerm !== -1 ? hexOfXTerm : hexColor;
        return (
          <Container>
            <ColorExampleTitle
              hexColor={hexColor}
              store={store}
              xTermColor={xTermColor}
              xTerm={xTerm}
            />
            <ColorInput store={store} setState={setState} state={state} />

            <ColorsConverterButton
              {...store}
              onClick={() => {
                handleSubmit(error, inputHex, setStore);
              }}>
              Convert
            </ColorsConverterButton>
            <MainText color="red">{error}</MainText>
          </Container>
        );
      }}
    </ColorsConverterConsumer>
  );
};
