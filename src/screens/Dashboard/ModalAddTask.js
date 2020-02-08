import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Modal} from 'react-bootstrap';
import moment from 'moment';

import {addTask} from './reduxFiles/dashboardActions';
import {formatDate} from '../../services/functions';
import DatePickerItem from '../../commonComponents/DatePickerItem';
import {MainInput} from '../../commonComponents/common_components';
import {
  ModalContainer,
  ModalBtnContainer,
  ModalButton,
} from './dashboard_components';

class ModalAddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {show: false, date: '', error: ''};
    this.addTask = this.addTask.bind(this);
    this.onDayChange = this.onDayChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillReceiveProps({show}) {
    this.setState({show});
  }
  validateTask(title, dueDate) {
    if (title !== '') {
      if (moment(dueDate).isValid()) {
        if (moment().isBefore(dueDate)) {
          return 'TRUE';
        } else {
          return 'Due date must be after today';
        }
      } else {
        return "You haven't chose a due date";
      }
    } else {
      return 'You must enter a task';
    }
  }

  addTask(e) {
    e.preventDefault();
    let title = this.inputEl.value;
    let dueDate = this.state.date;
    let answer = this.validateTask(title, dueDate);
    if (answer === 'TRUE') {
      let task = {
        title: title,
        isNotCompleted: true,
        dueDate: formatDate(dueDate),
        completionDate: '',
        creationDate: formatDate(moment()),
      };
      this.props.addTask(task);
      this.props.handleClose();
    } else {
      this.setState({error: answer});
    }
  }

  onDayChange(day) {
    this.setState({date: day});
  }
  handleClose() {
    this.setState({date: '', error: ''});
    this.props.handleClose();
  }

  render() {
    const {show, error} = this.state;
    return (
      <ModalContainer show={show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MainInput
            type="text"
            placeholder="  Enter task"
            ref={el => (this.inputEl = el)}
          />
          <DatePickerItem
            onDayChange={this.onDayChange}
            placeholder="  Enter due date"
          />
          <p className="error">{error}</p>
        </Modal.Body>
        <ModalBtnContainer>
          <ModalButton size={12} onClick={this.addTask} lefty>
            Add
          </ModalButton>
        </ModalBtnContainer>
      </ModalContainer>
    );
  }
}

export default connect(
  null,
  {addTask},
)(ModalAddComponent);

ModalAddComponent.propTypes = {
  addTask: PropTypes.func,
  handleClose: PropTypes.func,
  show: PropTypes.bool,
};
