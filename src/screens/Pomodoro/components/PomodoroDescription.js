import React from 'react';
import { Title } from 'src/commonComponents/texts/Title';
import { HAND_WRITING_TITLE_FONT } from 'src/styling/fonts';

export const PomodoroDescription = props => {
  const { color } = props;
  return (
    <React.Fragment>
      <Title color={color} fontFamily={HAND_WRITING_TITLE_FONT}>
        Pomodoro Clock
      </Title>
      <p>Press Space to start the timer & to pause it.</p>
      <p>Press R to retstart the timer</p>
      <p>Press L for a long break</p>
      <p>Press S for a short break</p>
    </React.Fragment>
  );
};
