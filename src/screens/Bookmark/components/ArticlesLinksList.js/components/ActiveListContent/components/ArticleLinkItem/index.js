import React from "react";
import { LinkText } from "./components/LinkText";
import { LinkTextSpan } from "./components/LinkTextSpan";

export const ArticleLinkItem = props => {
  const { link, title, writer } = props.article;
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <LinkText>
        {title}
        <LinkTextSpan>{" / " + writer}</LinkTextSpan>
      </LinkText>
    </a>
  );
};
