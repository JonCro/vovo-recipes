import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <h1>Vovo's Family Recipes</h1>
        <h2>Meals to feed your family for generations</h2>
        <p>Check out all our <Link to="/recipes">recipes</Link></p>
      </div>
    </Layout>
  )
}

export default IndexPage;