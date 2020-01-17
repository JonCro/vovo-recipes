import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import recipeStyles from "../pages/recipe.module.scss"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulRecipes(slug: { eq: $slug }) {
      title
      tags
      categories {
        type
        slug
        contentful_id
      }
      ingredients {
        json
      }
      instructions {
        json
      }
      image {
        file {
          url
        }
      }
    }
  }
`

const Recipes = props => {
  console.log(props)
  const data = props.data.contentfulRecipes
  // console.log('recipes template')
  // console.log(data)
  return (
    <Layout>
      <Head title={`${data.title}`} recipe={true} />
      <h1>{data.title}</h1>
      {data.image !== null ? (
        <img src={data.image.file.url} alt="" />
      ) : (
        <p>no image</p>
      )}
      <div className={recipeStyles.meta}>
        <span className={recipeStyles.tags}>tags</span>
        {data.categories.map((data, i) => {
          console.log(data)
          return (
            <Link to={`/recipes/tags/${data.slug}`} key={data.contentful_id}>
              <span className={recipeStyles.tag}>{data.type}</span>
            </Link>
          )
        })}
      </div>
      <h2>Ingredients</h2>
      <div>{documentToReactComponents(data.ingredients.json)}</div>
      <br />
      <hr />
      <br />
      <h2>Instructions</h2>
      <div>{documentToReactComponents(data.instructions.json)}</div>
    </Layout>
  )
}

export default Recipes
