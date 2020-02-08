import React, { useState } from 'react';
import { Container } from 'src/commonComponents/Container';
import TransitionContainer from 'src/commonComponents/TransitionContainer';
import { getConverterByCurrentIndex } from './logic/getConverterByCurrentIndex';
import { ChooseConverterTypeButtonGroup } from './components/ChooseConverterTypeButtonGroup';

export const DEFAULT_VALUE = 1;

export const ColorsConverterContent = props => {
  const [index, setIndex] = useState(DEFAULT_VALUE);
  const component = getConverterByCurrentIndex(index);
  const { store } = props;
  const onChange = (value, event) => {
    setIndex(value);
  };

  return (
    <Container>
      <ChooseConverterTypeButtonGroup onChange={onChange} store={store} />
      <TransitionContainer type="FadeIn" timeout={2000} height='100%' width='100%'>
        {component}
      </TransitionContainer>
    </Container>
  );
};
