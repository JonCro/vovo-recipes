import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import menuStyles from './submenu.module.scss';

const SubMenu = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCategories {
        edges{
          node {
            type,
            recipes {
              title,
              slug
            },
            contentful_id
          }
        }
      }
    }
  `)

  return (
    <nav className={menuStyles.categoriesNav}>
      <div className={menuStyles.container}>
        <h5>Sort by category</h5>
        <ul className={menuStyles.categoriesList}>
          {data.allContentfulCategories.edges.map(tags =>
            (
              <li key={tags.node.contentful_id}>{tags.node.type}</li>
            )
          )}
        </ul>
      </div>
    </nav>
  )
}

export default SubMenu;