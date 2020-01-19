import React from 'react';

import ArticleLink from './ArticleLink';
import {Container, ColinRow} from '../../components/Container';
import {ListActiveTitle} from './articles_components';
import TransitionContainer from '../../components/TransitionContainer';

export default props => {
  let links = props.activeList.articles.map(article => {
    return <ArticleLink article={article} key={article.title} />;
  });
  return (
    <TransitionContainer
      type="TranslateX"
      timeout={500}
      transformInitial="translateX(300px)">
      <Container>
        <ColinRow>
          <ListActiveTitle fontFamily="Abril Fatface">
            {props.activeList.title}
          </ListActiveTitle>
          {links}
        </ColinRow>
      </Container>
    </TransitionContainer>
  );
};
