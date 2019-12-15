import React from 'react';
import { graphql, Link } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';
import recipeStyles from '../pages/recipe.module.scss';
import Head from '../components/head';

export const query = graphql`
  query ($slug: String!) {
    contentfulRecipes (
        slug: {
          eq: $slug
        }
    ) 
    {
      title,
      tags,
      categories {
        type,
        slug
      },
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
    }
  }
`

const Recipes = (props) => {
  console.log(props)
  const data = props.data.contentfulRecipes;
  // console.log('recipes template')
  // console.log(data)
  return (
    <Layout>
      <Head title={`${data.title}`} recipe={true} />
      <h1>{data.title}</h1>
      {data.image !== null ? <img src={data.image.file.url} alt="" /> : <p>no image</p>}
      <div className={recipeStyles.meta}>
        <span className={recipeStyles.tags}>tags</span>
        {data.categories.map((data, i) => {
          return (
            <Link to={`/recipes/tags/${data.slug}`} ><span className={recipeStyles.tag}>{data.type}</span></Link>
          )
        })}
      </div>
      <h3>Ingredients</h3>
      <div>{documentToReactComponents(data.ingredients.json)}</div>
      <h3>Instructions</h3>
      <div>{documentToReactComponents(data.instructions.json)}</div>
    </Layout>
  )
}

export default Recipes