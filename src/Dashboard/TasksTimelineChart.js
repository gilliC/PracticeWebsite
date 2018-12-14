import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Bar} from 'react-chartjs-2';

import {parseToMoment} from '../services/functions';
import {getWithOpacity, secondaryColor} from '../app_components';
import {Title, Container} from '../components/common_components';

export default class TasksTimeLine extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {data: this.props.data};
  }

  componentWillReceiveProps({data}) {
    this.setState({data});
  }

  calculateData() {
    const tasksList = this.state.data;
    let createdObject = {};
    let completionObject = {};
    let month;
    for (let i = 0; i < tasksList.length; i++) {
      month = parseToMoment(tasksList[i].creationDate).format('MM/YYYY');
      if (createdObject[month] >= 1) createdObject[month]++;
      else createdObject[month] = 1;
      if (!completionObject[month] >= 1) completionObject[month] = 0;
      if (tasksList[i].completionDate) {
        month = parseToMoment(tasksList[i].completionDate).format('MM/YYYY');
        if (completionObject[month] >= 1) completionObject[month]++;
        else completionObject[month] = 1;
      }
    }
    return [createdObject, completionObject];
  }

  getColors(color) {
    let arr = [];
    arr[0] = getWithOpacity(color, 0.7);
    arr[1] = getWithOpacity(color, 1);
    arr[2] = getWithOpacity(color, 0.3);
    return arr;
  }

  render() {
    let data = this.calculateData();
    console.log(data);
    let createdTasks = [];
    let complitedTasks = [];
    createdTasks[0] = Object.keys(data[0]);
    createdTasks[1] = Object.values(data[0]);
    complitedTasks[0] = Object.keys(data[1]);
    complitedTasks[1] = Object.values(data[1]);

    let createdColoring = this.getColors('primaryColor');
    let completedColoring = this.getColors('tertiaryColor');
    let chartData = {
      labels: createdTasks[0],
      datasets: [
        {
          label: 'Created',
          data: createdTasks[1],
          backgroundColor: completedColoring[0],
          borderColor: completedColoring[1],
          hoverBackgroundColor: completedColoring[2],
          borderWidth: 3,
        },
        {
          label: 'Complited',
          data: complitedTasks[1],
          backgroundColor: createdColoring[0],
          borderColor: createdColoring[1],
          hoverBackgroundColor: createdColoring[2],
          borderWidth: 3,
        },
      ],
    };
    let options = {maintainAspectRatio: false};
    return (
      <Container>
        <Title
          fontFamily="Gloria Hallelujah"
          fontSize="2.5em"
          color={secondaryColor}>
          Tasks Creation & Completion
        </Title>
        <Container>
          <Bar data={chartData} options={options} height={250} />
        </Container>
      </Container>
    );
  }
}
TasksTimeLine.propTypes = {
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
