import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import Card from "../components/card"
import recipesStyles from "../pages/recipes.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulCategories(slug: { eq: $slug }) {
      type
      slug
      recipes {
        title
        slug
        tags
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
        contentful_id
      }
      contentful_id
    }
  }
`

const tags = props => {
  const data = props.data.contentfulCategories
  console.log("tags template")
  console.log(data)

  return (
    <Layout>
      <Head title={`Recipes - ${data.type}`} recipe={true} />
      <h1>Recipes - {data.type}</h1>
      <ol className={recipesStyles.cardList}>
        {data.recipes.map(recipe => (
          <Card
            image={recipe.image}
            title={recipe.title}
            tags={recipe.tags}
            slug={recipe.slug}
            id={recipe.contentful_id}
            path={`recipes`}
          />
        ))}
      </ol>
    </Layout>
  )
}

export default tags
