import React from 'react';
import { ColinRow } from 'src/commonComponents/views/ColInRow';
import { ActiveListContent } from './components/ActiveListContent';
import TransitionContainer from 'src/commonComponents/TransitionContainer';

export const ArticlesLinksList = ({ activeList }) => {
  return (
    <ColinRow float="left" size={6}>
      <TransitionContainer
        type="TranslateX"
        timeout={500}
        transformInitial="translateX(300px)">
        <ActiveListContent activeList={activeList} />
      </TransitionContainer>
    </ColinRow>
  );
};
