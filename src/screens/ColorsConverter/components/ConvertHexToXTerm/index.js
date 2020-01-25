import React, { useState } from 'react';
import { ContainerRow, MainText } from 'src/commonComponents/common_components';
import { Container } from 'src/commonComponents/Container';
import { checkIfHex, getColorToHexErrors } from '../../convertingFunctions';
import {
  ColorsConverterInput,
  ColorsConverterButton,
  ColorsConverterTitle,
  BiggerText,
  BackgroundColorHalfDiv,
} from '../../colorsconverter_components';
import { ColinRow } from 'src/commonComponents/views/ColInRow';
import { ColorsConverterConsumer } from '../..';
import ConnectServer from 'src/classes/connectServer';
import { ColorExampleTitle } from './components/ColorExampleTitle';

export const ConvertHexToXTerm = props => {
  const [state, setState] = useState({ error: '', inputHex: '', xTerm: -1 });

  let handleHexInputChange = event => {
    const { value } = event.target;
    let error = getColorToHexErrors(value);
    if (error) setState({ ...state, error, inputHex: value });
    else setState({ ...state, error, inputHex: value, xTerm: -1 });
  };

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
      setStore({ color: inputHex, colorbrightness: res.level });
    } else setState({ ...state, error: error || 'This is not a hex code' });
  };

  handleHexInputChange = handleHexInputChange.bind(this);
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
            <ColorsConverterInput
              placeholder="Enter the Hex code"
              {...store}
              onChange={event => {
                handleHexInputChange(event);
              }}
            />
            <br />
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
