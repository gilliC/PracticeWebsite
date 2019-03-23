import React, {useState} from 'react';
import {
  Container,
  ContainerRow,
  MainText,
} from '../../components/common_components';
import {
  checkIfHex,
  getColorToHexErrors,
  fromHexToRGB,
  fromHexToHSL,
} from './convertingFunctions';
import {
  ColorsConverterInput,
  ColorsConverterButton,
  ColorsConverterTitle,
  BackgroundColorFullDiv,
} from './colorsconverter_components';
import {ColorsConverterConsumer} from './ColorsConverter';

export default props => {
  const [state, setState] = useState({error: '', answer: '', inputHex: ''});

  let handleHexInputChange = (event, setColor) => {
    const {value} = event.target;
    let error = getColorToHexErrors(value);
    if (error) setState({...state, error, inputHex: value});
    else setState({...state, inputHex: value});
  };
  let handleSubmit = (error, inputHex, setColor) => {
    let answer;
    if (!error) {
      if (checkIfHex(inputHex)) {
        if (props.type === 'HSL') answer = fromHexToHSL(inputHex);
        else answer = fromHexToRGB(inputHex, 'cleanRGBA');
        setState({...state, answer});
        setColor(inputHex);
      } else setState({...state, error});
    }
  };

  handleHexInputChange = handleHexInputChange.bind(this);
  handleSubmit = handleSubmit.bind(this);

  return (
    <ColorsConverterConsumer>
      {context => {
        const hexColor = context.color;
        const {answer, error, inputHex} = state;
        return (
          <Container>
            <ContainerRow height="100px">
              <BackgroundColorFullDiv bgColor={hexColor}>
                <ColorsConverterTitle color={hexColor}>
                  {answer || 'Color Converter'}
                </ColorsConverterTitle>
              </BackgroundColorFullDiv>
            </ContainerRow>
            <br />
            <br />
            <ColorsConverterInput
              placeholder="Enter the Hex code"
              onChange={event => {
                handleHexInputChange(event, context);
              }}
              color={hexColor}
            />
            <br />
            <ColorsConverterButton
              onClick={() => {
                handleSubmit(error, inputHex, context.setColor);
              }}
              color={hexColor}>
              Convert
            </ColorsConverterButton>
            <MainText color="red">{error}</MainText>
          </Container>
        );
      }}
    </ColorsConverterConsumer>
  );
};
