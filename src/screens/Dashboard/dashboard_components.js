import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { primaryColor, secondaryColor } from '../../app_components';
import {
  ContainerRow,
  MainButton,
} from '../../commonComponents/common_components';
import { getWithOpacity } from '../../services/functions';
import { ColinRow } from '../../commonComponents/views/ColInRow';
///////////// ANIMATIONS /////////////

export const completeTask = styled(keyframes)` 
  from {
    background-color: inherit;
  }
  to {
    background-color: ${primaryColor};
  }
}`;

///////////// DIVS /////////////
export const DashboardContainer = styled.div`
  width: ${props => (props.size ? (100 / 12) * props.size + '%' : '100%')};
  float: ${props => props.float || 'none'};
`;

export const DashboardSecondPart = styled(ColinRow)`
  margin-right: 30px;
  margin-top: 20px;
`;
export const TasksListContainer = styled.div`
  position: relative;
  margin-top: 50px;
  padding: 10px;
  width: 100%;
  border-style: solid;
  border-width: 1px;
  border-color: ${props => (props.edit ? secondaryColor : `transparent`)};

  p,
  th {
    color: ${props => (props.edit ? secondaryColor : `black`)};
    transition: all 1s;
  }
`;
export const DashboardTable = styled.table`
  td,
  th {
    margin: 0;
    width: ${4 / 12}%;
    vertical-align: top;
    font-size: 18px;
    font-family: Abel;
    text-align: center;
    font-weight: 900;
  }
`;
export const ModalContainer = styled(Modal)`
  .modal-body {
    padding-bottom: 0;
  }
  h5 {
    font-family: Abel;
    font-size: 1.5em;
  }
  h4 {
    font-family: Abel;
    text-align: center;
  }
  .bold {
    font-weight: bold;
  }
  .error {
    font-family: Abel;
    text-align: center;
    font-weight: bold;
    color: red;
  }
`;
export const ModalBtnContainer = styled(ContainerRow)`
  padding: 15px;
`;

export const IconsContainer = styled.div`
  flex-direction: row;
  display: flex;
  display: -webkit-flex;
  float: right;
  margin-right: 10px;
`;

///////////// LI /////////////
export const Task = styled.li`
    list-style-type: none;
    margin: 5px;
    padding: 15px;
    border-color:${props => (props.edit ? secondaryColor : primaryColor)};
    border-style: solid;
    border-width:${props => (props.isNotCompleted ? '2px' : '0px')};
    background-color: ${props =>
      props.isNotCompleted
        ? `initial`
        : props.edit
        ? getWithOpacity('secondaryColor', 0.3)
        : getWithOpacity('primaryColor', 0.3)};
    text-decoration: ${props =>
      props.isNotCompleted ? `none` : `line-through`};
    transition:all .5s;
    animation-name:${props => (props.isClicked ? completeTask : 'none')};
    animation-duration:1s;
    animation-timing-function:linear;
    &:hover:not(.disabled) {
      background-color: ${getWithOpacity('secondaryColor', 0.5)};
      cursor: pointer;
    }
    h4,p {
      font-family: Abel;
      text-align:center;
      margin:0;
      font-weight: 500;
      color:black;
    }
    h4{font-size:18px;}
  }
`;
///////////// INPUTS /////////////
export const ModalButton = styled(MainButton)`
  width: ${props => (props.size ? (100 / 12) * props.size + '%' : '100%')};
  margin-left: ${props => (props.lefty ? `0` : `5px`)};
`;
///////////// ICONS /////////////

const IconDiv = styled.div`
  cursor: pointer;
  padding: 10px;
  p {
    font-family: Abel;
  }
`;
export const Icon = props => {
  let color = props.edit ? secondaryColor : primaryColor;
  return (
    <IconDiv onClick={props.onClick} left={props.left} right={props.right}>
      <FontAwesomeIcon size="2x" icon={props.icon} color={color} />
      <p>{props.title}</p>
    </IconDiv>
  );
};
