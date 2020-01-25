import React from 'react';
import styled from 'styled-components';

import { brightnessTypes } from 'src/screens/ColorsConverter/logic/consts';
import { MainText } from 'src/commonComponents/common_components';

export const ResultText = props => {
  const { colorbrightness, children } = props;
  if (colorbrightness === brightnessTypes.SUPER_LIGHT) {
    return (
      <ResultTextStyled {...props} color="black">
        {children}
      </ResultTextStyled>
    );
  }
  return <ResultTextStyled {...props}>{children}</ResultTextStyled>;
};

const ResultTextStyled = styled(MainText)`
  padding: 10px;
  font-size: 1.7em;
`;
