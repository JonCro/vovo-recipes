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
          fields: date,
          order: DESC
        }
      ){
        edges {
          node {
            title,
            slug,
            tags,
            image {
              file {
                url
              }
            },
            contentful_id
          }
        }
      },
      allContentfulCategories {
        edges{
          node {
            type,
            recipes {
              title,
              slug
            },
            contentful_id
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title={`Recipes`} recipe={true} />
      <h1>Recipes</h1>
      <ol className={recipesStyles.recipes}>
          {data.allContentfulRecipes.edges.map(post => 
          (
            <li className={recipesStyles.card} key={post.node.contentful_id}>
              <Link to={`/recipes/${post.node.slug}`}>
                {post.node.image !== null ? <img src={post.node.image.file.url} alt="" /> : <p>no image</p>}
                <h2>{post.node.title}</h2>
                <div className={recipesStyles.cardMeta}>
                  <div>{post.node.tags.map(tag => 
                  <span className={recipesStyles.tags} key={tag}>{tag} </span>
                  )}</div>
                </div>
              </Link>
            </li>
          ))}
        </ol>
    </Layout>
  )
}

export default RecipesPage;