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
    setIndex(value);
  };

  return (
    <Container>
      <ChooseConverterTypeButtonGroup onChange={onChange} store={store} />
      <TransitionContainer type="FadeIn" timeout={2000}>
        {component}
      </TransitionContainer>
    </Container>
  );
};
