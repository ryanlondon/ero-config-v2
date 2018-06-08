import React from 'react';
import PropTypes from 'prop-types'; /* eslint-disable-line */
import { connect } from 'react-redux';
import Logo from '../components/Logo.jsx';
import SystemSelect from '../components/SystemSelect.jsx';
import Navigation from '../components/Navigation.jsx';
import * as actions from '../actions';

const Header = ({ navigate, currentPage }) => (
  <header>
    <div className="header-left">
      <Logo />
      <SystemSelect />
    </div>
    <div className="header-right">
      <Navigation navigate={navigate} currentPage={currentPage} />
    </div>
  </header>
);

Header.propTypes = {
  navigate: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  currentPage: state.currentPage,
});

const mapDispatchToProps = dispatch => ({
  navigate: page => dispatch(actions.navigate(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
