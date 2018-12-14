import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faEdit,
  faPlus,
  faArrowRight,
  faHome,
  faChartPie,
} from '@fortawesome/free-solid-svg-icons';

import store from './services/configureStore';
import Sidebar from './Sidebar/Sidebar';
import Routing from './services/routing';
import {ContainerRow} from './components/common_components';
import {AppSideContainr, SidebarPush} from './app_components';

import './App.css';

library.add(fab, faBars, faEdit, faPlus, faArrowRight, faHome, faChartPie);
class App extends Component {
  constructor(props) {
    super(props);
    let myStore = store();
    this.state = {closed: true, store: myStore};

    this.clickedSB = this.clickedSB.bind(this);
  }
  clickedSB() {
    this.setState({closed: !this.state.closed});
  }

  render() {
    const {closed, store} = this.state;
    let size = closed ? 0.5 : 2;
    return (
      <Provider store={store}>
        <Router>
          <ContainerRow align="initial">
            <SidebarPush left size={size} onClick={this.clickedSB}>
              <Sidebar closed={closed} />
            </SidebarPush>
            <AppSideContainr right size={11 - size}>
              <Routing />
            </AppSideContainr>
          </ContainerRow>
        </Router>
      </Provider>
    );
  }
}

export default App;
