import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './containers/Header.jsx';
import RoomsContainer from './containers/RoomsContainer.jsx';
import SourcesContainer from './containers/SourcesContainer.jsx';
import DevicesContainer from './containers/DevicesContainer.jsx';

const App = () => (
  <BrowserRouter>
    <div className="content">
      <Header />
      <Route exact path="/" component={RoomsContainer} />
      <Route path="/sources" component={SourcesContainer} />
      <Route path="/devices" component={DevicesContainer} />
    </div>
  </BrowserRouter>
);

export default App;
