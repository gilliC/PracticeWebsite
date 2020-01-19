import React, { createContext, useState } from "react";

import { Container } from "../../components/Container";
import TransitionContainer from "../../components/TransitionContainer";
import {
  ColorsConverterButtonGroup,
  ColorsConverterSingleBG
} from "./colorsconverter_components";
import FromHexToXTermComponent from "./FromHexToXTerm";
import FromHexToRGBANHSL from "./FromHexToRGBAnHSL";

const ColorsConverterContext = createContext();
export const ColorsConverterProvider = ColorsConverterContext.Provider;
export const ColorsConverterConsumer = ColorsConverterContext.Consumer;

export default () => {
  const [store, setStore] = useState({ color: "", colorbrightness: "" });
  return (
    <ColorsConverterProvider value={{ store, setStore }}>
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

  const optionsArray = ["Hex to XTerm", "Hex to RGBA", "Hex to HSL"];

  return (
    <ColorsConverterConsumer>
      {context => {
        const { store } = context;
        return (
          <Container>
            <ColorsConverterButtonGroup
              type="radio"
              name="tbg"
              defaultValue={0}
              {...store}
              onChange={(value, event) => {
                setIndex(value);
              }}
            >
              {optionsArray.map((option, index) => {
                return (
                  <ColorsConverterSingleBG
                    type="radio"
                    value={index}
                    name={index}
                    size={3}
                    key={index}
                    {...store}
                    fontSize="1.75em"
                  >
                    {option}
                  </ColorsConverterSingleBG>
                );
              })}
            </ColorsConverterButtonGroup>
            <TransitionContainer type="FadeIn" timeout={2000}>
              {component}
            </TransitionContainer>
          </Container>
        );
      }}
    </ColorsConverterConsumer>
  );
};
