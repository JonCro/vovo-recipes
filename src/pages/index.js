import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import indexStyles from './index.module.scss';
import recipesStyles from '../pages/recipes.module.scss';
import Head from '../components/head'


export const query = graphql`
  query {
    allContentfulRecipes (
      sort: {
        fields: date,
        order: DESC
      })
      {
      edges {
        node {
          title,
          slug,
          tags,
          date(formatString:"MM/DD/YYYY"),
          image {
            file {
              url
            }
          },
          contentful_id
        }
      }
    }
  }
`

const IndexPage = (props) => {
  const recipes = props.data.allContentfulRecipes.edges;
  return (
    <Layout>
      <Head title="Home" />
      <div>
        <h1 className={indexStyles.tagline}>Meals to feed your family for generations</h1>
        <section>
          <h3>Most Recent Recipes</h3>
          <ol className={recipesStyles.recipes}>
            {
              recipes.map((recipe, i) => {
                if (i < 3) {
                  return (
                    <li className={recipesStyles.card} key={recipe.node.contentful_id}>
                      <Link to={`/recipes/${recipe.node.slug}`}>
                      {recipe.node.image !== null ? <img src={recipe.node.image.file.url} alt="" /> : <p>no image</p>}
                        <h2>{recipe.node.title}</h2>
                        <div className={recipesStyles.cardMeta}>
                          <div>
                            {recipe.node.tags.map(tag => 
                            <span className={recipesStyles.tags} key={tag}>{tag} </span>
                            )}
                          </div>
                        </div>
                      </Link>
                    </li>
                  )
                } return null
              })
            }
          </ol>
        </section>
        <p>Check out all of our <Link to="/recipes">recipes</Link>.</p>
      </div>
    </Layout>
  )
}

export default IndexPage;