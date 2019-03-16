import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ModalComponent from './ModalEditTask';
import {Task} from './dashboard_components';
import {formatDate} from '../../services/functions';
import * as actions from './reduxFiles/dashboardActions';

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: this.props.edit,
      showEdit: false,
      isClosed: false,
      isNotCompleted: this.props.task.isNotCompleted,
    };
    this.onClick = this.onClick.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.undoTask = this.undoTask.bind(this);
    this.deleteTaskHandler = this.deleteTaskHandler.bind(this);
    this.completeTaskHandler = this.completeTaskHandler.bind(this);
  }

  componentWillReceiveProps({edit}) {
    this.setState({edit});
  }

  handleClose() {
    this.setState((state, props) => {
      return {showEdit: false, isClosed: true};
    });
  }

  handleShow() {
    this.setState((state, props) => {
      return {showEdit: true};
    });
  }

  undoTask() {
    this.props.undoTask(this.props.task.id);
  }

  deleteTaskHandler(taskId) {
    this.props.deleteTask(taskId);
    this.props.onChangeTasks();
  }
  completeTaskHandler(date) {
    let formatedDate = formatDate(date);
    this.props.completeTask(this.props.task.id, formatedDate);
    this.props.onChangeTasks();
  }
  onClick() {
    const {edit, isNotCompleted, isClosed} = this.state;
    if (edit) {
      //if the user complete the task
      if (isNotCompleted) {
        if (!isClosed) {
          this.handleShow();
        } else {
          this.setState({isClosed: false});
        }
      }
      //if the task was completed and the user pressed to reverse
      else {
        this.undoTask();
      }
    }
  }

  render() {
    let {title, dueDate} = this.props.task;
    let {isClosed, isNotCompleted, edit, showEdit} = this.state;
    if (isClosed) showEdit = false; /// overriding a issue??
    return (
      <Task
        edit={edit}
        className={this.props.disabled}
        onClick={this.onClick}
        isNotCompleted={isNotCompleted}>
        <h4>{title}</h4>
        <p>{dueDate}</p>
        <ModalComponent
          show={showEdit}
          handleClose={this.handleClose}
          task={this.props.task}
          deleteTaskHandler={this.deleteTaskHandler}
          completeTaskHandler={this.completeTaskHandler}
        />
      </Task>
    );
  }
}

export default connect(
  null,
  actions,
)(TaskItem);

TaskItem.propTypes = {
  addTask: PropTypes.func,
  completeTask: PropTypes.func,
  deleteTask: PropTypes.func,
  disabled: PropTypes.string,
  fetchTask: PropTypes.func,
  undoTask: PropTypes.func,
  edit: PropTypes.bool,
  task: PropTypes.shape({
    id: PropTypes.string,
    completionDate: PropTypes.string,
    creationDate: PropTypes.string,
    dueDate: PropTypes.string,
    title: PropTypes.string,
    isNotCompleted: PropTypes.bool,
  }).isRequired,
};
