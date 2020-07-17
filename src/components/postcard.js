import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { toKebabCase } from '../helpers'

import style from '../styles/postcard.module.css'

export default ({
    title,
    path,
    coverImage,
    location,
    type,
    date,
  }) => {

    return (
        <div className={style.post}>
        <div className={style.postContent}>
        <div className="postcard">

            <h1 className={style.title}>
                <Link to={path}>{title}</Link>
            </h1>

            {coverImage && (
                <Img
                    fluid={coverImage.childImageSharp.fluid}
                    className={style.coverImage}
                />
            )}

            <div className={style.meta}>
                {location ? (
                    <div className={style.tags}>
                        <Link to={`/place/${toKebabCase(location).toLowerCase()}/`} key={toKebabCase(location)}>
                            <span className={style.tag}>{location}</span>
                        </Link>
                    </div>
                ) : null}

                {type ? (
                    <div className={style.tags}>
                        <Link to={`/type/${toKebabCase(type).toLowerCase()}/`} key={toKebabCase(type)}>
                            <span className={style.tag}>{type}</span>
                        </Link>
                    </div>
                ) : null}
            </div>

        </div>
        </div>
        </div>
    )
}