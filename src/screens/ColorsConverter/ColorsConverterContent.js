import React, { useState } from 'react';
import { Container } from 'src/commonComponents/Container';
import TransitionContainer from 'src/commonComponents/TransitionContainer';
import { getConverterByCurrentIndex } from './logic/getConverterByCurrentIndex';
import { ChooseConverterTypeButtonGroup } from './components/ChooseConverterTypeButtonGroup';

export const ColorsConverterContent = props => {
  const [index, setIndex] = useState(0);
  const component = getConverterByCurrentIndex(index);
  const { store } = props;
  const onChange = (value, event) => {
    console.log("press")
    setIndex(value);
  };
  return (
    <Container>
      <ChooseConverterTypeButtonGroup store={store} onChange={onChange} />
      <TransitionContainer type="FadeIn" timeout={2000}>
        {component}
      </TransitionContainer>
    </Container>
  );
};
