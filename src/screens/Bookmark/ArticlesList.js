import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import ArticleItem from './ArticlesListItem';
import {fetchList} from './reduxFiles/articlesActions';

class ArticlesList extends Component {
  constructor(props) {
    super(props);
    props.fetchList();
  }

  render() {
    const {list, activeList} = this.props;
    return (
      <div>
        {list.map(link => {
          return (
            <ArticleItem activeList={activeList} item={link} key={link.title} />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.list,
  };
};

export default connect(
  mapStateToProps,
  {fetchList},
)(ArticlesList);

ArticlesList.propTypes = {
  list: PropTypes.array,
  fetchList: PropTypes.func,
  activeList: PropTypes.string,
};
