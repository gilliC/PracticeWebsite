import React from 'react';
import { SubjectListItem } from './components/SubjectListItem';
import { BookmarkConsumer } from '../../index';
import { LinksListContainer } from '../LinksListContainer';

export const SubjectsList = () => {
  const getArticlesListItems = context => {
    const { list, activeList, setActiveList } = context;
    return list.map(link => (
      <SubjectListItem
        setActiveList={setActiveList}
        activeList={activeList}
        item={link}
        key={link.title}
      />
    ));
  };

  return (
    <LinksListContainer>
      <div>
        <BookmarkConsumer>
          {context => {
            return getArticlesListItems(context);
          }}
        </BookmarkConsumer>
      </div>
    </LinksListContainer>
  );
};
