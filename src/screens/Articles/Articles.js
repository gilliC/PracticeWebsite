import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import ActiveList from './ActiveArticlesList';
import LinksList from './ArticlesList';
import {LinksContainer, LinksListContainer} from './articles_components';
import {ColinRow} from '../../components/common_components';

class Articles extends Component {
  render() {
    const {activeList} = this.props;
    return (
      <LinksContainer>
        <LinksListContainer>
          <LinksList activeList={activeList.title} />
        </LinksListContainer>
        <ColinRow float="left" size={6}>
          <ActiveList activeList={activeList} />
        </ColinRow>
      </LinksContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeList: state.activeList.item,
  };
};
export default connect(
  mapStateToProps,
  {},
)(Articles);

Articles.propTypes = {
  changeActiveItem: PropTypes.func,
  activeItem: PropTypes.shape({
    item: PropTypes.shape({
      title: PropTypes.string,
      articles: PropTypes.array,
    }),
  }),
};
