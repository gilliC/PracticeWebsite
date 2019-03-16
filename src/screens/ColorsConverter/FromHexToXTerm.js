import React, {Component} from 'react';
import {primaryColor} from '../../app_components';
import {
  Container,
  ColinRow,
  ContainerRow,
  MainText,
} from '../../components/common_components';
import {checkIfHex, fromHextoXterm} from './convertingFunctions';
import {xtermColorsTable} from '../../services/local_data_base';
import {
  ColorsConverterInput,
  ColorsConverterButton,
  ColorsConverterTitle,
  BiggerText,
  BackgroundColorHalfDiv,
} from './colorsconverter_components';

export default class FromHexToXTermComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {inputHex: '', error: '', hexColor: '', xTerm: -1};
    this.handleHexInputChange = this.handleHexInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleHexInputChange(event) {
    let error = '';
    const {value} = event.target;
    if (value[0] !== '#') error = 'Hex color must start with # \n';
    if (value.length > 7) error = "Hex color can't be more than 7 charcters";
    this.setState({inputHex: event.target.value, error});
  }
  handleSubmit() {
    const {error, inputHex} = this.state;
    if (!error) {
      if (checkIfHex(inputHex)) {
        let xTerm = fromHextoXterm(inputHex);
        this.setState({hexColor: inputHex, xTerm});
      } else this.setState({error: 'This is not a Hex color'});
    }
  }
  render() {
    const {hexColor, error, xTerm} = this.state;
    let xTermColor =
      xTerm !== -1 ? '#' + xtermColorsTable[xTerm] : primaryColor;
    return (
      <Container>
        <ContainerRow height="100px">
          <ColinRow>
            <BackgroundColorHalfDiv bgColor={hexColor} size={6} left>
              <ColorsConverterTitle color={hexColor}>
                Color
              </ColorsConverterTitle>
            </BackgroundColorHalfDiv>
            {hexColor && (
              <BiggerText color={hexColor}>Hex: {hexColor}</BiggerText>
            )}
          </ColinRow>
          <ColinRow>
            <BackgroundColorHalfDiv bgColor={xTermColor} size={6} right>
              <ColorsConverterTitle color={hexColor}>
                Converter
              </ColorsConverterTitle>
            </BackgroundColorHalfDiv>
            {xTerm !== -1 && (
              <BiggerText color={xTermColor}>XTerm: {xTerm}</BiggerText>
            )}
          </ColinRow>
        </ContainerRow>
        <br />
        <br />
        <ColorsConverterInput
          placeholder="Enter Hex"
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
