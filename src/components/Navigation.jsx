import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <ul className="nav">
    <li><Link to="/">Rooms</Link></li>
    <li><Link to="/sources">Sources</Link></li>
    <li><Link to="/devices">Devices</Link></li>
  </ul>
);

export default Navigation;
