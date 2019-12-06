import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
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
        <h1>Vovo's Family Recipes</h1>
        <h2>Meals to feed your family for generations</h2>
        <p>Check out all our <Link to="/recipes">recipes</Link></p>
        <div>
          <h3>Most Recent Recipes</h3>
          <ol className={recipesStyles.recipes}>
            {
              recipes.map((recipe, i) => {
                if (i < 3) {
                  return (
                    <li className={recipesStyles.card} >
                      <Link to={`/recipes/${recipe.slug}`}>
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
                }
              })
            }
          </ol>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage;