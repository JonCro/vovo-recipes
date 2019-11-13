import React from 'react';
import { Link } from 'gatsby';

import Header from '../components/header';
import Footer from '../components/footer';

const IndexPage = () => {
  return (
    <>
      <Header />
      <div>
        <h1>Vovo's Family Recipes</h1>
        <h2>Meals to feed your family for generations</h2>
        <p>Check out all our <Link to="/recipes">recipes</Link></p>
      </div>
      <Footer />
    </>
  )
}

export default IndexPage;