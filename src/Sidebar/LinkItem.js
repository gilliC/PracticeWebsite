import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {LinkContainer} from './sidebar_components';

export default props => {
  return (
    <LinkContainer>
      <SidebarIcon color="white" icon={props.icon || 'bars'} />
      <a href={props.href}>
        <h3>{props.title}</h3>
      </a>
    </LinkContainer>
  );
};
const SidebarIcon = styled(FontAwesomeIcon)`
  font-size: 1.5em;
`;
