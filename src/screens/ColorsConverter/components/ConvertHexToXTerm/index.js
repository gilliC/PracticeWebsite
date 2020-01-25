import React, { useState } from 'react';
import { MainText } from 'src/commonComponents/common_components';
import { Container } from 'src/commonComponents/Container';
import { ColorsConverterConsumer } from '../..';
import { ColorExampleTitle } from './components/ColorExampleTitle';
import { ColorInput } from './components/ColorInput';
import { ColorInputConvert } from './components/ColorInputConvert';

export const ConvertHexToXTerm = props => {
  const [state, setState] = useState({ error: '', inputHex: '', xTerm: -1 });

  let { xTerm, error, hexOfXTerm } = state;

  return (
    <ColorsConverterConsumer>
      {context => {
        const { setStore, store } = context;
        const hexColor = store.color;
        let xTermColor = xTerm !== -1 ? hexOfXTerm : hexColor;
        return (
          <Container>
            <ColorExampleTitle
              hexColor={hexColor}
              store={store}
              xTermColor={xTermColor}
              xTerm={xTerm}
            />
            <ColorInput store={store} setState={setState} state={state} />

            <ColorInputConvert store={store} setState={setState} state={state} setStore={setStore} />
            <MainText color="red">{error}</MainText>
          </Container>
        );
      }}
    </ColorsConverterConsumer>
  );
};