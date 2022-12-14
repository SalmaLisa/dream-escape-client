import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import img from '../../image/logo.png'

const Navbar = () => {
  return (
    <div className="navbar absolute top-0 ">
  <div className="flex-1">
    <Link className="btn btn-ghost normal-case text-xl ">daisyUI</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><Link>Item 1</Link></li>
      <li tabIndex={0}>
        <Link>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
        <ul className="p-2 bg-gray-500">
          <li><Link>Submenu 1</Link></li>
          <li><Link>Submenu 2</Link></li>
        </ul>
      </li>
      <li><Link>Item 3</Link></li>
    </ul>
  </div>
</div>
  );
};

export default Navbar;