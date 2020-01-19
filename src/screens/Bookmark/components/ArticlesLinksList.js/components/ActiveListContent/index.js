import React from "react";
import { ArticlesListContainer } from "../ArticlesListContainer";
import { ListActiveTitle } from "./components/ListActiveTitle";
import { ArticleLinkItem } from "./components/ArticleLinkItem";

export const ActiveListContent = props => {
  const { articles, title } = props.activeList;
  const links = articles.map(article => {
    return <ArticleLinkItem article={article} key={article.title} />;
  });
  return (
    <ArticlesListContainer>
      <ListActiveTitle>{title}</ListActiveTitle>
      {links}
    </ArticlesListContainer>
  );
};
