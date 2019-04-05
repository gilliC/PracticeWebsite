import React, {useState} from 'react';
import {
  Container,
  ContainerRow,
  MainText,
} from '../../components/common_components';
import {checkIfHex, getColorToHexErrors} from './convertingFunctions';
import {
  ColorsConverterInput,
  ColorsConverterButton,
  ColorsConverterTitle,
  BackgroundColorFullDiv,
} from './colorsconverter_components';
import {ColorsConverterConsumer} from './ColorsConverter';
import ConnectServer from '../../classes/connectServer';

export default props => {
  const [state, setState] = useState({error: '', answer: '', inputHex: ''});

  let handleHexInputChange = event => {
    const {value} = event.target;
    let error = getColorToHexErrors(value);
    if (error) setState({...state, error, inputHex: value});
    else setState({...state, error, inputHex: value});
  };
  let handleSubmit = async (error, inputHex, setStore) => {
    if (!error) {
      if (checkIfHex(inputHex)) {
        const connectS = new ConnectServer();
        let res = await connectS.getColorConverterReq(
          inputHex,
          props.type.toUpperCase(),
        );
        if (res.type === 'error') setState({...state, error: res.message});
        else {
          let color = res.color;
          res = await connectS.getColorConverterReq(
            inputHex,
            'BRIGHTNESSLEVEL',
          );
          setState({...state, answer: color});
          setStore({color: inputHex, colorbrightness: res.level});
        }
      } else setState({...state, error: 'This is not a Hex code'});
    } else setState({...state, error});
  };

  handleHexInputChange = handleHexInputChange.bind(this);
  handleSubmit = handleSubmit.bind(this);

  return (
    <ColorsConverterConsumer>
      {context => {
        const hexColor = context.store.color;
        const {answer, error, inputHex} = state;
        return (
          <Container>
            <ContainerRow height="100px" marginBottom="49px">
              <BackgroundColorFullDiv bgColor={hexColor}>
                <ColorsConverterTitle color={hexColor}>
                  {answer || 'Color Converter'}
                </ColorsConverterTitle>
              </BackgroundColorFullDiv>
            </ContainerRow>
            <ColorsConverterInput
              placeholder="Enter the Hex code"
              onChange={event => {
                handleHexInputChange(event);
              }}
              color={hexColor}
            />
            <br />
            <ColorsConverterButton
              onClick={() => {
                handleSubmit(error, inputHex, context.setStore);
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
