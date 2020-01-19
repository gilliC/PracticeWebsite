import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Doughnut} from 'react-chartjs-2';

import {secondaryColor} from '../../app_components';
import {parseToMoment, getWithOpacity} from '../../services/functions';
import { Title } from "../../components/texts/Title";
import {Container} from '../../components/Container';
export default class TasksPieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {data: this.props.data};
  }

  componentWillReceiveProps({data}) {
    this.setState({data});
  }

  countInfo() {
    const {data} = this.state;
    let count = [];
    count[0] = 0; //  on time
    count[1] = 0; // after due date
    for (let i = 0; i < data.length; i++) {
      if (!data[i].isNotCompleted) {
        let completionDate = parseToMoment(data[i].completionDate);
        let dueDate = parseToMoment(data[i].dueDate);
        if (completionDate.isBefore(dueDate)) count[0]++;
        else count[1]++;
      }
    }
    return count;
  }
  colorsWithOpacity(opacity) {
    let array = [];
    array[0] = getWithOpacity('primaryColor', opacity);
    array[1] = getWithOpacity('secondaryColor', opacity);
    array[2] = getWithOpacity('tertiaryColor', opacity);
    return array;
  }

  render() {
    let backgroundColors = this.colorsWithOpacity(0.6);
    let borderColors = this.colorsWithOpacity(1);
    let hoverBackgroundColors = this.colorsWithOpacity(0.9);
    const {data} = this.props;
    const tasksDone = this.countInfo();
    let tasksData = [
      tasksDone[0],
      data.length - tasksDone[0] - tasksDone[1],
      tasksDone[1],
    ];
    let chartData = {
      labels: ['Done on time', 'Need to be done', 'Done after due date'],
      datasets: [
        {
          label: 'Task completion counter',
          data: tasksData,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          hoverBackgroundColor: hoverBackgroundColors,
          borderWidth: 3,
        },
      ],
    };

    let options = {cutoutPercentage: 0, maintainAspectRatio: false};
    return (
      <Container>
        <Title
          fontFamily="Gloria Hallelujah"
          fontSize="2.5em"
          color={secondaryColor}>
          Tasks Completion counter:
        </Title>
        <Container>
          <Doughnut data={chartData} options={options} height={250} />
        </Container>
      </Container>
    );
  }
}
TasksPieChart.propTypes = {
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
