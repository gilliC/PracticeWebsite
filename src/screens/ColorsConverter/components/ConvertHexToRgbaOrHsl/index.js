import React, { useState } from 'react';
import { Container } from 'src/commonComponents/Container';
import { MainText } from 'src/commonComponents/common_components';
import { ColorsConverterConsumer } from '../../index';
import { ColorExample } from './components/ColorExample';
import { ColorInput } from '../ConvertHexToXTerm/components/ColorInput';
import { ColorInputConvert } from '../ConvertHexToXTerm/components/ColorInputConvert';

export const ConvertHexToRgbaOrHsl = props => {
  const [state, setState] = useState({ error: '', answer: '', inputHex: '' });

  return (
    <ColorsConverterConsumer>
      {context => {
        const { store, setStore } = context;
        const hexColor = store.color;
        const { answer, error } = state;
        return (
          <Container>
            <ColorExample answer={answer} hexColor={hexColor} />
            <ColorInput store={store} setState={setState} state={state} />
            <ColorInputConvert
              store={store}
              setState={setState}
              state={state}
              setStore={setStore}
            />
            <MainText color="red">{error}</MainText>
          </Container>
        );
      }}
    </ColorsConverterConsumer>
  );
};
