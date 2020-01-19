import React, { Component, createContext } from "react";
import ConnectServer from "../../classes/connectServer";

const BookmarkContext = createContext({});
const BookmarkProvider = BookmarkContext.Provider;

export const BookmarkConsumer = BookmarkContext.Consumer;

export class Bookmark extends Component {
  constructor(props) {
    super(props);
    this.state = { list: null, activeList: null };
    this.setActiveList = list => {
      this.setState({ ...this.state, activeList: list });
    };
    this.setList = list => {
      this.setState({ ...this.state, list });
    };
    this.setActiveList = this.setActiveList.bind(this);
    this.setList = this.setList.bind(this);
  }
  async componentDidMount() {
    if (this.state.list === null) {
      const cs = new ConnectServer();
      const res = await cs.getBookmark();
      this.setState({ list: res, activeList: res[0] });
    }
  }
  render() {
    return (
      <BookmarkProvider
        value={{
          ...this.state,
          setActiveList: this.setActiveList,
          setList: this.setList
        }}
      >
        <Bookmark />
      </BookmarkProvider>
    );
  }
}
