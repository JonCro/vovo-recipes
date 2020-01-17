import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import menuStyles from "./submenu.module.scss"

const SubMenu = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCategories(sort: { fields: slug, order: ASC }) {
        edges {
          node {
            type
            slug
            recipes {
              title
              slug
            }
            contentful_id
          }
        }
      }
    }
  `)

  return (
    <nav className={menuStyles.categoriesNav}>
      <div className={menuStyles.container}>
        <h5>Tags</h5>
        <ul className={menuStyles.categoriesList}>
          {data.allContentfulCategories.edges.map(tags => {
            return (
              <Link
                to={`/recipes/tags/${tags.node.slug}`}
                key={tags.node.contentful_id}
              >
                <li>{tags.node.type}</li>
              </Link>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default SubMenu
