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
            date(formatString:"MMMM Do, YYYY"),
            tags,
            image {
              file {
                url
              }
            }
          }
        }
      },
      allContentfulCategories {
        edges{
          node {
            type
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Recipes" />
      <nav className={recipesStyles.categoriesNav}>
        <h5>Sort by category</h5>
        <ul className={recipesStyles.categoriesList}>
          {data.allContentfulCategories.edges.map(tags =>
            (
              <li>{tags.node.type}</li>
            )
          )}
        </ul>
      </nav>
      <h1>Recipes</h1>
      <ol className={recipesStyles.recipes}>
          {data.allContentfulRecipes.edges.map(post => 
          (
            <li className={recipesStyles.card} key={post.node.slug}>
              <Link to={`/recipes/${post.node.slug}`}>
                {post.node.image !== null ? <img src={post.node.image.file.url} alt="" /> : <p>no image</p>}
                <h2>{post.node.title}</h2>
                <div className={recipesStyles.cardMeta}>
                  <p>{post.node.date}</p>
                  <div>{post.node.tags.map(tag => 
                  <span className={recipesStyles.tags}>{tag} </span>
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