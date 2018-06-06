import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
  <header>
    <div className="header-top">
      <h1>Ero Config</h1>
      <div>
        <select id="project-select">
          <option>New Project</option>
          <option>Project 1</option>
        </select>
        <button id="project-load">Load</button>
      </div>
    </div>
    <div className="header-bottom">
      <ul className="nav">
        <li><Link to="/">Rooms</Link></li>
        <li><Link to="/sources">Sources</Link></li>
        <li><Link to="/devices">Devices</Link></li>
      </ul>
    </div>
  </header>
);

export default Header;
