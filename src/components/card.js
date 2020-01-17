import React from "react"
import { Link } from "gatsby"

import cardStyles from "./card.module.scss"

const Card = ({ image, title, tags, slug, id, path }) => {
  return (
    <li className={cardStyles.card}>
      <Link to={`/${path}/${slug}`}>
        {image !== null ? <img src={image.file.url} alt="" /> : <p>no image</p>}
        <h2>{title}</h2>
        <div className={cardStyles.cardMeta}>
          <div>
            {tags.map(tag => (
              <span className={cardStyles.tags} key={tag}>
                {tag}{" "}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </li>
  )
}

export default Card
