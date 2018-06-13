import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ navigate, currentPage, pageName }) => (
  <li>
    <Link
        to={pageName === 'rooms' ? '/' : `/${pageName}`}
        className={currentPage === pageName ? 'active' : ''}
        onClick={() => navigate(pageName)}
    >
      {pageName}
    </Link>
  </li>
);

export default NavLink;
