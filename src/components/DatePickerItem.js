import React, {Component} from 'react';
import styled from 'styled-components';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';
import {primaryColor, tertiaryColor} from '../app_components';
import {MainInput} from './common_components';

import {formatDate, parseDate} from '../services/functions';
import 'moment/locale/it';

export default class extends Component {
  render() {
    return (
      <StyledDayPickerInput>
        <DayPickerInput
          dayPickerProps={{
            showOutsideDays: true,
            todayButton: 'Today',
          }}
          component={MainInput}
          formatDate={formatDate}
          parseDate={parseDate}
          placeholder={this.props.placeholder || '  Enter date'}
          onDayChange={this.props.onDayChange}
        />
      </StyledDayPickerInput>
    );
  }
}

const StyledDayPickerInput = styled.div`
  .DayPicker-TodayButton {
    border: none;
    background-image: none;
    background-color: transparent;
    box-shadow: none;
    cursor: pointer;
    color: ${primaryColor};
    font-size: 0.875em;
  }

  .DayPicker-Day--today {
    color: ${primaryColor};
    font-weight: 700;
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
    color: white;
    background-color: ${tertiaryColor};
    border-color: ${tertiaryColor};
    border-radius: 0;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background-color: ${tertiaryColor};
    color: white;
  }
  .DayPickerInput {
    width: 100%;
  }

  .DayPickerInput-Overlay {
    left: 0;
    z-index: 1;
    position: absolute;
    background: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    position: relative;
    color: white;
    background-color: ${tertiaryColor};
    border-color: ${tertiaryColor};
    border-radius: 0;
  }

  .DPContainer {
    box-shadow: 1px 7px 5px 3px ${primaryColor};
  }
`;
