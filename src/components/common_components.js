import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {ToggleButtonGroup, ToggleButton} from 'react-bootstrap';
import {primaryColor, secondaryColor} from '../app_components';

/////////////// DIVS /////////////
export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  display: -webkit-flex;
  -webkit-align-items: center;
  flex-direction: column;
  height: ${props => props.height || '100%'};
  width: ${props => props.height || '100%'};
`;
export const ContainerRow = styled.div`
  flex-direction: row;
  align-items: ${props => props.align || 'center'};
  -webkit-align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justifySelf || 'center'};
  display: flex;
  display: -webkit-flex;
  height: ${props => props.height || '100%'};
`;
export const ColinRow = styled.div`
  width: ${props => (props.size ? (100 / 12) * props.size + '%' : '100%')};
  float: ${props => (props.float: 'none')};
  display: ${props => props.display || 'initial'};
`;

/////////////// TITLES & TEXTS/////////////
export const Title = styled.h1`
  font-size: ${props => props.fontSize || '5em'};
  text-align: ${props => props.textAlign || 'center'};
  font-family: ${props => props.fontFamily || 'Abel'};
  color: ${props => props.color || 'black'};
  cursor: default;
`;

export const MainText = styled.p`
  font-size: ${props => props.fontSize || '1.5em'};
  text-align: ${props => props.textAlign || 'center'};
  font-family: ${props => props.fontFamily || 'Comfortaa'};
  color: ${props => props.color || 'black'};
  cursor: default;
`;
export const BoldText = styled.span`
  font-weight: underline;
`;

/////////////// INPUTS /////////////
export const MainInput = styled.input`
  height: 30px;
  width: ${props => (props.size ? (100 / 12) * props.size + '%' : '100%')};
  color: ${props => props.color || primaryColor};
  background-color: white;
  margin-left: 0;
  margin-top: 5px;
  padding: 15px;
  border: 2px solid ${primaryColor};
  border-color: ${props => props.color || primaryColor};
  border-radius: 4px;
  font-weight: bold;
  :focus {
    outline: 0 !important;
  }
`;
export const MainButton = styled.button`
  background-color: white;
  color: ${props => props.color || primaryColor};
  margin-bottom: 10px;
  padding: 6px 24px;
  border: 2px solid ${primaryColor};
  border-color: ${props => props.color || primaryColor};
  border-radius: 4px;
  text-align: center;
  font-family: Abel;
  font-size: 1.5em;
  font-weight: bold;
  :focus {
    outline: 0 !important;
  }
  :hover {
    color: white;
    background-color: ${props => props.color || primaryColor};
    transition: all 0.5s;
  }
`;

export const MainButtonGroup = styled(ToggleButtonGroup)`
  width: 80%;
  max-width: 700px;
  label.active {
    border-color: transparent;
    outline: 0 !important;
    color: white;
    background-color: ${props => props.color || primaryColor};
    transition: all 0.5s;
    :hover {
      border-color: transparent;
      outline: 0 !important;
      color: white;
      background-color: ${props => props.color || primaryColor};
      transition: all 0.5s;
    }
  }
`;

export const MainBGSingleButton = styled(ToggleButton)`
  width: ${props => (props.size ? 100 / props.size + '%' : '100%')};
  height: ${props => props.height || '75px'};
  color: ${props => props.color || primaryColor};
  border: 2px solid ${primaryColor};
  border-color: ${props => props.color || primaryColor};
  align-items: center;
  display: flex;
  justify-content: center;
  display: -webkit-flex;
  -webkit-align-items: center;
  flex-direction: column;

  :hover {
    border-color: transparent;
    outline: 0 !important;
    color: white;
    background-color: ${props => props.color || primaryColor};
    transition: all 0.5s;
  }
`;
/////////////// CAROUSEL /////////////
export const ComponentItem = ({component}) => {
  return <div>{component} </div>;
};

export const CarouselRow = styled.div`
  min-width: 400px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  :not([class]) {
    width: 100%;
  }
`;

export const Arrow = styled(FontAwesomeIcon)`
  font-size: 4em;
  color: ${secondaryColor};
  align-self: center;
  cursor: pointer;
`;
