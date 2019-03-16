import React, {Component} from 'react';
import {
  Container,
  ContainerRow,
  MainText,
} from '../../components/common_components';
import {checkIfHex, fromHexToRGB, fromHexToHSL} from './convertingFunctions';
import {
  ColorsConverterInput,
  ColorsConverterButton,
  ColorsConverterTitle,
  BackgroundColorFullDiv,
} from './colorsconverter_components';

export default class FromHexToRGBANHSL extends Component {
  constructor(props) {
    super(props);
    this.state = {inputHex: '', error: '', hexColor: '', answer: ''};
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
    let answer;
    if (!error) {
      if (checkIfHex(inputHex)) {
        if (this.props.type === 'HSL') answer = fromHexToHSL(inputHex);
        else answer = fromHexToRGB(inputHex, 'cleanRGBA');
        this.setState({answer, hexColor: inputHex});
      } else this.setState({error: 'This is not a Hex color'});
    }
  }
  render() {
    const {hexColor, error, answer} = this.state;
    if (checkIfHex(hexColor)) fromHexToHSL(hexColor);
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
