import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './containers/Header.jsx';
import RoomsContainer from './containers/RoomsContainer.jsx';
import SourcesContainer from './containers/SourcesContainer.jsx';
import DevicesContainer from './containers/DevicesContainer.jsx';
import styles from './scss/app.scss'; /* eslint-disable-line */


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="content">
        <Header />
        <Route exact path="/" component={RoomsContainer} />
        <Route path="/sources" component={SourcesContainer} />
        <Route path="/devices" component={DevicesContainer} />
      </div>
    </BrowserRouter>
  </Provider>
);

render(<App />, document.getElementById('root'));
