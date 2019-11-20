import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from '../components/layout';
import blogStyles from './blog.module.scss';
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
      <ol className={blogStyles.posts}>
          {data.allContentfulRecipes.edges.map(post => (
            <li className={blogStyles.post}>
              <Link to={`/recipes/${post.node.slug}`}>
                <h2>{post.node.title}</h2>
                <p>{post.node.date} ~ {post.node.tags}</p>
              </Link>
            </li>
          ))}
        </ol>
    </Layout>
  )
}

export default RecipesPage;