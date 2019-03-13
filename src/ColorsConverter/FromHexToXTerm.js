import React, {Component} from 'react';
import {primaryColor} from '../app_components';
import {
  Container,
  ColinRow,
  ContainerRow,
  MainText,
} from '../components/common_components';
import {checkIfHex, fromHextoXterm} from './convertingFunctions';
import {xtermColorsTable} from './colorsConstants';
import {
  ColorsConverterInput,
  ColorsConverterButton,
  ColorsConverterTitle,
  BiggerText,
  BackgroundColorDiv,
} from './colorsconverter_components';

export default class FromHexToXTermComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {inputHex: '', error: '', hexColor: '', answer: -1};
    this.handleHexInputChange = this.handleHexInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleHexInputChange(event) {
    let error = '';
    const {value} = event.target;
    if (value[0] !== '#') error = 'Hex code must start with # \n';
    if (value.length > 7) error = "Hex code can't be more than 7 charcters";

    this.setState({inputHex: event.target.value, error});
  }
  handleSubmit() {
    const {error, inputHex} = this.state;
    if (!error) {
      if (checkIfHex(inputHex)) {
        let answer = fromHextoXterm(inputHex);
        this.setState({hexColor: inputHex, answer});
      } else this.setState({error: 'This is not a Hex color'});
    }
  }
  render() {
    const {hexColor, error, answer} = this.state;
    let xTermColor =
      answer !== -1 ? '#' + xtermColorsTable[answer] : primaryColor;
    return (
      <Container>
        <ContainerRow height="100px">
          <ColinRow>
            <BackgroundColorDiv bgColor={hexColor} size={6} left>
              <ColorsConverterTitle color={hexColor}>
                Colors
              </ColorsConverterTitle>
            </BackgroundColorDiv>
            {hexColor && <BiggerText color={hexColor}>{hexColor}</BiggerText>}
          </ColinRow>
          <ColinRow>
            <BackgroundColorDiv bgColor={xTermColor} size={6} right>
              <ColorsConverterTitle color={hexColor}>
                Converter
              </ColorsConverterTitle>
            </BackgroundColorDiv>
            {answer !== -1 && (
              <BiggerText color={xTermColor}>{answer}</BiggerText>
            )}
          </ColinRow>
        </ContainerRow>
        <br />
        <br />
        <ColorsConverterInput
          placeholder="Enter the Hex code"
          size={3}
          onChange={this.handleHexInputChange}
          color={hexColor}
        />
        <br />
        <ColorsConverterButton onClick={this.handleSubmit} color={hexColor}>
          Convert
        </ColorsConverterButton>
        <MainText color="red">{error}</MainText>
      </Container>
    );
  }
}
