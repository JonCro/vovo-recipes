import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import recipesStyles from "./recipes.module.scss"
import Head from "../components/head"
import Card from "../components/card"

const RecipesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulRecipes(sort: { fields: title, order: ASC }) {
        edges {
          node {
            title
            slug
            tags
            image {
              file {
                url
              }
            }
            contentful_id
          }
        }
      }
    }
  `)

  // console.log('recipes page')
  // console.log(data)

  return (
    <Layout>
      <Head title={`Recipes`} recipe={true} />
      <h1>Recipes</h1>
      <ol className={recipesStyles.cardList}>
        {data.allContentfulRecipes.edges.map(post => (
          <Card
            image={post.node.image}
            title={post.node.title}
            tags={post.node.tags}
            slug={post.node.slug}
            id={post.node.contentful_id}
            path={`recipes`}
          />
        ))}
      </ol>
    </Layout>
  )
}

export default RecipesPage
