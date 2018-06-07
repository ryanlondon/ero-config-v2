import React, { Component } from 'react';
import Logo from '../components/Logo.jsx';
import SystemSelect from '../components/SystemSelect.jsx';
import Navigation from '../components/Navigation.jsx';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: 'rooms',
    };
  }

  shouldComponentUpdate(props) {
    return props.nav !== this.state.nav;
  }

  render() {
    return (
      <header>
        <div className="header-left">
          <Logo />
          <SystemSelect nav={this.state.nav} />
        </div>
        <div className="header-right">
          <Navigation />
        </div>
      </header>
    );
  }
}

export default Header;
