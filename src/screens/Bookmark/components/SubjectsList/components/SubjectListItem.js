import React from 'react';
import { SubjectItemContainer } from './SubjectItemContainer';
import { Title } from 'src/commonComponents/texts/Title';

export const SubjectListItem = props => {
  const { title } = props.item;
  let isActive = props.activeList.title === title;
  let thisSetList = event => {
    event.preventDefault();
    props.setActiveList(props.item);
  };
  return (
    <SubjectItemContainer active={isActive} onClick={thisSetList} key={title}>
      <Title fontFamily="Abel" fontSize="2em">
        {title}
      </Title>
    </SubjectItemContainer>
  );
};
