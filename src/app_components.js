import styled from 'styled-components';

export const primaryColor = '#FFC0CB';
export const secondaryColor = '#8CBCB9';
export const tertiaryColor = '#A4D4B4';

export function getWithOpacity(color, opacity) {
  if (typeof opacity !== 'number') return null;
  if (opacity > 1) return null;

  switch (color) {
    case 'primaryColor':
      return 'rgba(255,192,203,' + opacity + ')';
    case 'secondaryColor':
      return 'rgba(140,188,185,' + opacity + ')';
    case 'tertiaryColor':
      return 'rgba(164,212,180,' + opacity + ')';

    default:
      color = color.split(')');
      return 'rgba' + color[0] + ',' + opacity + ')';
  }
}

/////////////// DIVS /////////////
export const AppSideContainr = styled.div`
  width: ${props => (props.size ? (100 / 12) * props.size + '%' : '100%')};
  float: ${props => (props.float: 'none')};
  display: ${props => props.display || 'initial'};
  left: ${props => (props.left ? '0px' : 'auto')};
  right: ${props => (props.right ? '0px' : 'auto')};
  position: absolute;
  height: 100%;
  transition: all 1s;
`;

export const SidebarPush = styled.div`
  height: 100%;
  width: ${props => (props.size ? (100 / 12) * props.size + '%' : '100%')};
  min-width: 20px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: all 1s;
`;
