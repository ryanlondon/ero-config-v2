import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import RoomsContainer from '../containers/RoomsContainer';
import SourcesContainer from '../containers/SourcesContainer';
import DevicesContainer from '../containers/DevicesContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="content">
          <Header />
          <Route exact path="/" component={RoomsContainer} />
          <Route path="/sources" component={SourcesContainer} />
          <Route path="/devices" component={DevicesContainer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;