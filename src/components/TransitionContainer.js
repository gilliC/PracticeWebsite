import React from 'react';
import transition from 'styled-transition-group';
import {Container} from '../components/common_components';

export default class TransitionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.changeState = () => this.setState({show: !this.state.show});
  }
  componentDidMount() {
    this.changeState();
  }
  componentDidUpdate(props, prevstate) {
    if (props.children !== this.props.children) {
      this.changeState();
    }
  }
  render() {
    const {show} = this.state;
    switch (this.props.type) {
      case 'TranslateX':
        return (
          <TranslateX
            in={show}
            onExit={this.changeState}
            timeout={this.props.timeout || 1000}
            {...this.props}
          />
        );

      default:
        return (
          <FadeIn
            in={show}
            onExit={this.changeState}
            timeout={this.props.timeout || 1000}
            {...this.props}
          />
        );
    }
  }
}

const FadeIn = props => {
  return (
    <FadeInTrans {...props}>
      <Container>{props.children}</Container>
    </FadeInTrans>
  );
};
const TranslateX = props => {
  return (
    <TranslatexTrans transformInitial="translateX(300px)" {...props}>
      <Container>{props.children}</Container>
    </TranslatexTrans>
  );
};

const FadeInTrans = transition.div`
height:${props => props.height || '-webkit-fill-available'};
width:${props => props.width || '-webkit-fill-available'};
opacity: 1;
transition: opacity 1000ms ease-in;
transition-duration:${props => props.timeout + 'ms' || '800ms'};
`;

const TranslatexTrans = transition.div`
height:${props => props.height || '-webkit-fill-available'};
width:${props => props.width || '-webkit-fill-available'};
  &:enter {
    opacity: 0.01;
    transform: ${props => props.transformInitial || 'translateX(0)'}
  }
  &:enter-active {
    opacity: 1;
     transform: translateX(0);
    transition: all 1000ms ease-in;
    transition-duration: ${props => props.timeout + 'ms' || '1000ms'}
    transform: ${props => props.transformFinal || 'translateX(0)'}
  }
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0.01;
    transition: opacity 800ms ease-in;
  }
`;
