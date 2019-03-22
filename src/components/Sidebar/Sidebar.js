import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {HidingComponent} from './sidebar_components';
import Link from './LinkItem';
export default props => {
  const pages = [
    {
      href: '/',
      title: 'Home',
      icon: 'home',
    },
    {
      href: '/bookmark',
      title: 'Bookmark',
      icon: 'newspaper',
    },
    {
      href: '/dashboard',
      title: 'Dashboard',
      icon: 'chart-pie',
    },
    {
      href: '/pomodoro',
      title: 'Pomodoro',
      icon: 'clock',
    },
    {
      href: '/colorsconverter',
      title: 'Colors Converter',
      icon: 'palette',
    },
  ];
  let pagesComponents = pages.map((page, index) => {
    return <Link {...page} key={index} />;
  });
  return (
    <SideBarContainer hide={props.closed}>
      <Icon
        icon="arrow-right"
        hide={props.closed.toString()}
        rotation={props.closed ? null : 180}
      />
      <HidingComponent hide={props.closed}>{pagesComponents}</HidingComponent>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  height: 100%;
  background-color: pink;
  cursor: ${props => (props.hide ? 'pointer' : 'auto')};
`;

const Icon = styled(FontAwesomeIcon)`
  color: white;
  justifyself: center;
  padding: 5px;
  font-size: 2.5em;
  transition: all 1s;
`;
