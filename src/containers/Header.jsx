import React, { Component } from 'react';
import PropTypes from 'prop-types'; /* eslint-disable-line */
import { connect } from 'react-redux';
import Logo from '../components/Logo.jsx';
import SystemSelect from '../components/SystemSelect.jsx';
import Navigation from '../components/Navigation.jsx';
import * as actions from '../actions';


class Header extends Component {
  componentDidMount() {
    const { fetchSystems } = this.props;
    fetchSystems();
  }

  shouldComponentUpdate(prevProps) {
    return prevProps !== this.props;
  }

  render() {
    const { currentPage, navigate, systems } = this.props;
    return (
      <header>
        <div className="header-left">
          <Logo />
          <SystemSelect systems={systems} />
        </div>
        <div className="header-right">
          <Navigation navigate={navigate} currentPage={currentPage} />
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  navigate: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired,
  fetchSystems: PropTypes.func.isRequired,
  systems: PropTypes.array.isRequired,
};

const mapStateToProps = store => ({
  currentPage: store.navigation.currentPage,
  systems: store.systems,
});

const mapDispatchToProps = dispatch => ({
  navigate: page => dispatch(actions.navigate(page)),
  fetchSystems: () => dispatch(actions.fetchSystems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
