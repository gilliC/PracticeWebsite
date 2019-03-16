import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Bar} from 'react-chartjs-2';

import {secondaryColor} from '../../app_components';
import {parseToMoment, getWithOpacity} from '../../services/functions';
import {Title, Container} from '../../components/common_components';

const dataArrayEnums = {
  labels: 0,
  values: 1,
};

export default class TasksTimeLine extends Component {
  constructor(props) {
    super(props);
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
      month = parseToMoment(tasksList[i].creationDate).format('YYYY  MM');
      if (createdObject[month] >= 1) createdObject[month]++;
      else createdObject[month] = 1;
      if (!completionObject[month] >= 1) completionObject[month] = 0;
      if (tasksList[i].completionDate) {
        month = parseToMoment(tasksList[i].completionDate).format('YYYY  MM');
        if (completionObject[month] >= 1) completionObject[month]++;
        else completionObject[month] = 1;
      }
    }
    createdObject = this.sortData(createdObject);
    completionObject = this.sortData(completionObject);
    return [createdObject, completionObject];
  }
  sortData(data) {
    let ordered = {};
    Object.keys(data)
      .sort()
      .forEach(function(key) {
        ordered[key] = data[key];
      });
    return ordered;
  }

  getColors(color) {
    let arr = [];
    arr[0] = getWithOpacity(color, 0.7);
    arr[1] = getWithOpacity(color, 1);
    arr[2] = getWithOpacity(color, 0.3);
    return arr;
  }
  setDataForDisplay(tasks) {
    let displayedData = [];
    const {labels, values} = dataArrayEnums;
    displayedData[labels] = Object.keys(tasks).map(date => {
      return parseToMoment(date, 'YYYY MM').format('MMMM YYYY');
    });
    displayedData[values] = Object.values(tasks);
    return displayedData;
  }
  render() {
    let data = this.calculateData();
    const {labels, values} = dataArrayEnums;
    let createdTasks = this.setDataForDisplay(data[labels]);
    let complitedTasks = this.setDataForDisplay(data[values]);
    let createdColoring = this.getColors('primaryColor');
    let completedColoring = this.getColors('tertiaryColor');
    let chartData = {
      labels: createdTasks[labels],
      datasets: [
        {
          label: 'Created',
          data: createdTasks[values],
          backgroundColor: completedColoring[0],
          borderColor: completedColoring[1],
          hoverBackgroundColor: completedColoring[2],
          borderWidth: 3,
        },
        {
          label: 'Completed',
          data: complitedTasks[values],
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
