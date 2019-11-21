import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from '../components/layout';
import recipesStyles from './recipes.module.scss';
import Head from '../components/head'

const RecipesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulRecipes (
        sort: {
          fields:date,
          order:DESC
        }
      ){
        edges {
          node {
            title,
            slug,
            date(formatString:"MMMM Do, YYYY"),
            tags
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Recipes" />
      <h1>Recipes</h1>
      <ol className={recipesStyles.recipes}>
          {data.allContentfulRecipes.edges.map(post => (
            <li className={recipesStyles.card} key={post.node.slug}>
              <Link to={`/recipes/${post.node.slug}`}>
                <h2>{post.node.title}</h2>
                <p>{post.node.date} <br /> {post.node.tags.map(tag => `tags: ${tag} `)}</p>
              </Link>
            </li>
          ))}
        </ol>
    </Layout>
  )
}

export default RecipesPage;