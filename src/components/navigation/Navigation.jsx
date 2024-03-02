import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <ul className="flex">
        <li className="mr-4"><Link to="/"> Inicio </Link></li>
        <li className="mr-4"><Link to="/acercaDe"> Acerca de </Link></li>
        <li><Link to="/contacto">  Contacto </Link></li>
      </ul>
    </div>
  );
}

export default Navigation;
