import React, {Component, createContext} from 'react';

import ConnectServer from '../../classes/connectServer';
import ActiveList from './ActiveArticlesList';
import LinksList from './ArticlesList';
import {LinksContainer, LinksListContainer} from './articles_components';
import {ColinRow, Title} from '../../components/common_components';

const BookmarkContext = createContext({});
const BookmarkProvider = BookmarkContext.Provider;

export const BookmarkConsumer = BookmarkContext.Consumer;

const Bookmark = props => {
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

export default class BookmarkContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {list: null, activeList: null};
    this.setActiveList = list => {
      this.setState({...this.state, activeList: list});
    };
    this.setList = list => {
      this.setState({...this.state, list});
    };
    this.setActiveList = this.setActiveList.bind(this);
    this.setList = this.setList.bind(this);
  }
  async componentDidMount() {
    if (this.state.list === null) {
      const cs = new ConnectServer();
      let res = await cs.getBookmark();
      this.setState({list: res, activeList: res[0]});
    }
  }
  render() {
    return (
      <BookmarkProvider
        value={{
          ...this.state,
          setActiveList: this.setActiveList,
          setList: this.setList,
        }}>
        <Bookmark />
      </BookmarkProvider>
    );
  }
}
