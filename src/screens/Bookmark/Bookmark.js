import React, {Component, createContext} from 'react';

import {linksList} from '../../services/local_data_base';
import ActiveList from './ActiveArticlesList';
import LinksList from './ArticlesList';
import {LinksContainer, LinksListContainer} from './articles_components';
import {ColinRow} from '../../components/common_components';

const BookmarkContext = createContext({});
const BookmarkProvider = BookmarkContext.Provider;

export const BookmarkConsumer = BookmarkContext.Consumer;

const Bookmark = props => {
  return (
    <BookmarkConsumer>
      {context => {
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
  );
};

export default class BookmarkContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {list: linksList, activeList: linksList[0]};
    this.setActiveList = list => {
      this.setState({activeList: list});
    };
  }
  render() {
    return (
      <BookmarkProvider
        value={{...this.state, setActiveList: this.setActiveList.bind(this)}}>
        <Bookmark />
      </BookmarkProvider>
    );
  }
}
