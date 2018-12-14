import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import TasksListsItem from './TasksListsItem';
import ModalAddTask from './ModalAddTask';
import {
  TasksListContainer,
  Icon,
  DashboardTable,
  IconsContainer,
} from './dashboard_components';

import {parseToMoment} from '../services/functions';

export default class TasksList extends Component {
  constructor(props) {
    super(props);
    this.state = {data: this.props.data, edit: false, show: false};
    this.onClickEdit = this.onClickEdit.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillReceiveProps({data}) {
    this.setState({data});
  }

  analyzingData(data) {
    let arr = [];
    arr[0] = [];
    arr[1] = [];
    arr[2] = [];
    data.forEach(task => {
      if (!task.isNotCompleted) {
        let completionDate = parseToMoment(task.completionDate);
        let dueDate = parseToMoment(task.dueDate);
        if (moment(completionDate).isBefore(dueDate)) arr[0].push(task);
        else arr[1].push(task);
      } else {
        arr[2].push(task);
      }
    });
    return arr;
  }

  onClickEdit() {
    this.setState({edit: !this.state.edit});
  }
  onClickAdd() {
    this.setState({show: true});
  }
  handleClose() {
    this.setState({show: false});
  }

  render() {
    const {data, edit} = this.state;
    let analyzedData = this.analyzingData(data);
    return (
      <TasksListContainer edit={edit}>
        <DashboardTable>
          <tbody>
            <tr>
              <td colSpan="2" />
              <td>
                <IconsContainer>
                  <Icon
                    icon="edit"
                    title="Edit"
                    onClick={this.onClickEdit}
                    edit={edit}
                    left
                  />
                  <Icon
                    icon="plus"
                    title="Add"
                    onClick={this.onClickAdd}
                    edit={edit}
                    right
                  />
                </IconsContainer>
              </td>
            </tr>
            <tr>
              <th>Done on time</th>
              <th>Done after due date</th>
              <th>Need to be done</th>
            </tr>
            <tr>
              <td>
                <TasksListsItem edit={edit} data={analyzedData[0]} />
              </td>
              <td>
                <TasksListsItem edit={edit} data={analyzedData[1]} />
              </td>
              <td>
                <TasksListsItem edit={edit} data={analyzedData[2]} />
              </td>
            </tr>
          </tbody>
        </DashboardTable>
        <ModalAddTask show={this.state.show} handleClose={this.handleClose} />
      </TasksListContainer>
    );
  }
}
TasksList.propTypes = {
  data: PropTypes.arrayOf(
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
