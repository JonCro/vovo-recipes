import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header>
      <h1>Vovo's Family Recipes</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='/recipes'>Recipes</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;