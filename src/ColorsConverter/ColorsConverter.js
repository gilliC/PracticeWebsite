import React, {Component} from 'react';
import {Container, MainBGSingleButton} from '../components/common_components';
import TransitionContainer from '../components/TransitionContainer';
import {ColorsConverterButtonGroup} from './colorsconverter_components';
import FromHexToXTermComponent from './FromHexToXTerm';

export default class ColorsConverter extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: 1,
    };
  }

  handleChange(value, event) {
    this.setState({value});
  }

  render() {
    let component = <h1>option 1</h1>;
    switch (this.state.value) {
      case 1:
        component = <FromHexToXTermComponent />;
        break;
      case 2:
        component = <h1>2</h1>;
        break;
      default:
        component = <h1>3</h1>;
        break;
    }
    return (
      <Container>
        <ColorsConverterButtonGroup
          type="radio"
          name="tbg"
          defaultValue={1}
          onChange={this.handleChange}>
          <MainBGSingleButton value={1} name="1" size={3}>
            Convert from Hex to XTerm
          </MainBGSingleButton>
          <MainBGSingleButton value={2} name="2" size={3}>
            Option 2
          </MainBGSingleButton>
          <MainBGSingleButton value={3} name="3" size={3}>
            Option 3
          </MainBGSingleButton>
        </ColorsConverterButtonGroup>
        <TransitionContainer type="TranslateX">{component}</TransitionContainer>
      </Container>
    );
  }
}
