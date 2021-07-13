import React from 'react';
import { NavLink } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <ul className="gnb">
          <li className="gnb-menu">
            <NavLink to="/profile">About</NavLink>
          </li>
          <li className="gnb-menu">
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default AppHeader;
