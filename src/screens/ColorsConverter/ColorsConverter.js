import React, {createContext, useState} from 'react';

import {Container} from '../../components/common_components';
import TransitionContainer from '../../components/TransitionContainer';
import {
  ColorsConverterButtonGroup,
  ColorsConverterSingleBG,
} from './colorsconverter_components';
import FromHexToXTermComponent from './FromHexToXTerm';
import FromHexToRGBANHSL from './FromHexToRGBAnHSL';

const ColorsConverterContext = createContext();
export const ColorsConverterProvider = ColorsConverterContext.Provider;
export const ColorsConverterConsumer = ColorsConverterContext.Consumer;

export default () => {
  const [color, setColor] = useState('');
  return (
    <ColorsConverterProvider value={{color, setColor}}>
      <ColorsConverter />
    </ColorsConverterProvider>
  );
};

const ColorsConverter = props => {
  const [index, setIndex] = useState(0);
  let component = <h1>option 1</h1>;
  switch (index) {
    case 0:
      component = <FromHexToXTermComponent />;
      break;
    case 1:
      component = <FromHexToRGBANHSL type="RGBA" key={1} />;
      break;
    default:
      component = <FromHexToRGBANHSL type="HSL" key={2} />;
      break;
  }

  const optionsArray = ['Hex to XTerm', 'Hex to RGBA', 'Hex to HSL'];

  return (
    <ColorsConverterConsumer>
      {context => {
        return (
          <Container>
            <ColorsConverterButtonGroup
              type="radio"
              name="tbg"
              defaultValue={0}
              color={context.color}
              onChange={(value, event) => {
                setIndex(value);
              }}>
              {optionsArray.map((option, index) => {
                return (
                  <ColorsConverterSingleBG
                    type="radio"
                    value={index}
                    name={index}
                    size={3}
                    key={index}
                    color={context.color}
                    fontSize="1.75em">
                    {option}
                  </ColorsConverterSingleBG>
                );
              })}
            </ColorsConverterButtonGroup>
            <TransitionContainer type="fade">{component}</TransitionContainer>
          </Container>
        );
      }}
    </ColorsConverterConsumer>
  );
};
