import React from 'react';

import ArticleLink from './ArticleLink';
import {Container} from '../../components/Container';
import {ColinRow} from '../../components/common_components';
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
