import React from 'react';
import { Link } from 'gatsby';

import Header from '../components/header';

const IndexPage = () => {
  return (
    <>
      <Header />
      <div>
        <h1>Vovo's Family Recipes</h1>
        <h2>Meals to feed your family for generations</h2>
        <p>Check out all our <Link to="/recipes">recipes</Link></p>
      </div>
    </>
  )
}

export default IndexPage;