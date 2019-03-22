import React from 'react';

import ArticleItem from './ArticlesListItem';
import {BookmarkConsumer} from './Bookmark';

export default props => {
  return (
    <div>
      <BookmarkConsumer>
        {context => {
          const {list, activeList, setActiveList} = context;
          return list.map(link => {
            return (
              <ArticleItem
                setActiveList={setActiveList}
                activeList={activeList}
                item={link}
                key={link.title}
              />
            );
          });
        }}
      </BookmarkConsumer>
    </div>
  );
};
