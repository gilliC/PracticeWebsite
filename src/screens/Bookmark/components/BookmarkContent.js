import React from 'react';
import { SubjectsList } from './SubjectsList';
import { LinksContainer } from './LinksContainer';
import { BookmarkConsumer } from '../index';
import { LoadingScreen } from './LoadingScreen';
import { BookmarkTitle } from './BookmarkTitle';
import { ArticlesLinksList } from './ArticlesLinksList.js';

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
              <ArticlesLinksList activeList={context.activeList} />
            </LinksContainer>
          );
        }}
      </BookmarkConsumer>
    </div>
  );
};
