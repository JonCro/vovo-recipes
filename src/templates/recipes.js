import React from 'react'
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';
import Head from '../components/head'

export const query = graphql`
  query ($slug: String!) {
    contentfulRecipes (
        slug: {
          eq: $slug
        }
    ) {
        title,
        date(formatString: "MMMM Do, YYYY"),
        ingredients {
          json
        },
        instructions {
          json
        }
    }
  }
`

const Recipes = (props) => {

  return (
    <Layout>
      <Head title={props.data.contentfulRecipes.title} />
      <h1>{props.data.contentfulRecipes.title}</h1>
      <p>{props.data.contentfulRecipes.publishedDate}</p>
      <h3>Ingredients</h3>
      <div>{documentToReactComponents(props.data.contentfulRecipes.ingredients.json)}</div>
      <h3>Instructions</h3>
      <div>{documentToReactComponents(props.data.contentfulRecipes.instructions.json)}</div>
    </Layout>
  )
}

export default Recipes