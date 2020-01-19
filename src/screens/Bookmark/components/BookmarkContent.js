import React from "react";
import ActiveList from "../ActiveArticlesList";
import LinksList from "../ArticlesList";
import { LinksListContainer } from "./LinksListContainer";
import { LinksContainer } from "./LinksContainer";
import { ColinRow } from "../../../components/common_components";
import { BookmarkConsumer } from "../index";
import { Title } from "../../../components/texts/Title";

export const BookmarkContent = props => {
  return (
    <div>
      <Title fontSize="1.5em">
        Things I have read and want to read again || Things I should read
      </Title>
      <BookmarkConsumer>
        {context => {
          if (context.list === null)
            return (
              <LinksContainer>
                <Title>Loading...</Title>
              </LinksContainer>
            );
          return (
            <LinksContainer>
              <LinksListContainer>
                <LinksList activeList={context.activeList.title} />
              </LinksListContainer>
              <ColinRow float="left" size={6}>
                <ActiveList activeList={context.activeList} />
              </ColinRow>
            </LinksContainer>
          );
        }}
      </BookmarkConsumer>
    </div>
  );
};
