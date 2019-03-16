import styled from 'styled-components';
import {primaryColor} from '../../app_components';
import React from 'react';
import {
  MainText,
  MainButton,
  Title,
  MainButtonGroup,
} from '../../components/common_components';
import {lightOrDark} from './convertingFunctions';

export const BackgroundColorHalfDiv = styled.div`
  height: 150px;
  width: 350px;
  background-color: ${props => props.bgColor || primaryColor};
  align-items: center;
  display: flex;
  justify-content: center;
  display: -webkit-flex;
  -webkit-align-items: center;
  border-bottom-right-radius: ${props => (props.right ? '90px' : 'none')};
  border-top-right-radius: ${props => (props.right ? '90px' : 'none')};
  border-bottom-left-radius: ${props => (props.left ? '90px' : 'none')};
  border-top-left-radius: ${props => (props.left ? '90px' : 'none')};
  transition: all 2s;
`;
export const BackgroundColorFullDiv = styled.div`
  height: 150px;
  width: 700px;
  background-color: ${props => props.bgColor || primaryColor};
  align-items: center;
  display: flex;
  justify-content: center;
  display: -webkit-flex;
  -webkit-align-items: center;
  border-bottom-right-radius: 90px;
  border-top-right-radius: 90px;
  border-bottom-left-radius: 90px;
  border-top-left-radius: 90px;
  transition: all 2s;
`;

export const ColorsConverterInput = props => {
  if (!props.color) return <InputForColor {...props} />;
  if (lightOrDark(props.color) === 'super light')
    return <InputForLightColor {...props} />;
  else {
    return <InputForColor {...props} />;
  }
};

const InputForColor = styled.input`
  width: 50%;
  padding: 15px;
  color: ${props => props.color || primaryColor};
  font-size: ${props => props.fontSize || '2em'};
  text-align: center;
  border: none;
  border-bottom: 2px dashed ${primaryColor};
  border-color: ${props => props.color || primaryColor};
  font-weight: bold;
  font-weight: bold;
  :focus {
    outline: 0 !important;
  }
`;
const InputForLightColor = styled(InputForColor)`
  border-color: black;
  color: black;
`;
export const ColorsConverterTitle = props => {
  if (lightOrDark(props.color) === 'super light') {
    return (
      <Title {...props} color="black">
        {props.children}
      </Title>
    );
  } else
    return (
      <Title {...props} color="white">
        {props.children}
      </Title>
    );
};

export const ColorsConverterButton = props => {
  if (!props.color) return <MainButton {...props}>{props.children}</MainButton>;
  if (lightOrDark(props.color) === 'super light')
    return (
      <ButtonForLightColor {...props}>{props.children}</ButtonForLightColor>
    );
  else {
    return <MainButton {...props}>{props.children}</MainButton>;
  }
};
const ButtonForLightColor = styled(MainButton)`
  background-color: ${props => props.color || primaryColor};
  color: black;
  border-color: black;
  :hover {
    color: black;
  }
`;

export const BiggerText = props => {
  if (!props.color)
    return <BiggerTextStyle {...props}>{props.text}</BiggerTextStyle>;
  if (lightOrDark(props.color) === 'super light')
    return <BiggerTextStyle color="black">{props.children}</BiggerTextStyle>;
  else return <BiggerTextStyle {...props}>{props.children}</BiggerTextStyle>;
};
const BiggerTextStyle = styled(MainText)`
  padding: 10px;
  font-size: 1.7em;
`;

export const ColorsConverterButtonGroup = styled(MainButtonGroup)`
  margin-top: 30px;
`;