import React, {useState} from 'react';
import {
  Container,
  ColinRow,
  ContainerRow,
  MainText,
} from '../../components/common_components';
import {
  checkIfHex,
  fromHextoXterm,
  getColorToHexErrors,
} from './convertingFunctions';
import {xtermColorsTable} from '../../services/local_data_base';
import {
  ColorsConverterInput,
  ColorsConverterButton,
  ColorsConverterTitle,
  BiggerText,
  BackgroundColorHalfDiv,
} from './colorsconverter_components';
import {ColorsConverterConsumer} from './ColorsConverter';

export default props => {
  const [state, setState] = useState({error: '', inputHex: '', xTerm: -1});

  let handleHexInputChange = (event, setColor) => {
    const {value} = event.target;
    let error = getColorToHexErrors(value);
    if (error) setState({...state, error, inputHex: value});
    else setState({...state, error, inputHex: value, xTerm: -1});
  };
  let handleSubmit = (error, inputHex, setColor) => {
    if (!error) {
      if (checkIfHex(inputHex)) {
        let xTerm = fromHextoXterm(inputHex);
        setState({...state, xTerm});
        setColor(inputHex);
      } else setState({...state, error: 'This is not a Hex code'});
    } else setState({...state, error});
  };

  handleHexInputChange = handleHexInputChange.bind(this);
  handleSubmit = handleSubmit.bind(this);
  let {xTerm, error, inputHex} = state;
  return (
    <ColorsConverterConsumer>
      {context => {
        const hexColor = context.color;
        let xTermColor =
          xTerm !== -1 ? '#' + xtermColorsTable[xTerm] : hexColor;
        return (
          <Container>
            <ContainerRow height="100px">
              <ColinRow>
                <BackgroundColorHalfDiv bgColor={hexColor} size={6} left>
                  <ColorsConverterTitle color={hexColor}>
                    Color
                  </ColorsConverterTitle>
                </BackgroundColorHalfDiv>
                <BiggerText color={hexColor}>Hex: {hexColor}</BiggerText>
              </ColinRow>
              <ColinRow>
                <BackgroundColorHalfDiv bgColor={xTermColor} size={6} right>
                  <ColorsConverterTitle color={hexColor}>
                    Converter
                  </ColorsConverterTitle>
                </BackgroundColorHalfDiv>
                <BiggerText color={xTermColor}>XTerm: {xTerm}</BiggerText>
              </ColinRow>
            </ContainerRow>
            <br />
            <br />
            <ColorsConverterInput
              placeholder="Enter Hex code"
              color={hexColor}
              onChange={event => {
                handleHexInputChange(event, context);
              }}
            />
            <br />
            <ColorsConverterButton
              color={hexColor}
              onClick={() => {
                handleSubmit(error, inputHex, context.setColor);
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
