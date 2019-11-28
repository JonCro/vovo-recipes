import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


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
        slug
      },
      contentful_id
    }
  }
`

const tags = (props) => {
  const data = props.data.contentfulCategories;
  
  console.log(data)

  return (
    <>
      <h1>{data.type}</h1>
      <ol>
        {data.recipes.map(recipe => <li>{recipe.title}</li> )}
      </ol>
    </>
  )
}

export default tags;