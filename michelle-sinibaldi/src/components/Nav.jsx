import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import menu from '../images/icon_menu.png';

import '../css/Nav.css';

class Nav extends Component {
  render() {
    return (
      <header>
        <input type="checkbox" id="check"/>
        <label htmlFor="check">
          <img src={menu} alt="menu" id="menu"/>
        </label>
        <nav>
          <ul>
            <li>
              <Link to="/">Sobre mim</Link>
            </li>
            <li>
              <a href="#footer">Contatos</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Nav;