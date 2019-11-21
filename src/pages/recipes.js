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
            tags,
            image {
              file {
                url
              }
            }
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
                <img src={post.node.image.file.url} alt="" />
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