import React from "react";
import ActiveList from "../ActiveArticlesList";
import { SubjectsList } from "./SubjectsList";
import { LinksContainer } from "./LinksContainer";
import { ColinRow } from "../../../components/common_components";
import { BookmarkConsumer } from "../index";
import { LoadingScreen } from "./LoadingScreen";
import { BookmarkTitle } from "./BookmarkTitle";

export const BookmarkContent = props => {
  return (
    <div>
      <BookmarkTitle />
      <BookmarkConsumer>
        {context => {
          if (context.list === null) return <LoadingScreen />;
          return (
            <LinksContainer>
              <SubjectsList activeList={context.activeList.title} />
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
