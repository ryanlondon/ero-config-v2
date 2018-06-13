import React from 'react';
import NavLink from './NavLink.jsx';

const pages = ['rooms', 'sources', 'devices'];

const Navigation = ({ navigate, currentPage }) => (
  <ul className="nav">
    {pages.map(pageName => (
      <NavLink key={pageName} navigate={navigate} currentPage={currentPage} pageName={pageName} />
    ))}
  </ul>
);

export default Navigation;
