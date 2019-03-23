import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {
  fetchPermission,
  fetchTasksLoggedIn,
  fetchTasksNotLogged,
} from './reduxFiles/dashboardActions';
import {ColinRow} from '../../components/common_components';
import Carousel from '../../components/Carousel';
import {DashboardSecondPart} from './dashboard_components';
import TasksList from './TasksList';
import PieChart from './TasksPieChart';
import TimelineBar from './TasksTimelineChart';
import LogIn from './LogIn';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    let initialUser = {email: '11@gmail.com', password: '123'};
    const user = props.cookies.get('user') || initialUser;
    this.state = {
      data: [],
      isPermitted: false,
      user: user,
      isPermittedError: '',
    };
    this.logIn = this.logIn.bind(this);
    this.onChangeTasks = this.onChangeTasks.bind(this);
  }
  componentWillMount() {
    this.props.fetchTasksNotLogged();
    this.props.fetchPermission(this.state.user);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        data: nextProps.tasks,
        isPermitted: nextProps.isPermitted,
        user: nextProps.user,
        isPermittedError: nextProps.isPermittedError,
      });
    }
    if (this.props.tasks.length === 0 && nextProps.isPermitted)
      this.props.fetchTasksLoggedIn();
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props || nextState !== this.state) return true;
    return false;
  }
  onChangeTasks() {
    this.props.fetchTasksLoggedIn();
  }
  logIn(user) {
    let userJSON = JSON.stringify(user);
    this.props.cookies.set('user', userJSON, {path: '/'});
    this.props.fetchPermission(user);
  }
  render() {
    let {data, isPermitted, isPermittedError} = this.state;
    let secondPart = (
      <LogIn
        logIn={this.logIn}
        errors={isPermittedError}
        cookies={this.props.cookies}
      />
    );
    if (isPermitted) {
      secondPart = <TasksList data={data} onChangeTasks={this.onChangeTasks} />;
    }
    return (
      <div>
        <ColinRow size={12}>
          <Carousel>
            <PieChart data={data} />
            <TimelineBar data={data} />
          </Carousel>
        </ColinRow>
        <DashboardSecondPart size={12} display="block" float="right">
          {secondPart}
        </DashboardSecondPart>
      </div>
    );
  }
}
const mapStateToProps = ({tasks, isPermitted, user}) => {
  return {
    tasks: tasks,
    isPermitted: isPermitted.type,
    isPermittedError: isPermitted.error,
    user: user,
  };
};

export default connect(
  mapStateToProps,
  {fetchTasksLoggedIn, fetchTasksNotLogged, fetchPermission},
)(Dashboard);

Dashboard.propTypes = {
  fetchTasks: PropTypes.func,
  fetchPermission: PropTypes.func,
  isPermitted: PropTypes.bool,
  user: PropTypes.shape({
    mail: PropTypes.string,
    password: PropTypes.string,
  }),
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
