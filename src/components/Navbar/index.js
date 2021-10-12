import React from 'react';

import { NavLink } from 'react-router-dom';

import './styles.scss';

const Navbar = () => (
  <div className="nav fw">
    <ul className="nav-links">
      <li>
        <NavLink exact to="/" className="link">Home</NavLink>
      </li>
      <li>
        <NavLink to="/users" className="link">Users</NavLink>
      </li>
    </ul>
  </div>
)

export default Navbar;