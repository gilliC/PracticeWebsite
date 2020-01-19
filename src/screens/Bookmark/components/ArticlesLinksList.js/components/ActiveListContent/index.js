import React from "react";

import ArticleLink from "../../../../ArticleLink";
import { ArticlesListContainer } from "../ArticlesListContainer";
import { ListActiveTitle } from "../ListActiveTitle";

export const ActiveListContent = props => {
  let links = props.activeList.articles.map(article => {
    return <ArticleLink article={article} key={article.title} />;
  });
  return (
    <ArticlesListContainer>
      <ListActiveTitle>{props.activeList.title}</ListActiveTitle>
      {links}
    </ArticlesListContainer>
  );
};
