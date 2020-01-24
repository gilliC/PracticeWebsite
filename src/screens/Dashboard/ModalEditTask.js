import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {Modal} from 'react-bootstrap';

import {formatDate} from '../../services/functions';
import DatePickerItem from '../../commonComponents/DatePickerItem';
import {
  ModalContainer,
  ModalBtnContainer,
  ModalButton,
} from './dashboard_components';

export default class ModalEditComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {show: false, date: '', error: ''};
    this.onDayChange = this.onDayChange.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  componentWillReceiveProps({show}) {
    this.setState({show});
  }

  validateCompletion(date) {
    if (moment(date).isValid()) {
      if (!moment().isBefore(date)) {
        return 'TRUE';
      } else return 'It is not ' + formatDate(date) + ' yet';
    } else return 'Please choose a date';
  }

  completeTask() {
    let answer = this.validateCompletion(this.state.date);
    if (answer === 'TRUE') {
      this.props.completeTaskHandler(this.state.date);
      this.props.handleClose();
    } else this.setState({error: answer});
  }
  //}

  onDayChange(date) {
    this.setState({date});
  }

  deleteTask() {
    this.props.deleteTaskHandler(this.props.task.id);
    this.props.handleClose();
  }

  render() {
    const {title, dueDate} = this.props.task;
    return (
      <ModalContainer show={this.state.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>
            <span className="bold"> Task: </span>
            {' ' + title}
          </h5>
          <h5>
            <span className="bold"> Due Date: </span>
            {' ' + dueDate}
          </h5>
          <h5>
            <span className="bold"> Completion Date: </span>
          </h5>
          <DatePickerItem
            onDayChange={this.onDayChange}
            placeholder="Enter completion day"
          />
          <p className="error">{this.state.error}</p>
        </Modal.Body>
        <ModalBtnContainer>
          <ModalButton size={4} onClick={this.props.handleClose} lefty>
            Close
          </ModalButton>
          <ModalButton MainButton size={4} onClick={this.completeTask}>
            Done
          </ModalButton>
          <ModalButton size={4} onClick={this.deleteTask}>
            Delete
          </ModalButton>
        </ModalBtnContainer>
      </ModalContainer>
    );
  }
}

ModalEditComponent.propTypes = {
  completeTaskHandler: PropTypes.func,
  deleteTaskHandler: PropTypes.func,
  handleClose: PropTypes.func,
  show: PropTypes.bool,
  task: PropTypes.shape({
    id: PropTypes.string,
    completionDate: PropTypes.string,
    creationDate: PropTypes.string,
    dueDate: PropTypes.string,
    title: PropTypes.string,
    isNotCompleted: PropTypes.bool,
  }).isRequired,
};
