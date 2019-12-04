import React from 'react';
import { graphql, Link } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';
import Submenu from '../components/submenu';
import blogStyles from '../pages/blog.module.scss';
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
  
  console.log(data)

  return (
    <Layout>
      <Head title={`${data.type} | Vovo's Family Recipes`} recipe={true} />
      <h1>{data.type}</h1>
      <ol>
        {data.recipes.map(recipe => <Link to={`/recipes/${recipe.slug}`}><li>{recipe.title}</li></Link> )}
      </ol>
    </Layout>
  )
}

export default tags;