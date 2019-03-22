import React, {useState} from 'react';
import {
  Container,
  MainBGSingleButton,
} from '../../components/common_components';
import TransitionContainer from '../../components/TransitionContainer';
import {ColorsConverterButtonGroup} from './colorsconverter_components';
import FromHexToXTermComponent from './FromHexToXTerm';
import FromHexToRGBANHSL from './FromHexToRGBAnHSL';

export default () => {
  const [index, setIndex] = useState(1);
  let component = <h1>option 1</h1>;
  switch (index) {
    case 1:
      component = <FromHexToXTermComponent />;
      break;
    case 2:
      component = <FromHexToRGBANHSL type="RGBA" key={1} />;
      break;
    default:
      component = <FromHexToRGBANHSL type="HSL" key={2} />;
      break;
  }

  return (
    <Container>
      <ColorsConverterButtonGroup
        type="radio"
        name="tbg"
        defaultValue={1}
        onChange={(value, event) => {
          setIndex(value);
        }}>
        <MainBGSingleButton value={1} name="1" size={3} fontSize="1.75em">
          Hex to XTerm
        </MainBGSingleButton>
        <MainBGSingleButton value={2} name="2" size={3} fontSize="1.75em">
          Hex to RGBA
        </MainBGSingleButton>
        <MainBGSingleButton value={3} name="3" size={3} fontSize="1.75em">
          Hex to HSL
        </MainBGSingleButton>
      </ColorsConverterButtonGroup>
      <TransitionContainer type="TranslateX">{component}</TransitionContainer>
    </Container>
  );
};
