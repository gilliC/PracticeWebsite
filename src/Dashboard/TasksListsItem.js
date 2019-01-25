import React from 'react';
import TaskItem from './TaskItem';
import styled from 'styled-components';

export default props => {
  return (
    <div>
      <h3>{props.title}</h3>
      <StyledUl>
        {props.data.map(task => {
          return (
            <TaskItem
              edit={props.edit}
              task={task}
              onChangeTasks={props.onChangeTasks}
              key={task.title}
              disabled={props.edit ? '' : 'disabled'}
            />
          );
        })}
      </StyledUl>
    </div>
  );
};

const StyledUl = styled.ul`
  padding: 0;
`;
