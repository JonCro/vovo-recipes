import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <div>
        <h1>Vovo's Family Recipes</h1>
        <h2>Meals to feed your family for generations</h2>
        <p>Check out all our <Link to="/recipes">recipes</Link></p>
      </div>
    </Layout>
  )
}

export default IndexPage;