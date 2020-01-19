import React from "react";
import { ArticlesListContainer } from "../ArticlesListContainer";
import { ListActiveTitle } from "./components/ListActiveTitle";
import { ArticleLinkItem } from "./components/ArticleLinkItem";

export const ActiveListContent = props => {
  let links = props.activeList.articles.map(article => {
    return <ArticleLinkItem article={article} key={article.title} />;
  });
  return (
    <ArticlesListContainer>
      <ListActiveTitle>{props.activeList.title}</ListActiveTitle>
      {links}
    </ArticlesListContainer>
  );
};
