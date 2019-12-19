import React from 'react';
import { Link } from 'gatsby';

import recipesStyles from './card.module.scss';

const Card = ({
  image,
  title,
  tags,
  slug,
  id,
  path
  }) => {
    return (
      <li className={recipesStyles.card}>
        <Link to={`/${path}/${slug}`}>
          {image !== null ? <img src={image.file.url} alt="" /> : <p>no image</p>}
          <h2>{title}</h2>
          <div className={recipesStyles.cardMeta}>
            <div>{tags.map(tag => 
            <span className={recipesStyles.tags} key={tag}>{tag} </span>
            )}</div>
          </div>
        </Link>
      </li>
    )
  }

export default Card;