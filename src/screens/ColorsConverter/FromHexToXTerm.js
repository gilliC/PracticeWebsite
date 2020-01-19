import React, {useState} from 'react';
import {
  ContainerRow,
  MainText,
} from '../../components/common_components';
import { Container } from '../../components/Container';
import {checkIfHex, getColorToHexErrors} from './convertingFunctions';
import {
  ColorsConverterInput,
  ColorsConverterButton,
  ColorsConverterTitle,
  BiggerText,
  BackgroundColorHalfDiv,
} from './colorsconverter_components';
import {ColorsConverterConsumer} from './ColorsConverter';
import ConnectServer from '../../classes/connectServer';
import { ColinRow } from '../../components/views/ColInRow';

export default props => {
  const [state, setState] = useState({error: '', inputHex: '', xTerm: -1});

  let handleHexInputChange = event => {
    const {value} = event.target;
    let error = getColorToHexErrors(value);
    if (error) setState({...state, error, inputHex: value});
    else setState({...state, error, inputHex: value, xTerm: -1});
  };

  let handleSubmit = async (error, inputHex, setStore) => {
    if (!error && checkIfHex(inputHex)) {
      const connectS = new ConnectServer();
      let res = await connectS.getColorConverterReq(inputHex, 'XTERM');
      if (res.type === 'error') {
        setState({...setState, error: res.message || 'Something went wrong'});
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
      setState({...state, xTerm: color.xterm, hexOfXTerm: color.hexValue});
      setStore({color: inputHex, colorbrightness: res.level});
    } else setState({...state, error: error || 'This is not a hex code'});
  };

  handleHexInputChange = handleHexInputChange.bind(this);
  handleSubmit = handleSubmit.bind(this);
  let {xTerm, error, inputHex, hexOfXTerm} = state;
  return (
    <ColorsConverterConsumer>
      {context => {
        const {setStore, store} = context;
        const hexColor = store.color;
        let xTermColor = xTerm !== -1 ? hexOfXTerm : hexColor;
        return (
          <Container>
            <ContainerRow height="100px" marginBottom="20px">
              <ColinRow>
                <BackgroundColorHalfDiv bgColor={hexColor} size={6} left>
                  <ColorsConverterTitle {...store}>Color</ColorsConverterTitle>
                </BackgroundColorHalfDiv>
                <BiggerText color={hexColor}>Hex: {hexColor}</BiggerText>
              </ColinRow>
              <ColinRow>
                <BackgroundColorHalfDiv bgColor={xTermColor} size={6} right>
                  <ColorsConverterTitle {...store}>
                    Converter
                  </ColorsConverterTitle>
                </BackgroundColorHalfDiv>
                <BiggerText color={xTermColor}>XTerm: {xTerm}</BiggerText>
              </ColinRow>
            </ContainerRow>
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
