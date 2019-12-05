import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import recipesStyles from '../pages/recipes.module.scss';
import Head from '../components/head';


export const query = graphql`
  query  ($slug: String!) {
    contentfulCategories  (
      slug: {
        eq: $slug
      }
    ){
      type,
      slug,
      recipes {
        title,
        slug,
        tags,
        ingredients {
          json
        },
        instructions {
          json
        },
        image {
          file {
            url
          }
        }
      },
      contentful_id
    }
  }
`

const tags = (props) => {
  const data = props.data.contentfulCategories;

  return (
    <Layout>
      <Head title={`Recipes - ${data.type}`} recipe={true} />
      <h1>Recipes - {data.type}</h1>
      <ol className={recipesStyles.recipes}>
        {data.recipes.map(recipe => (
          <li className={recipesStyles.card} >
            <Link to={`/recipes/${recipe.slug}`}>
              {recipe.image !== null ? <img src={recipe.image.file.url} alt="" /> : <p>no image</p>}
              <h2>{recipe.title}</h2>
              <div className={recipesStyles.cardMeta}>
                <div>{recipe.tags.map(tag => 
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

export default tags;