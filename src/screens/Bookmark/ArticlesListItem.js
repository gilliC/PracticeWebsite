import React from 'react';
import {ArticleItemContainer} from './articles_components';
import {Title} from '../../components/common_components';

export default props => {
  const {title} = props.item;
  let isActive = props.activeList === title;
  let thisSetList = event => {
    console.log(props);
    event.preventDefault();
    props.setActiveList(props.item);
  };
  return (
    <ArticleItemContainer active={isActive} onClick={thisSetList} key={title}>
      <Title fontFamily="Abel" fontSize="2em">
        {title}
      </Title>
    </ArticleItemContainer>
  );
};
