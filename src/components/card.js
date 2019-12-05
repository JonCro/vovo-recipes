import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import recipesStyles from './recipes.module.scss';

const Card = ({
  image,
  title,
  tags,
  slug,
  id,
  ...props
}) => {
  (
    <ol className={recipesStyles.recipes}>
      {data.allContentfulRecipes.edges.map(post => 
      (
        <li className={recipesStyles.card} key={post.node.contentful_id}>
          <Link to={`/recipes/${post.node.slug}`}>
            {post.node.image !== null ? <img src={post.node.image.file.url} alt="" /> : <p>no image</p>}
            <h2>{post.node.title}</h2>
            <div className={recipesStyles.cardMeta}>
              <div>{post.node.tags.map(tag => 
              <span className={recipesStyles.tags} key={tag}>{tag} </span>
              )}</div>
            </div>
          </Link>
        </li>
      ))}
    </ol>
  )
}

export default Card;