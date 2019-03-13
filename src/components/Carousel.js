import React, {Component} from 'react';

import {ColinRow, ComponentItem, CarouselRow, Arrow} from './common_components';
import TransitionContainer from './TransitionContainer';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {components: this.props.children, componentIndex: 0};
    this.onClick = this.onClick.bind(this);
  }

  showChild(id) {
    if (this.props.children !== undefined) {
      let component;
      if (Array.isArray(this.state.components))
        component = this.state.components[id];
      else component = this.state.components;
      return <ComponentItem component={component} index={id} key={id} />;
    }
  }
  componentWillReceiveProps({children}) {
    this.setState({
      components: children,
    });
  }

  onClick(e) {
    const control = e.currentTarget.dataset.name;
    const i = this.state.componentIndex;
    const compCount = this.state.components.length;
    if (control === 'right') {
      if (i + 1 < compCount)
        this.setState({
          componentIndex: i + 1,
        });
      else this.setState({componentIndex: 0});
    }
    if (control === 'left') {
      if (i - 1 >= 0) this.setState({componentIndex: i - 1});
      else this.setState({componentIndex: compCount - 1});
    }
  }

  render() {
    return (
      <CarouselRow>
        <ColinRow
          size={1}
          display="flex"
          onClick={this.onClick}
          data-name="left">
          <Arrow icon="arrow-right" rotation={180} />
        </ColinRow>
        <ColinRow size={10}>
          <TransitionContainer transformInitial="translateX(5px)">
            {this.showChild(this.state.componentIndex)}
          </TransitionContainer>
        </ColinRow>
        <ColinRow
          size={1}
          display="flex"
          onClick={this.onClick}
          data-name="right">
          <Arrow icon="arrow-right" />
        </ColinRow>
      </CarouselRow>
    );
  }
}

export default Carousel;
