import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {fetchTasks} from './dashboardActions';
import {ColinRow} from '../components/common_components';
import {RightSide} from './dashboard_components';
import TasksList from './TasksList';
import Carousel from '../components/Carousel';
import PieChart from './TasksPieChart';
import TimelineBar from './TasksTimelineChart';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }
  componentWillMount() {
    this.props.fetchTasks();
  }
  componentWillReceiveProps({tasks}) {
    const {data} = this.state;
    if (data !== tasks) {
      this.setState({data: tasks});
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props || nextState !== this.state) return true;
    return false;
  }

  render() {
    let {data} = this.state;
    return (
      <div>
        <ColinRow size={12}>
          <Carousel>
            <PieChart data={data} />
            <TimelineBar data={data} />
          </Carousel>
        </ColinRow>
        <RightSide size={12} display="block" float="right">
          <TasksList data={data} />
        </RightSide>
      </div>
    );
  }
}
const mapStateToProps = ({tasks}) => {
  return {
    tasks: tasks,
  };
};

export default connect(
  mapStateToProps,
  {fetchTasks},
)(Dashboard);

Dashboard.propTypes = {
  fetchTasks: PropTypes.func,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      completionDate: PropTypes.string,
      creationDate: PropTypes.string,
      dueDate: PropTypes.string,
      title: PropTypes.string,
      isNotCompleted: PropTypes.bool,
    }),
  ).isRequired,
};
